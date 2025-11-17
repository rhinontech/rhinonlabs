const Feature = () => {
    return (
        <div className="py-10 max-w-6xl mx-auto flex flex-col space-y-5">

            <div className="flex justify-between gap-20">
                <h2 className="text-6xl">Design <br /> Made Simple.</h2>
                <div className="flex justify-end items-end">
                    <p className="max-w-md ml-5">Get agency-quality design without the bloated costs, slow timelines, or endless back-and-forth. Just reliable, high-quality creative delivered on your terms.</p>
                </div>
            </div>

            {/* features */}

            <div className="flex gap-3">
                <div className="h-[450px] relative overflow-hidden p-1">
                    <div className="absolute -z-1 inset-0 bg-[url('https://framerusercontent.com/images/DcZTJRkP9j3qoL7SfBczfMtFIW8.jpg?scale-down-to=1024')] bg-cover bg-center blur-sm"></div>
                    <div className=" z-20 flex h-full items-end bg-[url('https://framerusercontent.com/images/DcZTJRkP9j3qoL7SfBczfMtFIW8.jpg?scale-down-to=1024')] bg-cover bg-center">
                        <div className="w-full px-7 pb-7 flex flex-col gap-3">
                            <h2 className="font-semibold text-lg">No contracts, just design</h2>
                            <p>Enjoy complete flexibility with no long-term commitments.</p>
                        </div>
                    </div>
                </div>
                <div className="h-[450px] relative overflow-hidden p-1">
                    <div className="absolute -z-1 inset-0 bg-[url('https://framerusercontent.com/images/DcZTJRkP9j3qoL7SfBczfMtFIW8.jpg?scale-down-to=1024')] bg-cover bg-center blur-sm"></div>
                    <div className=" z-20 flex h-full items-end bg-[url('https://framerusercontent.com/images/DcZTJRkP9j3qoL7SfBczfMtFIW8.jpg?scale-down-to=1024')] bg-cover bg-center">
                        <div className="w-full px-7 pb-7 flex flex-col gap-3">
                            <h2 className="font-semibold text-lg">No contracts, just design</h2>
                            <p>Enjoy complete flexibility with no long-term commitments.</p>
                        </div>
                    </div>
                </div>
                <div className="h-[450px] relative overflow-hidden p-1">
                    <div className="absolute -z-1 inset-0 bg-[url('https://framerusercontent.com/images/DcZTJRkP9j3qoL7SfBczfMtFIW8.jpg?scale-down-to=1024')] bg-cover bg-center blur-sm"></div>
                    <div className=" z-20 flex h-full items-end bg-[url('https://framerusercontent.com/images/DcZTJRkP9j3qoL7SfBczfMtFIW8.jpg?scale-down-to=1024')] bg-cover bg-center">
                        <div className="w-full px-7 pb-7 flex flex-col gap-3">
                            <h2 className="font-semibold text-lg">No contracts, just design</h2>
                            <p>Enjoy complete flexibility with no long-term commitments.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}


export default Feature;