import { Link, usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showMobile, setShowMobile] = useState(false);
    const [showMobileLog, setShowMobileLog] = useState(false);

    const page = usePage();
    const current = page.url;

    const isActive = (path: string) => {
        if (path === '/') {
            return current === '/'; // only active on exact home
        }
        return current.startsWith(path);
    };

    const linkClasses = (path: string) => `${isActive(path) ? 'text-[#ffba00]' : 'text-black'}`;

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    useEffect(() => {
        const root = document.getElementById("mobileBar");
        if (!root) return;
    
        let timeout: ReturnType<typeof setTimeout>;
    
        if (showMobile) {
            // Opening: Hide overflow
            root.classList.add("overflow-hidden");
        } else {
            // Closing: Hide overflow again for closing animation
            root.classList.add("overflow-hidden");
    
            // Also close the log menu when mobile bar is closing
            if (showMobileLog) {
                setShowMobileLog(false);
            }
        }
    
        timeout = setTimeout(() => {
            // Allow overflow if log menu is open
            if (!showMobileLog) {
                root.classList.remove("overflow-hidden");
            }
        }, 500); // Match with your CSS animation duration
    
        return () => clearTimeout(timeout);
    }, [showMobile]);
    
    

    return (
        <nav
            className={`fixed left-1/2 z-50 mt-0 w-full -translate-x-1/2 transform transition-all duration-300 ${scrolled ? 'mt-0' : 'sm:mt-7 lg:w-[80%]'} bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)]`}
        >
            <div className={`mx-auto flex max-w-[1200px] items-center justify-between px-10 py-2 transition-all duration-300 md:py-4`}>
                <div>
                    <img src="/images/logo.png" alt="Logo" />
                </div>
                <ul className="hidden md:flex md:gap-4">
                    <li>
                        <Link
                            href="/"
                            className={`px-5 py-2 text-[12px] font-bold transition-all duration-300 hover:text-[#ffba00] ${linkClasses('/')}`}
                        >
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/shop"
                            className={`px-5 py-2 text-[12px] font-bold transition-all duration-300 hover:text-[#ffba00] ${linkClasses('/shop')}`}
                        >
                            SHOP
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className={`px-5 py-2 text-[12px] font-bold transition-all duration-300 hover:text-[#ffba00] ${linkClasses('/contact')}`}
                        >
                            CONTACT
                        </Link>
                    </li>
                    <li className="relative pt-[5px] pl-5">
                        <Link href="/cart" className="relative inline-block">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="black"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 
                    1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 
                    1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 
                    1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 
                    10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 
                    0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                />
                            </svg>

                            {/* Badge */}
                            <span className="absolute -top-2 -right-2 rounded-full bg-[#ff6c00] px-1 text-[10px] font-bold text-white">3</span>
                        </Link>
                    </li>

                    <li className="pt-[5px] pl-5">
                        <button className="cursor-pointer" onClick={() => setShowSearch(true)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="black"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </button>
                    </li>
                    <li className="relative mx-5 mt-[5px] group">
                        <Link href="/login" className="cursor-pointer" title="Login">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="black"
                                className="h-4 w-4"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                        <ul className='absolute hidden group-hover:block shadow-2xl bg-white w-50'>
                            <li className='p-4 text-sm text-[#ffba00] hover:text-white bg-white hover:bg-[#ffba00] transition-all ease-in-out duration-300 font-semibold border-b-1 border-gray-200'><Link href='/profile'>Update Profile</Link></li>
                            <li className='p-4 text-sm text-[#ffba00] hover:text-white bg-white hover:bg-[#ffba00] transition-all ease-in-out duration-300 font-semibold border-b-1 border-gray-200'><Link href='/track'>Track Orders</Link></li>
                            <li className='p-4 text-sm text-[#ffba00] hover:text-white bg-white hover:bg-[#ffba00] transition-all ease-in-out duration-300 font-semibold border-b-1 border-gray-200'><Link href='/history'>Orders History</Link></li>
                            <li className='p-4 text-sm text-[#ffba00] hover:text-white bg-white hover:bg-[#ffba00] transition-all ease-in-out duration-300 font-semibold'><button>Sign Out</button></li>
                        </ul>
                    </li>
                </ul>
                <button className="cursor-pointer md:hidden" onClick={() => setShowMobile(!showMobile)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <AnimatePresence>
                {showMobile && (
                    <motion.div
                        className="md:hidden"
                        id='mobileBar'
                        key={'mobilebar'}
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                        <ul className="px-10">
                            <li>
                                <Link
                                    href="/"
                                    className={`mt-2 block px-5 py-2 text-[12px] font-bold transition-all duration-300 hover:text-[#ffba00] ${linkClasses('/')}`}
                                >
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/shop"
                                    className={`block px-5 py-2 text-[12px] font-bold transition-all duration-300 hover:text-[#ffba00] ${linkClasses('/shop')}`}
                                >
                                    SHOP
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className={`block px-5 py-2 text-[12px] font-bold transition-all duration-300 hover:text-[#ffba00] ${linkClasses('/contact')}`}
                                >
                                    CONTACT
                                </Link>
                            </li>
                            <div className="flex items-center justify-end">
                                <li className="my-3 py-2">
                                <Link href="/cart" className="relative inline-block">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="black"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 
                    1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 
                    1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 
                    1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 
                    10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 
                    0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                />
                            </svg>

                            {/* Badge */}
                            <span className="absolute -top-2 -right-2 rounded-full bg-[#ff6c00] px-1 text-[10px] font-bold text-white">3</span>
                        </Link>
                                </li>
                                <li className="my-3 ml-5 pt-4 pb-3">
                                    <button className="cursor-pointer" onClick={() => setShowSearch(true)}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="black"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                            />
                                        </svg>
                                    </button>
                                </li>
                                <li className="my-2 ml-5 py-4 relative">
                                <button className="cursor-pointer" title="Login" onClick={() => setShowMobileLog(!showMobileLog)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="black"
                                className="h-4 w-4"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        { showMobileLog && (
                            <ul className='absolute shadow-2xl bg-white w-50 z-50 right-0'>
                                        <li className='p-4 text-sm text-[#ffba00] hover:text-white bg-white hover:bg-[#ffba00] transition-all ease-in-out duration-300 font-semibold border-b-1 border-gray-200'><Link href='/profile'>Update Profile</Link></li>
                                        <li className='p-4 text-sm text-[#ffba00] hover:text-white bg-white hover:bg-[#ffba00] transition-all ease-in-out duration-300 font-semibold border-b-1 border-gray-200'><Link href='/track'>Track Orders</Link></li>
                                        <li className='p-4 text-sm text-[#ffba00] hover:text-white bg-white hover:bg-[#ffba00] transition-all ease-in-out duration-300 font-semibold border-b-1 border-gray-200'><Link href='/history'>Orders History</Link></li>
                                        <li className='p-4 text-sm text-[#ffba00] hover:text-white bg-white hover:bg-[#ffba00] transition-all ease-in-out duration-300 font-semibold'><button>Sign Out</button></li>
                                    </ul>
                                    )}
                                </li>
                            </div>
                        </ul>
                    </motion.div>
                )}
                {showSearch && (
                    <motion.div
                        key={'searchbar'}
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className={`w-full overflow-hidden bg-gradient-to-r from-[#ff6c00] to-[#ffba00]`}
                    >
                        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-10 py-3">
                            <input type="text" placeholder="Search Here" className="w-full text-white outline-0 placeholder:text-white" />
                            <button className="ml-3 cursor-pointer" onClick={() => setShowSearch(false)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="white"
                                    className="h-6 w-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
