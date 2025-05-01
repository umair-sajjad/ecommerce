export default function WeekSection() {
    return (
        <>
            <section className="flex flex-wrap justify-center">
                <div className="flex w-full max-w-6xl flex-col items-center justify-center sm:w-[95%] md:flex-row md:justify-between lg:w-[75%]">
                    <div className="flex w-full items-center justify-evenly md:hidden">
                        <div className="flex flex-col items-center justify-between">
                            <img
                                src="/images/1.png"
                                className="my-15 cursor-pointer opacity-50 transition-all duration-200 ease-in-out hover:opacity-100"
                                alt=""
                            />
                            <img
                                src="/images/2.png"
                                className="mb-15 cursor-pointer opacity-50 transition-all duration-200 ease-in-out hover:opacity-100"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-center justify-between">
                            <img
                                src="/images/3.png"
                                className="my-15 cursor-pointer opacity-50 transition-all duration-200 ease-in-out hover:opacity-100"
                                alt=""
                            />
                            <img
                                src="/images/4.png"
                                className="mb-15 cursor-pointer opacity-50 transition-all duration-200 ease-in-out hover:opacity-100"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between md:hidden">
                        <img
                            src="/images/5.png"
                            className="mb-15 cursor-pointer opacity-50 transition-all duration-200 ease-in-out hover:opacity-100"
                            alt=""
                        />
                    </div>
                    <img
                        src="/images/1.png"
                        className="my-15 hidden cursor-pointer opacity-50 transition-all duration-200 ease-in-out hover:opacity-100 md:block"
                        alt=""
                    />
                    <img
                        src="/images/2.png"
                        className="my-15 hidden cursor-pointer opacity-50 transition-all duration-200 ease-in-out hover:opacity-100 md:block"
                        alt=""
                    />
                    <img
                        src="/images/3.png"
                        className="my-15 hidden cursor-pointer opacity-50 transition-all duration-200 ease-in-out hover:opacity-100 md:block"
                        alt=""
                    />
                    <img
                        src="/images/4.png"
                        className="my-15 hidden cursor-pointer opacity-50 transition-all duration-200 ease-in-out hover:opacity-100 md:block"
                        alt=""
                    />
                    <img
                        src="/images/5.png"
                        className="my-15 hidden cursor-pointer opacity-50 transition-all duration-200 ease-in-out hover:opacity-100 md:block"
                        alt=""
                    />
                </div>
            </section>
            <section className="mt-10 flex flex-col items-center">
                <div className="flex w-[85%] max-w-6xl flex-col items-center">
                    <div className="flex items-center justify-center">
                        <h1 className="text-center text-3xl font-semibold sm:text-4xl md:text-5xl">Deal of the Week</h1>
                    </div>
                    <p className="mt-4 w-[90%] text-center text-[14px] text-gray-600 md:w-[85%] lg:w-[60%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ducimus dolorum eveniet officia iste sit mollitia odio
                        odit sint.
                    </p>
                </div>
                <div className="my-10 lg:w-[85%] p-4 flex justify-between items-stretch max-w-6xl">
                    <div className="flex flex-wrap justify-around sm:justify-between">
                        <div className="flex justify-between group hover:cursor-pointer my-4">
                            <div>
                                <img src="/images/r1.jpg" className="w-20"  alt="fsgdf" />
                            </div>
                            <div className="flex flex-col items-center p-3">
                            <h2 className="text-sm uppercase group-hover:text-[#ffc107] transition-all ease-in-out duration-300">black hale heel</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-3 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            </div>
                        </div>
                        <div className="flex justify-between group hover:cursor-pointer my-4">
                            <div>
                                <img src="/images/r2.jpg" className="w-20"  alt="fsgdf" />
                            </div>
                            <div className="flex flex-col items-center p-3">
                            <h2 className="text-sm uppercase group-hover:text-[#ffc107] transition-all ease-in-out duration-300">black hale heel</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-3 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            </div>
                        </div>
                        <div className="flex justify-between group hover:cursor-pointer my-4">
                            <div>
                                <img src="/images/r3.jpg" className="w-20"  alt="fsgdf" />
                            </div>
                            <div className="flex flex-col items-center p-3">
                            <h2 className="text-sm uppercase group-hover:text-[#ffc107] transition-all ease-in-out duration-300">black hale heel</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-3 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            </div>
                        </div>
                        <div className="flex justify-between group hover:cursor-pointer my-4">
                            <div>
                                <img src="/images/r9.jpg" className="w-20"  alt="fsgdf" />
                            </div>
                            <div className="flex flex-col items-center p-3">
                            <h2 className="text-sm uppercase group-hover:text-[#ffc107] transition-all ease-in-out duration-300">black hale heel</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-3 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            </div>
                        </div>
                        <div className="flex justify-between group hover:cursor-pointer my-4">
                            <div>
                                <img src="/images/r5.jpg" className="w-20"  alt="fsgdf" />
                            </div>
                            <div className="flex flex-col items-center p-3">
                            <h2 className="text-sm uppercase group-hover:text-[#ffc107] transition-all ease-in-out duration-300">black hale heel</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-3 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            </div>
                        </div>
                        <div className="flex justify-between group hover:cursor-pointer my-4">
                            <div>
                                <img src="/images/r6.jpg" className="w-20"  alt="fsgdf" />
                            </div>
                            <div className="flex flex-col items-center p-3">
                            <h2 className="text-sm uppercase group-hover:text-[#ffc107] transition-all ease-in-out duration-300">black hale heel</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-3 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            </div>
                        </div>
                        <div className="flex justify-between group hover:cursor-pointer my-4">
                            <div>
                                <img src="/images/r7.jpg" className="w-20"  alt="fsgdf" />
                            </div>
                            <div className="flex flex-col items-center p-3">
                            <h2 className="text-sm uppercase group-hover:text-[#ffc107] transition-all ease-in-out duration-300">black hale heel</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-3 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            </div>
                        </div>
                        <div className="flex justify-between group hover:cursor-pointer my-4">
                            <div>
                                <img src="/images/r11.jpg" className="w-20"  alt="fsgdf" />
                            </div>
                            <div className="flex flex-col items-center p-3">
                            <h2 className="text-sm uppercase group-hover:text-[#ffc107] transition-all ease-in-out duration-300">black hale heel</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-3 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            </div>
                        </div>
                        <div className="flex justify-between group hover:cursor-pointer my-4">
                            <div>
                                <img src="/images/r10.jpg" className="w-20"  alt="fsgdf" />
                            </div>
                            <div className="flex flex-col items-center p-3">
                            <h2 className="text-sm uppercase group-hover:text-[#ffc107] transition-all ease-in-out duration-300">black hale heel</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-3 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden w-[70%] px-5 xl:flex items-center justify-center">
                        <img src="/images/c5.jpg" className="w-full" alt="" />
                    </div>
                </div>
            </section>
        </>
    );
}
