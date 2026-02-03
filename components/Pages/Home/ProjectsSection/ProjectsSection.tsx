'use client'
import { motion } from "framer-motion";
import { projects } from "../../Projects/data";

const ProjectsSection = () => {
    return (
        <section id="projects" className="relative py-20 px-5">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-semibold">
                        Projects we've built so far
                    </h2>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.slice(0, 4).map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group border border-white/30 relative w-full h-[350px] overflow-hidden cursor-pointer rounded-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* IMAGE */}
                            <img
                                src={project.images[0]}
                                alt={project.title}
                                className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-70"
                            />

                            {/* MASK OVERLAY */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                            {/* CONTENT ON HOVER */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <h3 className="text-white text-center text-2xl font-medium">{project.title}</h3>
                                <p className="text-gray-200 text-center text-sm tracking-wide">{project.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
