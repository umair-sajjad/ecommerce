import { Link } from '@inertiajs/react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';

export default function OfferSection() {
    const options = {
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: [
            // Previous button
            `<div class="absolute left-[-60px] md:left-[-100px] lg:left-[-70px] sm:left-[-100px] top-1/2 transform -translate-y-1/2 opacity-50 hover:opacity-100">
                <div class="flex cursor-pointer flex-col items-end font-bold text-gray-800 uppercase">
                    <div class="text-sm">Prev</div>
                        <div class="text-xs">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 60 24"
                            stroke-width="3"
                            stroke="black"
                            class="h-4 w-auto text-zinc-800"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8 16L4 12m0 0l4-4M4 12h50"
                            />
                        </svg>
                    </div>
                </div>
            </div>`,
            `<div class="absolute right-[-60px] md:right-[-100px] lg:right-[-70px] sm:right-[-100px] opacity-50 hover:opacity-100 top-1/2 transform -translate-y-1/2">
                <div class="flex cursor-pointer flex-col items-start font-bold text-gray-800 uppercase">
                    <div class="text-sm">Next</div>
                    <div class="text-xs">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 60 24"
                        stroke-width="3"
                        stroke="black"
                        class="h-4 w-auto text-zinc-800"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M46 16L50 12m0 0L46 8M50 12H4"
                        />
                    </svg>
                    </div>
                </div>
            </div>`,
        ],
    };
    const [timeLeft, setTimeLeft] = useState({
        days: '29',
        hours: '23',
        minutes: '59',
        seconds: '59',
    });

    useEffect(() => {
        // Set target date 29 days ahead once
        const startDate = new Date();
        const targetDate = new Date(startDate.getTime() + 29 * 24 * 60 * 60 * 1000);

        const updateTimer = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
                    hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
                    minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
                    seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
                });
            } else {
                // If time is up
                setTimeLeft({
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00',
                });
                clearInterval(timer);
            }
        };

        // Update every second
        const timer = setInterval(updateTimer, 1000);

        // Call immediately to avoid 1 second delay
        updateTimer();

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="flex w-full flex-col lg:flex-row items-stretch">
            <div className="flex w-full lg:w-1/2 flex-col items-center justify-center bg-[url(/images/exclusive.jpg)] bg-cover bg-center bg-no-repeat py-[275px] text-white relative">
                <div className="absolute top-0 left-0 z-10 h-full w-full bg-black opacity-50"></div>
                <div className="relative z-20 w-[75%] text-center">
                    <h1 className="text-4xl font-semibold">Exclusive Hot Deal Ends Soon!</h1>
                    <p className="mt-2 text-sm">Who are in extremely love with eco friendly system.</p>
                    <div className="mx-auto mt-10 flex items-center justify-center rounded-xl bg-white p-5">
                        {[
                            { label: 'Days', value: timeLeft.days },
                            { label: 'Hours', value: timeLeft.hours },
                            { label: 'Mins', value: timeLeft.minutes },
                            { label: 'Secs', value: timeLeft.seconds },
                        ].map((item, index) => (
                            <div key={index} className="flex w-1/4 flex-col items-center justify-center border-r-1 border-gray-300 last:border-r-0">
                                <h2 className="text-4xl font-semibold text-black">{item.value}</h2>
                                <span className="text-black">{item.label}</span>
                            </div>
                        ))}
                    </div>
                    <Link
                        href="/shop"
                        className="relative mt-10 inline-block overflow-hidden rounded-full bg-gradient-to-r from-[#ffba00] to-[#ff6c00] px-7 py-4 font-semibold text-white uppercase transition-all duration-300 ease-in-out before:absolute before:top-0 before:left-[-150%] before:h-full before:w-full before:skew-x-[40deg] before:bg-black before:opacity-0 before:transition-all before:duration-300 before:ease-in-out before:content-[''] hover:before:left-[150%] hover:before:opacity-30"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
            <div className="relative flex w-full lg:w-1/2 items-center justify-center bg-[#F9F9FF] py-[100px] md:[175px]">
                <div className="flex w-[60%] sm:[45%]">
                    <OwlCarousel className="owl-theme" {...options}>
                        <div className="flex flex-col items-center justify-center">
                            <div className="h-auto w-full">
                                <img src="/images/e-p1.png" className="w-full" alt="" />
                            </div>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-8 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            <h2 className="text-2xl font-semibold uppercase text-center">adidas new summer hummer sole for men sports</h2>
                            <div className="mt-6 flex items-center">
                                <button className="flex cursor-pointer items-center">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-90 from-[#ffba00] from-0% to-[#ff6c00] to-100% lg:h-7 lg:w-7">
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
                                    <span className="ml-3 max-w-[100px] overflow-hidden text-[12px] font-semibold">ADD TO BAG</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="h-auto w-full">
                                <img src="/images/e-p1.png" className="w-full" alt="" />
                            </div>
                            <p className="my-2 text-[14px] font-bold text-gray-700">
                                $150.00
                                <span className="ml-8 text-stone-400">
                                    <s>$210.00</s>
                                </span>
                            </p>
                            <h2 className="text-xl sm:text-2xl font-semibold uppercase text-center">adidas new summer hummer sole for men sports</h2>
                            <div className="mt-6 flex items-center">
                                <button className="flex cursor-pointer items-center">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-90 from-[#ffba00] from-0% to-[#ff6c00] to-100% lg:h-7 lg:w-7">
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
                                    <span className="ml-3 max-w-[100px] overflow-hidden text-[12px] font-semibold">ADD TO BAG</span>
                                </button>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
}
