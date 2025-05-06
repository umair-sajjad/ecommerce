import { Link } from "@inertiajs/react";

export default function CartSection() {
    return (
        <>
            <table className="w-full">
                <tr className="text-left text-gray-500 border-b-1 border-gray-300">
                    <th className="px-5 py-3 font-semibold">Product</th>
                    <th> </th>
                    <th className="p-3 font-semibold">Price</th>
                    <th className="p-3 font-semibold">Quantity</th>
                    <th className="p-3"> </th>
                </tr>
                <tr className="border-b-1 border-gray-300 text-left">
                    <td>
                        <div className="px-5 py-7">
                            <img src="/images/cartimg.jpg"  className="h-[100px]" alt="" />
                        </div>
                    </td>
                    <td className="text-sm text-gray-500 text-left px-3">Minimalistic shop for multipurpose use</td>
                    <td className="px-3 text-sm font-semibold">$350.00</td>
                    <td className="px-3">
                        <div className="flex border-1 border-gray-300 rounded-md w-25 justify-between h-10">
                            <div className="flex justify-center items-center border-r-1 border-gray-300 w-[75%]">
                                <span>0</span>
                            </div>
                            <div className="flex flex-col justify-center items-center w-[25%]">
                                <button className="w-full h-[50%] flex justify-center items-center cursor-pointer text-gray-300 hover:text-gray-500 transition-all ease-in-out duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                    </svg>
                                </button>
                                <button className="w-full h-[50%] flex justify-center items-center border-t-1 border-gray-300 cursor-pointer  text-gray-300 hover:text-gray-500 transition-all ease-in-out duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </td>
                    <td className="p-3">
                        <button className="w-25 h-10 bg-[#FF6C00] text-white">Remove</button>
                    </td>
                </tr>
                <tr className="border-b-1 border-gray-300 text-left">
                    <td>
                        <div className="px-5 py-7">
                            <img src="/images/cartimg.jpg"  className="h-[100px]" alt="" />
                        </div>
                    </td>
                    <td className="text-sm text-gray-500 text-left px-3">Minimalistic shop for multipurpose use</td>
                    <td className="px-3 text-sm font-semibold">$350.00</td>
                    <td className="px-3">
                        <div className="flex border-1 border-gray-300 rounded-md w-25 justify-between h-10">
                            <div className="flex justify-center items-center border-r-1 border-gray-300 w-[75%]">
                                <span>0</span>
                            </div>
                            <div className="flex flex-col justify-center items-center w-[25%]">
                                <button className="w-full h-[50%] flex justify-center items-center cursor-pointer text-gray-300 hover:text-gray-500 transition-all ease-in-out duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                    </svg>
                                </button>
                                <button className="w-full h-[50%] flex justify-center items-center border-t-1 border-gray-300 cursor-pointer  text-gray-300 hover:text-gray-500 transition-all ease-in-out duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </td>
                    <td className="p-3">
                        <button className="w-25 h-10 bg-[#FF6C00] text-white">Remove</button>
                    </td>
                </tr>
                <tr className="border-b-1 border-gray-300 text-left">
                    <td>
                        <div className="px-5 py-7">
                            <img src="/images/cartimg.jpg"  className="h-[100px]" alt="" />
                        </div>
                    </td>
                    <td className="text-sm text-gray-500 text-left px-3">Minimalistic shop for multipurpose use</td>
                    <td className="px-3 text-sm font-semibold">$350.00</td>
                    <td className="px-3">
                        <div className="flex border-1 border-gray-300 rounded-md w-25 justify-between h-10">
                            <div className="flex justify-center items-center border-r-1 border-gray-300 w-[75%]">
                                <span>0</span>
                            </div>
                            <div className="flex flex-col justify-center items-center w-[25%]">
                                <button className="w-full h-[50%] flex justify-center items-center cursor-pointer text-gray-300 hover:text-gray-500 transition-all ease-in-out duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                    </svg>
                                </button>
                                <button className="w-full h-[50%] flex justify-center items-center border-t-1 border-gray-300 cursor-pointer  text-gray-300 hover:text-gray-500 transition-all ease-in-out duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </td>
                    <td className="p-3">
                        <button className="w-25 h-10 bg-[#FF6C00] text-white">Remove</button>
                    </td>
                </tr>
            </table>
            <div className="flex justify-end my-8">
                <Link href="/shop" className="uppercase bg-[#E8F0F2] px-10 text-sm py-3 font-semibold hover:text-[#0056B3] transition-all ease-in-out duration-300">continue shopping</Link>
                <Link href="/checkout" className="uppercase px-10 text-sm py-3 text-white font-semibold transition-all ease-in-out duration-300 relative overflow-hidden bg-gradient-to-r from-[#ffba00] to-[#ff6c00] before:absolute before:top-0 before:left-[-150%] before:h-full before:w-full before:skew-x-[40deg] before:bg-black before:opacity-0 before:transition-all before:duration-300 before:ease-in-out before:content-[''] hover:before:left-[150%] hover:before:opacity-30">proceed to checkout</Link>
            </div>
        </>
    );
}
