import ContactUs from "@/components/Pages/ContactUs/ContactUs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Rhinon Web to start your next digital project.",
};

export default function page() {
    return <ContactUs />
}