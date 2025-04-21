export default function ProductsSection() {
    return (
        <section className="mt-20 flex flex-col items-center ">
            <div className="flex flex-col items-center w-[85%]">
                <div className="flex items-center justify-center">
                    <div className="opacity-50 hover:opacity-100 mt-4">
                        <div className="flex flex-col items-end cursor-pointer font-bold text-gray-800 uppercase">
                            <div className="text-sm">Prev</div>
                            <div className="text-xs">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 60 24"
                                    strokeWidth="3"
                                    stroke="black"
                                    className="h-6 w-auto text-zinc-800"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16L4 12m0 0l4-4M4 12h50" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <h1 className="px-15 text-5xl font-semibold">Coming Products</h1>
                    <div className="opacity-50 hover:opacity-100 mt-4">
                        <div className="flex flex-col items-start cursor-pointer font-bold text-gray-800 uppercase">
                            <div className="text-sm">Next</div>
                            <div className="text-xs">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 60 24"
                                    strokeWidth="3"
                                    stroke="black"
                                    className="h-6 w-auto text-zinc-800"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M46 16L50 12m0 0L46 8M50 12H4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <p className="w-xl text-[14px] text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ducimus dolorum eveniet officia iste sit mollitia odio
                        odit sint. eveniet officia iste sit mollitia odio
                        odit sint.
                    </p>
                </div>
            </div>
        </section>
    );
}
