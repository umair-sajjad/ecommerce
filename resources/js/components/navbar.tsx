import { Link, usePage } from "@inertiajs/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const page = usePage();
    const current = page.url;

    const isActive  = (path: string) => {
        if (path === '/') {
            return current === '/'; // only active on exact home
        }
        return current.startsWith(path);
    }
     
    const linkClasses = (path: string) =>
        `${
          isActive(path) ? 'text-[#ffba00]' : 'text-black'
        }`;

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <nav className={`fixed left-1/2 transform -translate-x-1/2 transition-all duration-300 z-50 w-full mt-0
        ${scrolled ? 'mt-0' : 'sm:mt-7 lg:w-[80%]'}
        bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)]`}>
            <div className={`flex justify-between items-center px-10 py-4 max-w-[1200px] mx-auto transition-all duration-300`}>
                <div>
                    <img src="/images/logo.png" alt="Logo" />
                </div>
                <ul className="hidden md:flex md:gap-4">
                    <li><Link href="/" className={`text-[12px] py-2 px-5 font-bold hover:text-[#ffba00] transition-all duration-300 ${linkClasses('/')}`}>HOME</Link></li>
                    <li><Link href="/shop" className={`text-[12px] py-2 px-5 font-bold hover:text-[#ffba00] transition-all duration-300 ${linkClasses('/shop')}`}>SHOP</Link></li>
                    <li><Link href="/contact" className={`text-[12px] py-2 px-5 font-bold hover:text-[#ffba00] transition-all duration-300 ${linkClasses('/contact')}`}>CONTACT</Link></li>
                    <li><Link href="/about" className={`text-[12px] py-2 px-5 font-bold hover:text-[#ffba00] transition-all duration-300 ${linkClasses('/about')}`}>ABOUT</Link></li>
                    <li className="px-5 pt-[5px]">
                        <Link href="/cart">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="black"
                            className="w-4 h-4">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 
                                1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 
                                1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 
                                1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 
                                10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 
                                0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                        </svg>
                        </Link>
                    </li>
                    <li className="pl-5 pt-[5px]">
                        <button className="cursor-pointer" onClick={() => setShowSearch(true)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="black"
                                className="w-4 h-4">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                            </svg>
                        </button>
                    </li>
                </ul>
                <button className="md:hidden cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="black"
                        className="w-6 h-6"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
            </div>
            <AnimatePresence>
            {showSearch && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto"}} exit={{ height: 0 }} transition={{ duration: 0.4, ease: "easeInOut"}} className={`fixed top-[82px] left-0 w-full z-40 bg-gradient-to-r from-[#ff6c00] to-[#ffba00] h-0 overflow-hidden`} id="searchBar">
                    <div className="max-w-[1200px] mx-auto px-10 py-3 flex justify-between items-center">
                        <input type="text" placeholder="Search Here" className="placeholder:text-white w-full outline-0 text-white"/>
                        <button className="ml-3 cursor-pointer" onClick={() => setShowSearch(false)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="white"
                            className="w-6 h-6"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                            </svg>
                        </button>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </nav>
    );
}