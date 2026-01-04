import HomePage from "@/components/Pages/Home/HomePage"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rhinon Web | Home",
  description: "Rhinon Web - Premium Web Design and Development Agency.",
};

const page = () => {
  return (
    <HomePage />
  )
}

export default page
