import About from "@/components/Pages/About/About";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about Rhinon Web, our team, and our mission to deliver enterprise-grade digital solutions.",
};

export default function page() {
    return (
        <About />
    )
}