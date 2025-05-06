import ConfirmationSection from '@/components/confirmationSection';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Link } from '@inertiajs/react';

export default function LoginCustomer() {
    return (
        <>
            <Navbar />
            <section className="relative flex h-[50vh] sm:bg-[url('/images/common-banner.jpg')] sm:bg-cover sm:bg-center sm:bg-no-repeat bg-linear-90 bg-linear-gradient-to-r from-[#ffba00] from-0% to-[#ff6c00] to-100%">
                <div className="container mx-auto flex h-full items-center justify-start sm:justify-end  px-2 sm:px-25">
                    <div className='mt-15'>
                        <h2 className='text-white text-3xl sm:text-4xl font-bold'>Confirm Order</h2>
                        <span className='text-sm text-white mt-2 block'>
                            <Link href='/'>Home</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-5 inline-block mx-2">
                                <path
                                    fillRule="evenodd"
                                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Confirm Order
                        </span>
                    </div>
                </div>
            </section>
            <main className='md:w-[75%] w-[90%] mx-auto py-20 max-w-6xl '>
                <ConfirmationSection/>
            </main>
            <Footer />
        </>
    );
}
