import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { Range } from 'react-range';
import { AnimatePresence, motion } from 'motion/react';

const MIN = 0;
const MAX = 10000;

export default function ShopSection() {
    const [showFilters, setShowFilters] = useState(false);
    const [values, setValues] = useState([1000, 8000]);
    const customStep = (val: number) => {
        return val < 1000 ? Math.round(val / 1) * 1 : Math.round(val / 500) * 500;
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setShowFilters(true); // force open on md+
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);  
    }, []);
    // const [filterData, setFilterData] = useState({
    //     priceRange: [1000, 7000],
    // });

    // const handlePriceChange = (values:  number[]) => {
    //     setFilterData(prev => {
    //         const updated =  { ...prev, price: values };
    //         handleFilter(updated);
    //         return updated;
    //     });
    // };
    // const handleFilter = (activeFilters: typeof filterData) => {
    //     console.log('Filter triggered: ', activeFilters);
    // }
    return (
        <>
            <div className="flex w-full items-center justify-end">
                <button className="cursor-pointer md:hidden" onClick={() => setShowFilters((prev) => !prev)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="h-6 w-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                        />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col md:flex-row">
                <AnimatePresence>
                {showFilters && (
                <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                className={`w-full md:w-[30%] xl:w-[23%] overflow-hidden ${showFilters ? 'block' : 'hidden'} md:block`}>
                    <div className="mt-5 w-full bg-white shadow-lg">
                        <h2 className="bg-[#828BB3] py-4 pl-8 text-lg text-white">Browse Categories</h2>
                        <div className="w-full px-4">
                            <button className="w-full cursor-pointer border-t-1 border-gray-200 px-4 py-4 text-left text-sm text-black transition-all duration-300 ease-in-out hover:text-[#FFBF00]">
                                Sports <span className="text-gray-400">(90)</span>
                            </button>
                            <button className="w-full cursor-pointer border-t-1 border-gray-200 px-4 py-4 text-left text-sm text-black transition-all duration-300 ease-in-out hover:text-[#FFBF00]">
                                Sports <span className="text-gray-400">(90)</span>
                            </button>
                            <button className="w-full cursor-pointer border-t-1 border-gray-200 px-4 py-4 text-left text-sm text-black transition-all duration-300 ease-in-out hover:text-[#FFBF00]">
                                Sports <span className="text-gray-400">(90)</span>
                            </button>
                            <button className="w-full cursor-pointer border-t-1 border-gray-200 px-4 py-4 text-left text-sm text-black transition-all duration-300 ease-in-out hover:text-[#FFBF00]">
                                Sports <span className="text-gray-400">(90)</span>
                            </button>
                            <button className="w-full cursor-pointer border-t-1 border-gray-200 px-4 py-4 text-left text-sm text-black transition-all duration-300 ease-in-out hover:text-[#FFBF00]">
                                Sports <span className="text-gray-400">(90)</span>
                            </button>
                        </div>
                    </div>
                    <div className="mt-10 w-full bg-white">
                        <h2 className="bg-[#828BB3] py-4 pl-8 text-lg text-white">Product Filter</h2>
                        <div className="w-full border-b-1 border-gray-200 px-4 py-3">
                            <h3 className="text-md w-full px-4 py-4 text-left font-bold text-black">BRANDS</h3>
                            <div className="my-3 flex items-center justify-start px-4 text-sm font-semibold">
                                <input
                                    type="radio"
                                    id="adidas"
                                    name="brand"
                                    value={'adidas'}
                                    className='radio-shockwave relative h-5 w-5 cursor-pointer appearance-none overflow-visible rounded-full border-1 border-gray-300 bg-white before:absolute before:top-1/2 before:left-1/2 before:h-2 before:w-2 before:rounded-full before:bg-white before:content-[""] checked:border-[#FFBA00] checked:bg-[#FFBA00] checked:after:relative checked:after:z-10 checked:after:block checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:bg-[#FFBA00] checked:after:opacity-0 checked:after:content-[""]'
                                />
                                <label htmlFor="adidas" className="text-md ml-3 cursor-pointer text-gray-400">
                                    Adidas <span>(29)</span>
                                </label>
                            </div>
                            <div className="my-3 flex items-center justify-start px-4 text-sm font-semibold">
                                <input
                                    type="radio"
                                    id="nike"
                                    name="brand"
                                    value={'nike'}
                                    className='radio-shockwave relative h-5 w-5 cursor-pointer appearance-none overflow-visible rounded-full border-1 border-gray-300 bg-white before:absolute before:top-1/2 before:left-1/2 before:h-2 before:w-2 before:rounded-full before:bg-white before:content-[""] checked:border-[#FFBA00] checked:bg-[#FFBA00] checked:after:relative checked:after:z-10 checked:after:block checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:bg-[#FFBA00] checked:after:opacity-0 checked:after:content-[""]'
                                />
                                <label htmlFor="nike" className="text-md ml-3 cursor-pointer text-gray-400">
                                    nike <span>(29)</span>
                                </label>
                            </div>
                            <div className="my-3 flex items-center justify-start px-4 text-sm font-semibold">
                                <input
                                    type="radio"
                                    id="polo"
                                    name="brand"
                                    value={'polo'}
                                    className='radio-shockwave relative h-5 w-5 cursor-pointer appearance-none overflow-visible rounded-full border-1 border-gray-300 bg-white before:absolute before:top-1/2 before:left-1/2 before:h-2 before:w-2 before:rounded-full before:bg-white before:content-[""] checked:border-[#FFBA00] checked:bg-[#FFBA00] checked:after:relative checked:after:z-10 checked:after:block checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:bg-[#FFBA00] checked:after:opacity-0 checked:after:content-[""]'
                                />
                                <label htmlFor="polo" className="text-md ml-3 cursor-pointer text-gray-400">
                                    polo <span>(29)</span>
                                </label>
                            </div>
                            <div className="my-3 flex items-center justify-start px-4 text-sm font-semibold">
                                <input
                                    type="radio"
                                    id="sketchrs"
                                    name="brand"
                                    value={'sketchrs'}
                                    className='radio-shockwave relative h-5 w-5 cursor-pointer appearance-none overflow-visible rounded-full border-1 border-gray-300 bg-white before:absolute before:top-1/2 before:left-1/2 before:h-2 before:w-2 before:rounded-full before:bg-white before:content-[""] checked:border-[#FFBA00] checked:bg-[#FFBA00] checked:after:relative checked:after:z-10 checked:after:block checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:bg-[#FFBA00] checked:after:opacity-0 checked:after:content-[""]'
                                />
                                <label htmlFor="sketchrs" className="text-md ml-3 cursor-pointer text-gray-400">
                                    sketchrs <span>(29)</span>
                                </label>
                            </div>
                        </div>
                        <div className="w-full border-b-1 border-gray-200 px-4 py-3">
                            <h3 className="text-md w-full px-4 py-4 text-left font-bold text-black">COLOR</h3>
                            <div className="my-3 flex items-center justify-start px-4 text-sm font-semibold">
                                <input
                                    type="radio"
                                    id="black"
                                    name="color"
                                    value={'black'}
                                    className='radio-shockwave relative h-5 w-5 cursor-pointer appearance-none overflow-visible rounded-full border-1 border-gray-300 bg-white before:absolute before:top-1/2 before:left-1/2 before:h-2 before:w-2 before:rounded-full before:bg-white before:content-[""] checked:border-[#FFBA00] checked:bg-[#FFBA00] checked:after:relative checked:after:z-10 checked:after:block checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:bg-[#FFBA00] checked:after:opacity-0 checked:after:content-[""]'
                                />
                                <label htmlFor="black" className="text-md ml-3 cursor-pointer text-gray-400">
                                    black <span>(29)</span>
                                </label>
                            </div>
                            <div className="my-3 flex items-center justify-start px-4 text-sm font-semibold">
                                <input
                                    type="radio"
                                    id="red"
                                    name="color"
                                    value={'red'}
                                    className='radio-shockwave relative h-5 w-5 cursor-pointer appearance-none overflow-visible rounded-full border-1 border-gray-300 bg-white before:absolute before:top-1/2 before:left-1/2 before:h-2 before:w-2 before:rounded-full before:bg-white before:content-[""] checked:border-[#FFBA00] checked:bg-[#FFBA00] checked:after:relative checked:after:z-10 checked:after:block checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:bg-[#FFBA00] checked:after:opacity-0 checked:after:content-[""]'
                                />
                                <label htmlFor="red" className="text-md ml-3 cursor-pointer text-gray-400">
                                    red <span>(29)</span>
                                </label>
                            </div>
                            <div className="my-3 flex items-center justify-start px-4 text-sm font-semibold">
                                <input
                                    type="radio"
                                    id="white"
                                    name="color"
                                    value={'white'}
                                    className='radio-shockwave relative h-5 w-5 cursor-pointer appearance-none overflow-visible rounded-full border-1 border-gray-300 bg-white before:absolute before:top-1/2 before:left-1/2 before:h-2 before:w-2 before:rounded-full before:bg-white before:content-[""] checked:border-[#FFBA00] checked:bg-[#FFBA00] checked:after:relative checked:after:z-10 checked:after:block checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:bg-[#FFBA00] checked:after:opacity-0 checked:after:content-[""]'
                                />
                                <label htmlFor="white" className="text-md ml-3 cursor-pointer text-gray-400">
                                    white <span>(29)</span>
                                </label>
                            </div>
                            <div className="my-3 flex items-center justify-start px-4 text-sm font-semibold">
                                <input
                                    type="radio"
                                    id="blue"
                                    name="color"
                                    value={'blue'}
                                    className='radio-shockwave relative h-5 w-5 cursor-pointer appearance-none overflow-visible rounded-full border-1 border-gray-300 bg-white before:absolute before:top-1/2 before:left-1/2 before:h-2 before:w-2 before:rounded-full before:bg-white before:content-[""] checked:border-[#FFBA00] checked:bg-[#FFBA00] checked:after:relative checked:after:z-10 checked:after:block checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:bg-[#FFBA00] checked:after:opacity-0 checked:after:content-[""]'
                                />
                                <label htmlFor="blue" className="text-md ml-3 cursor-pointer text-gray-400">
                                    blue <span>(29)</span>
                                </label>
                            </div>
                        </div>
                        <div className="w-full border-b-1 border-gray-200 px-4 py-3">
                            <h3 className="text-md w-full px-4 py-4 text-left font-bold text-black">PRICE</h3>
                            <div className="mt-6 mb-3 flex items-center justify-start px-4 text-sm font-semibold">
                                <div className="w-full">
                                    <Range
                                        step={1}
                                        min={MIN}
                                        max={MAX}
                                        values={values}
                                        onChange={(vals) => setValues(vals.map(customStep))}
                                        renderTrack={({ props, children }) => (
                                            <div {...props} className="relative h-[6px] w-full rounded bg-[#EEEEEE]" style={{ ...props.style }}>
                                                <div
                                                    className="absolute h-2 rounded"
                                                    style={{
                                                        left: `${((values[0] - MIN) / (MAX - MIN)) * 100}%`,
                                                        width: `${((values[1] - values[0]) / (MAX - MIN)) * 100}%`,
                                                    }}
                                                />
                                                {children}
                                            </div>
                                        )}
                                        renderThumb={({ props }) => (
                                            <div
                                                {...props}
                                                className="priceRange relative h-4 w-4 cursor-pointer rounded-full bg-[#FFBA00] shadow outline-0 duration-300 ease-in-out before:scale-[2] hover:before:absolute hover:before:top-1/2 hover:before:left-1/2 hover:before:h-2 hover:before:w-2 hover:before:scale-[1] hover:before:rounded-full hover:before:bg-white hover:before:transition-all hover:before:content-['']"
                                                style={{ ...props.style, cursor: 'pointer' }}
                                            />
                                        )}
                                    />
                                    <div className="mt-4 text-sm text-gray-400">
                                        Price:{' '}
                                        <span className="text-gray-300">
                                            ${values[0].toFixed(2)} to ${values[1].toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                )}
                </AnimatePresence>
                <div className="w-full md:w-[70%] xl:w-[77%]">
                    <div className="mb-10 flex w-full max-w-6xl flex-wrap items-center justify-start px-4">
                        <div className="my-5 w-full px-4 md:w-1/2 lg:w-1/3">
                            <div>
                                <img src="/images/p1.jpg" className="w-full" alt="" />
                            </div>
                            <div className="mt-5">
                                <h2 className="text-lg font-semibold uppercase lg:text-[16px] xl:text-lg">
                                    adidas new summer hummer sole for men sports
                                </h2>
                                <p className="my-2 text-[14px] font-bold text-gray-700 lg:text-[12px]">
                                    $150.00
                                    <span className="ml-8 text-stone-400">
                                        <s>$210.00</s>
                                    </span>
                                </p>
                                <div className="mt-5 flex items-center">
                                    <button className="group flex cursor-pointer items-center">
                                        <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-6 lg:w-6 xl:h-8 xl:w-8">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="white"
                                                className="size-4 xl:size-5"
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
                                        <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-6 lg:w-6 xl:h-8 xl:w-8">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="white"
                                                className="size-4 xl:size-5"
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
                                        <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-6 lg:w-6 xl:h-8 xl:w-8">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="white"
                                                className="size-4 xl:size-5"
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
                                        <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-6 lg:w-6 xl:h-8 xl:w-8">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="white"
                                                className="size-4 xl:size-5"
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
                        <div className="my-5 w-full px-4 md:w-1/2 lg:w-1/3">
                            <div>
                                <img src="/images/p1.jpg" className="w-full" alt="" />
                            </div>
                            <div className="mt-5">
                                <h2 className="text-lg font-semibold uppercase lg:text-[16px] xl:text-lg">
                                    adidas new summer hummer sole for men sports
                                </h2>
                                <p className="my-2 text-[14px] font-bold text-gray-700 lg:text-[12px]">
                                    $150.00
                                    <span className="ml-8 text-stone-400">
                                        <s>$210.00</s>
                                    </span>
                                </p>
                                <div className="mt-5 flex items-center">
                                    <button className="group flex cursor-pointer items-center">
                                        <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-6 lg:w-6 xl:h-8 xl:w-8">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="white"
                                                className="size-4 xl:size-5"
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
                                        <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-6 lg:w-6 xl:h-8 xl:w-8">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="white"
                                                className="size-4 xl:size-5"
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
                                        <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-6 lg:w-6 xl:h-8 xl:w-8">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="white"
                                                className="size-4 xl:size-5"
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
                                        <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-6 lg:w-6 xl:h-8 xl:w-8">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="white"
                                                className="size-4 xl:size-5"
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
                        <div className="my-5 w-full px-4 md:w-1/2 lg:w-1/3">
                            <div>
                                <img src="/images/p1.jpg" className="w-full" alt="" />
                            </div>
                            <div className="mt-5">
                                <h2 className="text-lg font-semibold uppercase lg:text-[16px] xl:text-lg">
                                    adidas new summer hummer sole for men sports
                                </h2>
                                <p className="my-2 text-[14px] font-bold text-gray-700 lg:text-[12px]">
                                    $150.00
                                    <span className="ml-8 text-stone-400">
                                        <s>$210.00</s>
                                    </span>
                                </p>
                                <div className="mt-5 flex items-center">
                                    <button className="group flex cursor-pointer items-center">
                                        <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-6 lg:w-6 xl:h-8 xl:w-8">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="white"
                                                className="size-4 xl:size-5"
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
                                        <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-6 lg:w-6 xl:h-8 xl:w-8">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="white"
                                                className="size-4 xl:size-5"
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
                                        <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-6 lg:w-6 xl:h-8 xl:w-8">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="white"
                                                className="size-4 xl:size-5"
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
                                        <div className="hover:bg-linear-gradient-to-r flex h-8 w-8 items-center justify-center rounded-full bg-[#828bb2] from-[#ffba00] from-0% to-[#ff6c00] hover:bg-linear-90 hover:to-100% lg:h-6 lg:w-6 xl:h-8 xl:w-8">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="white"
                                                className="size-4 xl:size-5"
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
                        <div className="mt-5 flex w-full items-center justify-end bg-[#828BB3] p-2">
                            <div className="flex items-center justify-between">
                                <button className="hover:bg-linear-gradient-to-r flex h-10 w-10 cursor-pointer items-center justify-center bg-white transition-all duration-300 ease-in-out hover:bg-linear-90 hover:from-[#ffba00] hover:from-0% hover:to-[#ff6c00] hover:to-100% hover:text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2.5}
                                        stroke="black"
                                        className="size-4 xl:size-5"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                                    </svg>
                                </button>
                                <button className="bg-linear-gradient-to-r hover:bg-linear-gradient-to-r flex h-10 w-10 cursor-pointer items-center justify-center bg-linear-90 from-[#ffba00] from-0% to-[#ff6c00] to-100% text-white transition-all duration-300 ease-in-out hover:bg-linear-90 hover:from-[#ffba00] hover:from-0% hover:to-[#ff6c00] hover:to-100% hover:text-white">
                                    1
                                </button>
                                <button className="hover:bg-linear-gradient-to-r flex h-10 w-10 cursor-pointer items-center justify-center bg-white transition-all duration-300 ease-in-out hover:bg-linear-90 hover:from-[#ffba00] hover:from-0% hover:to-[#ff6c00] hover:to-100% hover:text-white">
                                    2
                                </button>
                                <button className="hover:bg-linear-gradient-to-r flex h-10 w-10 cursor-pointer items-center justify-center bg-white transition-all duration-300 ease-in-out hover:bg-linear-90 hover:from-[#ffba00] hover:from-0% hover:to-[#ff6c00] hover:to-100% hover:text-white">
                                    3
                                </button>
                                <div className="flex h-10 w-5 items-center justify-center">...</div>
                                <button className="hover:bg-linear-gradient-to-r flex h-10 w-10 cursor-pointer items-center justify-center bg-white transition-all duration-300 ease-in-out hover:bg-linear-90 hover:from-[#ffba00] hover:from-0% hover:to-[#ff6c00] hover:to-100% hover:text-white">
                                    6
                                </button>
                                <button className="hover:bg-linear-gradient-to-r flex h-10 w-10 cursor-pointer items-center justify-center bg-white transition-all duration-300 ease-in-out hover:bg-linear-90 hover:from-[#ffba00] hover:from-0% hover:to-[#ff6c00] hover:to-100% hover:text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2.5}
                                        stroke="black"
                                        className="size-4"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
