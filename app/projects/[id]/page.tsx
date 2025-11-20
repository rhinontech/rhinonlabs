import ProjectDetail from "@/components/Pages/Projects/ProjectDetail";
import { projects } from "@/components/Pages/Projects/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects.find((p) => p.id.toString() === id);

    if (!project) {
        notFound();
    }

    return <ProjectDetail project={project} />;
}
