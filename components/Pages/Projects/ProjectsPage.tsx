import { TextGenerateEffect } from "@/components/ui/text-generate-effect";



const slides = [
    {
        id: 1,
        image: "https://i.pinimg.com/1200x/01/51/01/015101cfe267c0121d3090cb7c50c3e2.jpg",
        title: "LIVE SESSIONS",
    },
    {
        id: 2,
        image: "https://i.pinimg.com/1200x/cf/22/e7/cf22e7cf7e6c8e954b0d08c367c48ba9.jpg",
        title: "COMMUNITY MEETUPS",
    },
    {
        id: 3,
        image: "https://i.pinimg.com/1200x/74/7c/a6/747ca61f72a40e64f2c6fdabaeeb1bc2.jpg",
        title: "LEARN BY BUILDING",
    },
    {
        id: 4,
        image: "https://i.pinimg.com/736x/e3/bf/11/e3bf11f2d1a755f5128fd37b0cacdb33.jpg",
        title: "LEARN BY BUILDING",
    },
];

const ProjectsPage = () => {
    return (
        <div className="relative flex flex-col ">
            <div className="absolute inset-0 top-0 left-0 -z-10">
                <div className="[mask-image:linear-gradient(to_bottom,transparent,white_30%,white_60%,transparent)]
                mask-mode:luminance">
                    <img src="https://framerusercontent.com/images/VeiBx4I8kxeohO3NysSUJ3HNiN8.jpg?scale-down-to=2048" className="w-full h-full object-cover" alt="" />
                </div>
            </div>
            <div>
                <div className=" pt-44 px-5 pb-10 flex flex-col gap-10 max-w-[1400] mx-auto" >
                    <div className="flex flex-col gap-5 items-center">
                        <p className="text-center">PORTFOLIO</p>

                        <div className="flex flex-col gap-0">
                            <TextGenerateEffect words={"Selected Works"} />

                        </div>
                        <p className="text-center max-w-2xl text-lg text-white/80">Altair delivers top-tier design services through a simple subscription model. No contracts, no hidden fees – just consistent, high-quality design.</p>
                    </div>
                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5">
                        {slides.map((slide) => (
                            <div key={slide.id} className="group border border-white/30 relative w-full h-[450px] overflow-hidden cursor-pointer">
                                {/* IMAGE */}
                                <img
                                    src={slide.image}
                                    alt="project"
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-70"
                                />

                                {/* MASK OVERLAY */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                                {/* CONTENT ON HOVER */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <h3 className="text-white text-center text-2xl font-semibold">{slide.title}</h3>
                                    <p className="text-gray-200 text-center text-sm tracking-wide">WEB DESIGN</p>

                                    <button className="mt-3 px-5 py-2 bg-white/20 text-white rounded-full backdrop-blur-md border border-white/30 hover:bg-white/30 transition">
                                        View Project
                                    </button>
                                </div>
                            </div>
                        ))}
                        

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProjectsPage;