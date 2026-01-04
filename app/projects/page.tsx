import ProjectsPage from "@/components/Pages/Projects/ProjectsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Work",
    description: "Explore our portfolio of premium web applications, dashboards, and digital platforms.",
};

export default function Page() {
    return (
        <ProjectsPage />
    )
}