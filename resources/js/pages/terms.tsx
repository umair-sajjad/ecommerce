import Footer from '@/components/footer';
import LoginSection from '@/components/LoginSection';
import Navbar from '@/components/navbar';
import { Link } from '@inertiajs/react';

export default function LoginCustomer() {
    return (
        <>
            <Navbar />
            <section className="relative flex h-[50vh] sm:bg-[url('/images/common-banner.jpg')] sm:bg-cover sm:bg-center sm:bg-no-repeat bg-linear-90 bg-linear-gradient-to-r from-[#ffba00] from-0% to-[#ff6c00] to-100%">
                <div className="container mx-auto flex h-full items-center justify-start sm:justify-end  px-2 sm:px-25">
                    <div className='mt-15'>
                        <h2 className='text-white text-3xl sm:text-4xl font-bold'>Terms & Conditions</h2>
                        <span className='text-sm text-white mt-2 block'>
                            <Link href='/'>Home</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-5 inline-block mx-2">
                                <path
                                    fillRule="evenodd"
                                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Terms & Conditions
                        </span>
                    </div>
                </div>
            </section>
            <main className='md:w-[75%] w-[90%] mx-auto py-20 max-w-6xl '>
                <h1 className='text-3xl font-semibold border-b-1 border-gray-400'>Terms & Conditions</h1>
                <p className='mt-3'>Welcome to [Your Store Name]! These Terms and Conditions outline the rules and regulations for the use of our website and services.</p>
                <h2 className='text-2xl font-semibold my-3'>1. Acceptance of Terms</h2>
                <p>By accessing this website and/or placing an order, you agree to be bound by these terms and conditions. If you disagree with any part of the terms, you may not access the service.</p>
                <h2 className='text-2xl font-semibold my-3'>2. Orders and Payments</h2>
                <ul>
                    <li className='list-disc'>All orders are subject to availability and confirmation.</li>
                    <li className='list-disc'>We reserve the right to cancel any order at our discretion.</li>
                    <li className='list-disc'>Prices are listed in [currency] and are subject to change without notice.</li>
                    <li className='list-disc'>Payments must be made in full before the order is processed.</li>
                </ul>
                <h2 className='text-2xl font-semibold my-3'>3. Shipping and Delivery</h2>
                <ul>
                    <li className='list-disc'>Estimated delivery times are provided at checkout.</li>
                    <li className='list-disc'>We are not responsible for delays due to courier services or unforeseen circumstances.</li>
                    <li className='list-disc'>Customers are responsible for providing accurate delivery information.</li>
                </ul>
                <h2 className='text-2xl font-semibold my-3'>4. Returns and Refunds</h2>
                <ul>
                    <li className='list-disc'>Returns must be requested within [e.g. 7 days] of delivery.</li>
                    <li className='list-disc'>Products must be unused and in original packaging.</li>
                    <li className='list-disc'>Refunds will be issued to the original payment method once the item is received and inspected.</li>
                </ul>
                <h2 className='text-2xl font-semibold my-3'>5. User Accounts</h2>
                <ul>
                    <li className='list-disc'>You are responsible for maintaining the confidentiality of your account credentials.</li>
                    <li className='list-disc'>We reserve the right to suspend or terminate accounts for fraudulent or abusive behavior.</li>
                </ul>
                <h2 className='text-2xl font-semibold my-3'>6. Intellectual Property</h2>
                <p>All content on this website (logos, text, images, etc.) is owned or licensed by [Your Store Name] and is protected by copyright laws. Unauthorized use is prohibited.</p>
                <h2 className='text-2xl font-semibold my-3'>7. Limitation of Liability</h2>
                <p>We are not liable for any direct, indirect, or incidental damages resulting from the use of our website or products.</p>
                <h2 className='text-2xl font-semibold my-3'>8. Governing Law</h2>
                <p>These terms are governed by and construed in accordance with the laws of [Your Country/State].</p>
                <h2 className='text-2xl font-semibold my-3'>9. Changes to Terms</h2>
                <p>
                We reserve the right to update these Terms and Conditions at any time. Continued use of the website implies acceptance of the revised terms.
                </p>
            </main>
            <Footer />
        </>
    );
}
