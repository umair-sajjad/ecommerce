import 'owl.carousel/dist/assets/owl.carousel.css';
import OwlCarousel from 'react-owl-carousel';
import { Link } from '@inertiajs/react';

export default function ProductsSection() {
    const options = {
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: [
            // Previous button
            `<div class="absolute top-23 opacity-50 hover:opacity-100 left-5 sm:left-20 lg:left-50 xl:left-80">
            <div class="flex cursor-pointer flex-col items-end font-bold text-gray-800 uppercase">
                <div class="text-sm">Prev</div>
                    <div class="text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 60 24" stroke-width="3" stroke="black" class="h-4 w-auto text-zinc-800">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 16L4 12m0 0l4-4M4 12h50" />
                        </svg>
                    </div>
                </div>
            </div>`,
            `<div class="absolute top-23 opacity-50 hover:opacity-100 right-5 sm:right-20 lg:right-50 xl:right-80">
            <div class="flex cursor-pointer flex-col items-start font-bold text-gray-800 uppercase">
                <div class="text-sm">Next</div>
                <div class="text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 60 24" stroke-width="3" stroke="black" class="h-4 w-auto text-zinc-800">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M46 16L50 12m0 0L46 8M50 12H4" />
                    </svg>
                </div>
            </div>
        </div>`,
        ],
    };
    return (
        <OwlCarousel className="owl-theme" {...options}>
            <section className="mt-20 flex flex-col items-center">
                <div className="relative flex w-[85%] max-w-6xl flex-col items-center">
                    <div className="flex items-center justify-center">
                        <h1 className="text-center text-3xl font-semibold sm:text-4xl md:text-5xl">Coming Products</h1>
                    </div>
                    <p className="mt-4 w-[90%] text-center text-[14px] text-gray-600 md:w-[85%] lg:w-[60%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ducimus dolorum eveniet officia iste sit mollitia odio
                        odit sint.
                    </p>
                </div>
                <div className="mt-10 mb-10 flex w-[85%] max-w-6xl flex-wrap items-center justify-between">
                    <div className="my-5 w-full px-4 md:w-1/2 lg:w-1/4">
                        <div>
                            <img src="/images/p1.jpg" className="w-full" alt="" />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-lg font-semibold uppercase">adidas new summer hummer sole for men sports</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-8 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            <div className="mt-5 flex items-center">
                                <button className="group flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        ADD TO BAG
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        LIKE
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        WISHLIST
                                    </span>
                                </button>
                                <Link href="#" className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        VIEW
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 w-full px-4 md:w-1/2 lg:w-1/4">
                        <div>
                            <img src="/images/p3.jpg" className="w-full" alt="" />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-lg font-semibold uppercase">adidas new summer hummer sole for men sports</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-8 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            <div className="mt-5 flex items-center">
                                <button className="group flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        ADD TO BAG
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        LIKE
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        WISHLIST
                                    </span>
                                </button>
                                <Link href="#" className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        VIEW
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 w-full px-4 md:w-1/2 lg:w-1/4">
                        <div>
                            <img src="/images/p4.jpg" className="w-full" alt="" />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-lg font-semibold uppercase">adidas new summer hummer sole for men sports</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-8 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            <div className="mt-5 flex items-center">
                                <button className="group flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        ADD TO BAG
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        LIKE
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        WISHLIST
                                    </span>
                                </button>
                                <Link href="#" className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        VIEW
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 w-full px-4 md:w-1/2 lg:w-1/4">
                        <div>
                            <img src="/images/p6.jpg" className="w-full" alt="" />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-lg font-semibold uppercase">adidas new summer hummer sole for men sports</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-8 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            <div className="mt-5 flex items-center">
                                <button className="group flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        ADD TO BAG
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        LIKE
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        WISHLIST
                                    </span>
                                </button>
                                <Link href="#" className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        VIEW
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 w-full px-4 md:w-1/2 lg:w-1/4">
                        <div>
                            <img src="/images/p1.jpg" className="w-full" alt="" />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-lg font-semibold uppercase">adidas new summer hummer sole for men sports</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-8 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            <div className="mt-5 flex items-center">
                                <button className="group flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        ADD TO BAG
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        LIKE
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        WISHLIST
                                    </span>
                                </button>
                                <Link href="#" className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        VIEW
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 w-full px-4 md:w-1/2 lg:w-1/4">
                        <div>
                            <img src="/images/p6.jpg" className="w-full" alt="" />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-lg font-semibold uppercase">adidas new summer hummer sole for men sports</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-8 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            <div className="mt-5 flex items-center">
                                <button className="group flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        ADD TO BAG
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        LIKE
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        WISHLIST
                                    </span>
                                </button>
                                <Link href="#" className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        VIEW
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 w-full px-4 md:w-1/2 lg:w-1/4">
                        <div>
                            <img src="/images/p1.jpg" className="w-full" alt="" />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-lg font-semibold uppercase">adidas new summer hummer sole for men sports</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-8 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            <div className="mt-5 flex items-center">
                                <button className="group flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        ADD TO BAG
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        LIKE
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        WISHLIST
                                    </span>
                                </button>
                                <Link href="#" className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        VIEW
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 w-full px-4 md:w-1/2 lg:w-1/4">
                        <div>
                            <img src="/images/p1.jpg" className="w-full" alt="" />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-lg font-semibold uppercase">adidas new summer hummer sole for men sports</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-8 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            <div className="mt-5 flex items-center">
                                <button className="group flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        ADD TO BAG
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        LIKE
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        WISHLIST
                                    </span>
                                </button>
                                <Link href="#" className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        VIEW
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-20 flex flex-col items-center">
                <div className="relative flex w-[85%] max-w-6xl flex-col items-center">
                    <div className="flex items-center justify-center">
                        <h1 className="text-center text-3xl font-semibold sm:text-4xl md:text-5xl">Latest Products</h1>
                    </div>
                    <p className="mt-4 w-[90%] text-center text-[14px] text-gray-600 md:w-[85%] lg:w-[60%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ducimus dolorum eveniet officia iste sit mollitia odio
                        odit sint.
                    </p>
                </div>
                <div className="mt-10 mb-10 flex w-[85%] max-w-6xl flex-wrap items-center justify-between">
                    <div className="my-5 w-full px-4 md:w-1/2 lg:w-1/4">
                        <div>
                            <img src="/images/p8.jpg" className="w-full" alt="" />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-lg font-semibold uppercase">adidas new summer hummer sole for men sports</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-8 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            <div className="mt-5 flex items-center">
                                <button className="group flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        ADD TO BAG
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        LIKE
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        WISHLIST
                                    </span>
                                </button>
                                <Link href="#" className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        VIEW
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 w-full px-4 md:w-1/2 lg:w-1/4">
                        <div>
                            <img src="/images/p6.jpg" className="w-full" alt="" />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-lg font-semibold uppercase">adidas new summer hummer sole for men sports</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-8 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            <div className="mt-5 flex items-center">
                                <button className="group flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        ADD TO BAG
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        LIKE
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        WISHLIST
                                    </span>
                                </button>
                                <Link href="#" className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        VIEW
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 w-full px-4 md:w-1/2 lg:w-1/4">
                        <div>
                            <img src="/images/p4.jpg" className="w-full" alt="" />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-lg font-semibold uppercase">adidas new summer hummer sole for men sports</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-8 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            <div className="mt-5 flex items-center">
                                <button className="group flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        ADD TO BAG
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        LIKE
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        WISHLIST
                                    </span>
                                </button>
                                <Link href="#" className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        VIEW
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 w-full px-4 md:w-1/2 lg:w-1/4">
                        <div>
                            <img src="/images/p3.jpg" className="w-full" alt="" />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-lg font-semibold uppercase">adidas new summer hummer sole for men sports</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-8 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            <div className="mt-5 flex items-center">
                                <button className="group flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        ADD TO BAG
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        LIKE
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        WISHLIST
                                    </span>
                                </button>
                                <Link href="#" className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        VIEW
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 w-full px-4 md:w-1/2 lg:w-1/4">
                        <div>
                            <img src="/images/p1.jpg" className="w-full" alt="" />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-lg font-semibold uppercase">adidas new summer hummer sole for men sports</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-8 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            <div className="mt-5 flex items-center">
                                <button className="group flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        ADD TO BAG
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        LIKE
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        WISHLIST
                                    </span>
                                </button>
                                <Link href="#" className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        VIEW
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 w-full px-4 md:w-1/2 lg:w-1/4">
                        <div>
                            <img src="/images/p1.jpg" className="w-full" alt="" />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-lg font-semibold uppercase">adidas new summer hummer sole for men sports</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-8 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            <div className="mt-5 flex items-center">
                                <button className="group flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        ADD TO BAG
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        LIKE
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        WISHLIST
                                    </span>
                                </button>
                                <Link href="#" className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        VIEW
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 w-full px-4 md:w-1/2 lg:w-1/4">
                        <div>
                            <img src="/images/p1.jpg" className="w-full" alt="" />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-lg font-semibold uppercase">adidas new summer hummer sole for men sports</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-8 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            <div className="mt-5 flex items-center">
                                <button className="group flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        ADD TO BAG
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        LIKE
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        WISHLIST
                                    </span>
                                </button>
                                <Link href="#" className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        VIEW
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 w-full px-4 md:w-1/2 lg:w-1/4">
                        <div>
                            <img src="/images/p1.jpg" className="w-full" alt="" />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-lg font-semibold uppercase">adidas new summer hummer sole for men sports</h2>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-8 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            <div className="mt-5 flex items-center">
                                <button className="group flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        ADD TO BAG
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        LIKE
                                    </span>
                                </button>
                                <button className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        WISHLIST
                                    </span>
                                </button>
                                <Link href="#" className="group ml-1 flex cursor-pointer items-center">
                                    <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-7 lg:w-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="white"
                                            className="size-5 lg:h-5 lg:w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </div>
                                    <span className="ml-1 max-w-0 overflow-hidden text-[12px] font-semibold whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[100px] group-hover:opacity-100">
                                        VIEW
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </OwlCarousel>
    );
}
