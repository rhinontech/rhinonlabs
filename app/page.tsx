import HomePage from "@/components/Pages/Home/HomePage"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rhinon Web | Home",
  description: "Fix broken internal tools & dashboards. Custom admin panels and internal systems for scaling enterprises.",
};

const page = () => {
  return (
    <HomePage />
  )
}

export default page
