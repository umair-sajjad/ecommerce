import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="bg-[#222222] py-24 text-[#777777]">
            <div className="mx-auto flex w-[95%] max-w-6xl flex-wrap flex-col md:justify-start md:flex-row lg:justify-between">
                <div className=" px-2">
                    <h2 className="my-5 text-lg font-bold text-white">About</h2>
                    <p className="text-[14px] md:w-70 lg:w-50 xl:w-70">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
                    </p>
                </div>
                <div className=" px-2">
                    <h2 className="my-5 text-lg font-bold text-white">Newsletter</h2>
                    <p className="text-[14px]">Stay updated with our latest</p>
                    <form action="#" className="mt-4 flex w-full items-center">
                        <input type="email" placeholder="Enter Email" className="md:w-60 xl:w-75  border-none bg-amber-50 px-4 py-2 focus:outline-none " />
                        <button
                            type="submit"
                            className=" flex h-full items-center justify-center bg-linear-gradient-to-r bg-linear-90 from-[#ffba00] from-0% to-[#ff6c00] to-100% p-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className={'h-6 w-6'}>
                                <path
                                    fillRule="evenodd"
                                    d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
                <div className="px-2">
                    <h2 className="my-5 text-lg font-bold text-white">Instagram Feed</h2>
                    <div className="grid-row-2 grid grid-cols-4 gap-2">
                        <div className="">
                            <img src="/images/i1.jpg" alt="" />
                        </div>
                        <div className="">
                            <img src="/images/i2.jpg" alt="" />
                        </div>
                        <div className="">
                            <img src="/images/i3.jpg" alt="" />
                        </div>
                        <div className="">
                            <img src="/images/i4.jpg" alt="" />
                        </div>
                        <div className="">
                            <img src="/images/i5.jpg" alt="" />
                        </div>
                        <div className="">
                            <img src="/images/i6.jpg" alt="" />
                        </div>
                        <div className="">
                            <img src="/images/i7.jpg" alt="" />
                        </div>
                        <div className="">
                            <img src="/images/i8.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="px-2 md:ml-5 lg:ml-0">
                    <h2 className="my-5 text-lg font-bold text-white">Follow Us</h2>
                    <p className="text-[14px]">Let us be social</p>
                    <div className="mt-7 flex items-center text-white">
                        <Link href="#" className="opacity-70 transition-all duration-300 hover:text-[#ffba00] hover:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={`h-5 w-5`} fill="currentColor">
                                <g transform="scale(10.66667,10.66667)">
                                    <path d="M16.403,9h-2.403v-2c0,-1.032 0.084,-1.682 1.563,-1.682h0.868c0.552,0 1,-0.448 1,-1v-1.254c0,-0.523 -0.401,-0.97 -0.923,-1.005c-0.604,-0.041 -1.209,-0.06 -1.815,-0.059c-2.713,0 -4.693,1.657 -4.693,4.699v2.301h-2c-0.552,0 -1,0.448 -1,1v2c0,0.552 0.448,1 1,1l2,-0.001v8.001c0,0.552 0.448,1 1,1h2c0.552,0 1,-0.448 1,-1v-8.003l2.174,-0.001c0.508,0 0.935,-0.381 0.993,-0.886l0.229,-1.996c0.069,-0.593 -0.395,-1.114 -0.993,-1.114z" />
                                </g>
                            </svg>
                        </Link>
                        <Link href="#" className="ml-3 opacity-70 transition-all duration-300 hover:text-[#ffba00] hover:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={`h-5 w-5`} fill="currentColor">
                                <g transform="scale(10.66667,10.66667)">
                                    <path d="M21.634,4.031c-0.815,0.385 -2.202,1.107 -2.899,1.245c-0.027,0.007 -0.049,0.016 -0.075,0.023c-0.813,-0.802 -1.927,-1.299 -3.16,-1.299c-2.485,0 -4.5,2.015 -4.5,4.5c0,0.131 -0.011,0.372 0,0.5c-3.218,0 -5.568,-1.679 -7.327,-3.837c-0.235,-0.29 -0.485,-0.139 -0.537,0.067c-0.117,0.466 -0.157,1.245 -0.157,1.801c0,1.401 1.095,2.777 2.8,3.63c-0.314,0.081 -0.66,0.139 -1.02,0.139c-0.424,0 -0.912,-0.111 -1.339,-0.335c-0.158,-0.083 -0.499,-0.06 -0.398,0.344c0.405,1.619 2.253,2.756 3.904,3.087c-0.375,0.221 -1.175,0.176 -1.543,0.176c-0.136,0 -0.609,-0.032 -0.915,-0.07c-0.279,-0.034 -0.708,0.038 -0.349,0.582c0.771,1.167 2.515,1.9 4.016,1.928c-1.382,1.084 -3.642,1.48 -5.807,1.48c-0.438,-0.01 -0.416,0.489 -0.063,0.674c1.597,0.838 4.213,1.334 6.082,1.334c7.43,0 11.653,-5.663 11.653,-11.001c0,-0.086 -0.002,-0.266 -0.005,-0.447c0,-0.018 0.005,-0.035 0.005,-0.053c0,-0.027 -0.008,-0.053 -0.008,-0.08c-0.003,-0.136 -0.006,-0.263 -0.009,-0.329c0.589,-0.425 1.491,-1.163 1.947,-1.728c0.155,-0.192 0.03,-0.425 -0.181,-0.352c-0.543,0.189 -1.482,0.555 -2.07,0.625c1.177,-0.779 1.759,-1.457 2.259,-2.21c0.171,-0.257 -0.043,-0.518 -0.304,-0.394z" />
                                </g>
                            </svg>
                        </Link>
                        <Link href="#" className="ml-3 opacity-70 transition-all duration-300 hover:text-[#ffba00] hover:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={`h-5 w-5`} fill="currentColor">
                                <g transform="scale(5.33333,5.33333)">
                                    <path d="M24,4c-11.02793,0 -20,8.97207 -20,20c0,11.02793 8.97207,20 20,20c11.02793,0 20,-8.97207 20,-20c0,-11.02793 -8.97207,-20 -20,-20zM24,7c4.14231,0 7.92952,1.47634 10.875,3.92773c-2.75263,2.42336 -5.90023,4.39541 -9.29492,5.9082c-1.76855,-3.21635 -3.68842,-6.33517 -5.84375,-9.27734c1.36423,-0.3515 2.78785,-0.55859 4.26367,-0.55859zM16.78516,8.61719c2.21238,2.92554 4.16447,6.04707 5.96094,9.26953c-3.69563,1.28391 -7.60838,2.11328 -11.74609,2.11328c-1.16764,0 -2.31866,-0.07784 -3.46094,-0.18945c1.25785,-4.97528 4.69188,-9.05906 9.24609,-11.19336zM37.00195,13.04688c2.45922,2.91805 3.95155,6.67491 3.99023,10.79102c-2.15953,-0.5417 -4.41625,-0.83789 -6.74219,-0.83789c-1.8281,0 -3.59424,0.23597 -5.32422,0.57422c-0.60255,-1.39586 -1.2625,-2.75241 -1.94141,-4.10547c3.65931,-1.65484 7.05608,-3.79252 10.01758,-6.42187zM24.17773,20.57031c0.63352,1.25132 1.27238,2.49353 1.83789,3.7832c-6.0624,1.89613 -11.26637,5.74523 -14.75781,10.88477c-2.64245,-2.99509 -4.25781,-6.91896 -4.25781,-11.23828c0,-0.41439 0.03352,-0.81971 0.0625,-1.22656c1.29529,0.1328 2.60335,0.22656 3.9375,0.22656c4.64338,0 9.0451,-0.93675 13.17773,-2.42969zM34.25,26c2.24879,0 4.41834,0.31937 6.48828,0.88281c-0.78479,4.60653 -3.40219,8.57476 -7.09375,11.11914c-0.8892,-3.93705 -2.13392,-7.73284 -3.55859,-11.43945c1.37421,-0.23657 2.72109,-0.5625 4.16406,-0.5625zM27.0918,27.125c1.57089,4.00063 2.91442,8.11641 3.81445,12.40625c-2.1105,0.9373 -4.44343,1.46875 -6.90625,1.46875c-3.98932,0 -7.64289,-1.37739 -10.53906,-3.66797c3.14794,-4.85467 7.96982,-8.49089 13.63086,-10.20703z"></path>
                                </g>
                            </svg>
                        </Link>
                        <Link href="#" className="ml-3 opacity-70 transition-all duration-300 hover:text-[#ffba00] hover:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={`h-5 w-5`} fill="currentColor">
                                <g transform="scale(8,8)">
                                    <path d="M1,6.75v18.5h8.9375c0.82813,0 6.53125,-0.16797 6.53125,-5.375c0,-3.25391 -2.23828,-4.35937 -3.375,-4.6875c0.83594,-0.39453 2.5,-1.33203 2.5,-3.84375c0,-1.39844 -0.19922,-4.59375 -5.90625,-4.59375zM21.375,8.46875v1.6875h6.90625v-1.6875zM5.0625,9.90625h3.8125c0.35938,0 2.78125,-0.19141 2.78125,2.125c0,1.98047 -1.75,2.1875 -2.46875,2.1875h-4.125zM25,11.6875c-5.22266,0 -6.3125,4.53516 -6.3125,6.5c0,5.83203 4.78125,6.5 6.3125,6.5c4.12891,0 5.30078,-2.67187 5.78125,-4.15625h-3c-0.11719,0.38281 -0.99219,1.625 -2.65625,1.625c-2.78906,0 -3.03125,-2.17969 -3.03125,-3.15625h8.875c0.17969,-3.375 -1.29687,-7.3125 -5.96875,-7.3125zM24.90625,14.21875c0.83203,0 1.50391,0.24219 1.90625,0.6875c0.40234,0.44922 0.69922,1.10547 0.78125,1.96875h-5.5c0.01563,-0.23828 0.07031,-0.51172 0.15625,-0.8125c0.08594,-0.30859 0.21875,-0.60156 0.4375,-0.875c0.21875,-0.26953 0.52344,-0.50391 0.875,-0.6875c0.35938,-0.1875 0.80469,-0.28125 1.34375,-0.28125zM5.0625,17h4.40625c0.875,0 2.9375,0.13672 2.9375,2.65625c0,2.44141 -2.59766,2.4375 -3,2.4375h-4.34375z"></path>
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-15 text-center">
                <p>
                    Copyright ©2025 All rights reserved | This template is made with
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#ffba00"
                        className={'mx-1 inline-block h-5 w-5'}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5
                        -1.935 0-3.597 1.126-4.312 2.733
                        -.715-1.607-2.377-2.733-4.313-2.733
                        C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                    </svg>
                    by{' '}
                    <Link href="#" className="text-[#ffba00]">
                        Colorlib
                    </Link>
                </p>
            </div>
        </footer>
    );
}
