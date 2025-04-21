export default function InfoSection() {
    return (
        <section className="flex flex-col items-center">
            <div className="mt-24 flex w-[85%] flex-wrap items-center p-6 shadow-lg">
                <div className="flex w-full flex-col items-center justify-center border-neutral-200 py-4 sm:w-1/2 lg:w-1/4 lg:border-r">
                    <img className="p-4 transition-all duration-400 hover:opacity-50" src="/images/f-icon1.png" alt="" />
                    <p className="font-bold">Free Delivery</p>
                    <span className="text-sm text-neutral-600">Free shipping on all orders</span>
                </div>
                <div className="flex w-full flex-col items-center justify-center border-neutral-200 py-4 sm:w-1/2 lg:w-1/4 lg:border-r">
                    <img className="p-4 transition-all duration-400 hover:opacity-50" src="/images/f-icon2.png" alt="" />
                    <p className="font-bold">Return Policy</p>
                    <span className="text-sm text-neutral-600">Free shipping on all orders</span>
                </div>
                <div className="flex w-full flex-col items-center justify-center border-neutral-200 py-4 sm:w-1/2 lg:w-1/4 lg:border-r">
                    <img className="p-4 transition-all duration-400 hover:opacity-50" src="/images/f-icon3.png" alt="" />
                    <p className="font-bold">24/7 Support</p>
                    <span className="text-sm text-neutral-600">Free shipping on all orders</span>
                </div>
                <div className="flex w-full flex-col items-center justify-center py-4 sm:w-1/2 lg:w-1/4">
                    <img className="p-4 transition-all duration-400 hover:opacity-50" src="/images/f-icon4.png" alt="" />
                    <p className="font-bold">Secure Payment</p>
                    <span className="text-sm text-neutral-600">Free shipping on all orders</span>
                </div>
            </div>

            <div className="mt-24 grid w-[85%] grid-cols-6 grid-rows-4 gap-4 p-4">
                <div className="col-span-6 row-span-4 md:col-span-6 md:row-span-4 lg:col-span-4 lg:row-span-4 lg:my-4 grid grid-cols-5 grid-rows-4 gap-4">
                    <div className="group relative col-span-5 row-span-4 md:col-span-3 md:row-span-2 overflow-hidden">
                        <div className="absolute top-0 left-0 z-10 h-full w-full bg-black opacity-0 transition-all duration-300 group-hover:opacity-50"></div>
                        <img className="w-full h-full object-cover" src="/images/c1.jpg" alt="Product" />
                        <div className="absolute top-0 left-0 z-20 flex h-full w-full translate-y-full items-center justify-center text-center text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                            <h6 className="text-xl font-semibold">Product for couple</h6>
                        </div>
                    </div>
                    <div className="group relative col-span-5 row-span-4 md:col-span-2 md:col-start-4 md:row-span-2 w-full overflow-hidden">
                        <div className="absolute top-0 left-0 z-10 h-full w-full bg-black opacity-0 transition-all duration-300 group-hover:opacity-50"></div>
                        <img className="w-full  h-full object-cover" src="/images/c2.jpg" alt="Product" />
                        <div className="absolute top-0 left-0 z-20 flex h-full w-full translate-y-full items-center justify-center text-center text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                            <h6 className="text-xl font-semibold">Product for couple</h6>
                        </div>
                    </div>
                    <div className="group relative col-span-5 row-span-4 md:col-span-2 md:row-span-2 md:row-start-3 w-full overflow-hidden">
                        <div className="absolute top-0 left-0 z-10 h-full w-full bg-black opacity-0 transition-all duration-300 group-hover:opacity-50"></div>
                        <img className="w-full  h-full object-cover" src="/images/c3.jpg" alt="Product" />
                        <div className="absolute top-0 left-0 z-20 flex h-full w-full translate-y-full items-center justify-center text-center text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                            <h6 className="text-xl font-semibold">Product for couple</h6>
                        </div>
                    </div>
                    <div className="group relative col-span-5 row-span-4 md:col-span-3 md:col-start-3 md:row-span-2 md:row-start-3 w-full overflow-hidden">
                        <div className="absolute top-0 left-0 z-10 h-full w-full bg-black opacity-0 transition-all duration-300 group-hover:opacity-50"></div>
                        <img className="w-full  h-full object-cover" src="/images/c4.jpg" alt="Product" />
                        <div className="absolute top-0 left-0 z-20 flex h-full w-full translate-y-full items-center justify-center text-center text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                            <h6 className="text-xl font-semibold">Product for couple</h6>
                        </div>
                    </div>
                </div>
                <div className="col-span-6 row-span-4 lg:col-span-2 lg:row-span-4 md:my-4">
                    <div className="group relative w-full h-full overflow-hidden">
                        <div className="absolute top-0 left-0 z-10 h-full w-full bg-black opacity-0 transition-all duration-300 group-hover:opacity-50"></div>
                        <img className="w-full h-full object-cover" src="/images/c5.jpg" alt="Product" />
                        <div className="absolute top-0 left-0 z-20 flex h-full w-full translate-y-full items-center justify-center text-center text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                            <h6 className="text-xl font-semibold">Product for couple</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
