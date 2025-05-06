import { Link } from '@inertiajs/react';

export default function ContactSection() {
    return (
        <>
            <div className="w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d108865.93813884133!2d74.3157459939453!3d31.495018987845725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1746120347942!5m2!1sen!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="mt-10 w-full">
                <form action="">
                    <div className="flex justify-between flex-col lg:flex-row ">
                        <div>
                            <div className="mt-4 flex">
                                <div className="px-5 pt-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="#FFBA00"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 
       .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 
       1.125-1.125h2.25c.621 0 1.125.504 1.125 
       1.125V21h4.125c.621 0 1.125-.504 
       1.125-1.125V9.75M8.25 21h8.25"
                                        />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-lg font-bold">California, United States</h2>
                                    <p className="my-1 text-[14px] text-gray-500">Santa monica bullevard</p>
                                </div>
                            </div>
                            <div className="mt-4 flex">
                                <div className="px-5 pt-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="#FFBA00"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                        />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <Link href="#" className="text-lg font-bold">
                                        00 (440) 9865 562
                                    </Link>
                                    <p className="my-1 text-[14px] text-gray-500">Mon to Fri 9am to 6 pm</p>
                                </div>
                            </div>
                            <div className="mt-4 flex">
                                <div className="px-5 pt-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="#FFBA00"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                        />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <Link href="#" className="text-lg font-bold">
                                        support@colorlib.com
                                    </Link>
                                    <p className="my-1 text-[14px] text-gray-500">Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between flex-col md:flex-row px-5 lg:px-0 lg:w-[70%]'>
                            <div className="mt-4 flex w-full md:w-[47%] flex-col">
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="mt-2 w-full border-1 border-gray-200 px-6 py-1 outline-none placeholder:text-sm"
                                    name="name"
                                />
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="mt-2 w-full border-1 border-gray-200 px-6 py-1 outline-none placeholder:text-sm"
                                    name="email"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="mt-2 w-full border-1 border-gray-200 px-6 py-1 outline-none placeholder:text-sm"
                                    name="subject"
                                />
                            </div>
                            <div className="mt-5 flex w-full md:w-[47%] flex-col">
                                <textarea
                                    name="message"
                                    id=""
                                    rows={4}
                                    className="border-1 border-gray-200 px-4 py-3 outline-none placeholder:text-sm"
                                    placeholder="Enter message"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-[#FFBA00] px-6 py-4 text-sm font-semibold text-white mt-5 mr-5">SEND MESSAGE</button>
                    </div>
                </form>
            </div>
        </>
    );
}
