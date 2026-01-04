"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface Lead {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    message: string;
    service?: string;
    company?: string;
    createdAt: string;
}

// Metadata cannot be exported from a Client Component like this in the same file if using "use client"
// But since we need "use client" for hooks, we have to rely on layout or external metadata file,
// OR since it's a client component, we might not get server-side metadata injection the same way.
// HOWEVER, "robots.ts" handles the global rule for /admin.
// I will remove the metadata export attempt here since it will cause an error in a "use client" file 
// if not handled carefully, and rely on `robots.ts` which I already created to disallow /admin.

export default function AdminDashboard() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetchLeads();
        document.title = "Admin Dashboard"; // Client-side fallback
    }, []);

    const fetchLeads = async () => {
        try {
            const res = await fetch("/api/leads");
            if (res.status === 401) {
                router.push("/admin/login");
                return;
            }
            const data = await res.json();
            if (data.success) {
                setLeads(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch leads", error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
    };

    if (loading) return <div className="p-10 text-white">Loading...</div>;

    return (
        <div className="min-h-screen bg-black text-white pb-10 pt-28">
            <div className="flex justify-between items-center mb-10 max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold">Admin Dashboard - Leads</h1>
                <Button onClick={handleLogout} variant="destructive">
                    Logout
                </Button>
            </div>

            <div className="max-w-6xl mx-auto overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-zinc-700">
                            <th className="p-4">Date</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">Email</th>
                            <th className="p-4">Service</th>
                            <th className="p-4">Company</th>
                            <th className="p-4">Phone</th>
                            <th className="p-4 min-w-[300px]">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leads.map((lead) => (
                            <tr key={lead._id} className="border-b border-zinc-800 hover:bg-zinc-900 icon-transition">
                                <td className="p-4 text-zinc-400">
                                    {new Date(lead.createdAt).toLocaleDateString()}
                                </td>
                                <td className="p-4 font-medium">{lead.name}</td>
                                <td className="p-4 text-zinc-300">{lead.email}</td>
                                <td className="p-4 text-zinc-300">{lead.service || "-"}</td>
                                <td className="p-4 text-zinc-300">{lead.company || "-"}</td>
                                <td className="p-4 text-zinc-300">{lead.phone || "-"}</td>
                                <td className="p-4 text-zinc-400 text-sm whitespace-pre-wrap">{lead.message}</td>
                            </tr>
                        ))}
                        {leads.length === 0 && (
                            <tr>
                                <td colSpan={7} className="p-8 text-center text-zinc-500">
                                    No leads found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
