import { Link } from '@inertiajs/react';
import { Country, State } from 'country-state-city';
import { useEffect, useState } from 'react';

export default function CheckoutSection() {
    const [loginForm, setLoginForm] = useState({
        userkey: '',
        password: '',
    });
    const [billingForm, setBillingForm] = useState({
        fname: '',
        lname: '',
        phone: '',
        email: '',
        address: '',
        town: ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBillingForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const [countries, setCountries] = useState<{ name: string }[]>([]);
    const [districts, setDistricts] = useState<{ name: string }[]>([]);
    const [formData, setFormData] = useState({
        country: '',
        district: '',
    });

    // Load countries on mount
    useEffect(() => {
        const allCountries = Country.getAllCountries().map((c) => ({ name: c.name }));
        setCountries(allCountries);
    }, []);

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCountryName = e.target.value;
        const country = Country.getAllCountries().find((c) => c.name === selectedCountryName);

        if (country) {
            const states = State.getStatesOfCountry(country.isoCode).map((s) => ({ name: s.name }));
            setDistricts(states);
        } else {
            setDistricts([]);
        }

        setFormData({
            ...formData,
            country: selectedCountryName,
            district: '', // Reset district on country change
        });
    };
    const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({
            ...formData,
            district: e.target.value,
        });
    };
    return (
        <>
            <div className="w-full">
                <p className="bg-[#E8F0F2] px-10 py-3 text-sm">
                    Returning Customer?
                    <Link href="/login" className="text-red-700 underline">
                        Click here to login
                    </Link>
                </p>
                <div className="mt-3 px-10">
                    <p className="text-sm text-gray-500">
                        If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to
                        the Billing & Shipping section.
                    </p>
                    <form action="" className="">
                        <div className="flex flex-col lg:flex-row">
                            <div className="relative mt-5 w-full lg:w-80">
                                <input
                                    type="text"
                                    name="userkey"
                                    value={loginForm.userkey}
                                    onChange={handleChange}
                                    placeholder=" "
                                    className="peer w-full rounded-md border border-gray-200 px-6 py-3 text-sm placeholder-transparent outline-none"
                                />
                                <label
                                    htmlFor="userkey"
                                    className={`absolute left-6 text-sm transition-all ${loginForm.userkey ? 'hidden' : 'top-3 text-gray-400'}`}
                                >
                                    Username or Email <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="relative mt-5 w-full lg:ml-5 lg:w-80">
                                <input
                                    type="password"
                                    name="password"
                                    value={loginForm.password}
                                    onChange={handleChange}
                                    placeholder=" "
                                    className="peer w-full rounded-md border border-gray-200 px-6 py-3 text-sm placeholder-transparent outline-none"
                                />
                                <label
                                    htmlFor="password"
                                    className={`absolute left-6 text-sm transition-all ${loginForm.password ? 'hidden' : 'top-3 text-gray-400'}`}
                                >
                                    Password<span className="text-red-500">*</span>
                                </label>
                            </div>
                        </div>
                        <button className='relative mt-10 overflow-hidden bg-[#FFBA00] px-10 py-2 text-sm font-semibold text-white uppercase transition-all duration-300 ease-in-out before:absolute before:top-0 before:left-[-150%] before:h-full before:w-full before:skew-x-[40deg] before:bg-black before:opacity-0 before:transition-all before:duration-300 before:ease-in-out before:content-[""] hover:before:left-[150%] hover:before:opacity-30'>
                            Login
                        </button>
                    </form>
                    <Link href="/forgot-password" className="my-5 block text-sm text-gray-500">
                        forgot password?
                    </Link>
                </div>
            </div>
            <div className="w-full">
                <p className="bg-[#E8F0F2] px-10 py-3 text-sm">Have you a coupon?</p>
                <div className="w-full px-10 md:w-[75%]">
                    <form action="" className="mt-5">
                        <input
                            type="text"
                            className="w-full rounded-md border border-gray-200 px-6 py-3 text-sm outline-none"
                            name="coupon"
                            placeholder="Enter Coupon Code"
                        />
                        <button className="mt-5 border-1 border-gray-300 px-10 py-2 text-sm font-semibold uppercase transition-all duration-300 ease-in-out hover:border-[#FFBA00] hover:bg-[#FFBA00] hover:text-white">
                            apply coupon
                        </button>
                    </form>
                </div>
            </div>
            <form action="">
                <div className="flex w-full flex-col lg:flex-row">
                    <div className="mt-10 w-full lg:w-[65%]">
                        <h1 className="mb-6 border-b-1 border-gray-300 py-2 text-xl font-semibold">Billing Details</h1>
                        <div className="flex flex-col items-center justify-between md:flex-row">
                            <div className="relative my-2 w-full md:w-[48%]">
                                <input
                                    type="text"
                                    name="fname"
                                    value={billingForm.fname}
                                    onChange={handleBillingChange}
                                    placeholder=" "
                                    className="peer w-full rounded-md border border-gray-200 px-6 py-2 text-sm placeholder-transparent outline-none"
                                />
                                <label
                                    htmlFor="fname"
                                    className={`absolute left-6 text-sm transition-all ${billingForm.fname ? 'hidden' : 'top-2 text-gray-400'}`}
                                >
                                    First Name <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="relative my-2 w-full md:w-[48%]">
                                <input
                                    type="text"
                                    name="lname"
                                    value={billingForm.lname}
                                    onChange={handleBillingChange}
                                    placeholder=" "
                                    className="peer w-full rounded-md border border-gray-200 px-6 py-2 text-sm placeholder-transparent outline-none"
                                />
                                <label
                                    htmlFor="lname"
                                    className={`absolute left-6 text-sm transition-all ${billingForm.lname ? 'hidden' : 'top-2 text-gray-400'}`}
                                >
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-between md:flex-row">
                            <div className="relative my-2 w-full md:w-[48%]">
                                <input
                                    type="text"
                                    name="phone"
                                    value={billingForm.phone}
                                    onChange={handleBillingChange}
                                    placeholder=" "
                                    className="peer w-full rounded-md border border-gray-200 px-6 py-2 text-sm placeholder-transparent outline-none"
                                />
                                <label
                                    htmlFor="phone"
                                    className={`absolute left-6 text-sm transition-all ${billingForm.phone ? 'hidden' : 'top-2 text-gray-400'}`}
                                >
                                    phone Number <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="relative my-2 w-full md:w-[48%]">
                                <input
                                    type="text"
                                    name="email"
                                    value={billingForm.email}
                                    onChange={handleBillingChange}
                                    placeholder=" "
                                    className="peer w-full rounded-md border border-gray-200 px-6 py-2 text-sm placeholder-transparent outline-none"
                                />
                                <label
                                    htmlFor="email"
                                    className={`absolute left-6 text-sm transition-all ${billingForm.email ? 'hidden' : 'top-2 text-gray-400'}`}
                                >
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                            </div>
                        </div>
                        <div className="my-3 w-full">
                            <select
                                name="country"
                                id="country"
                                className="appearance-none text-gray-400 w-full rounded-md border border-gray-200 px-6 py-2 text-sm outline-none"
                                value={formData.country}
                                onChange={handleCountryChange}
                            >
                                <option value="" selected disabled>
                                    Select Country
                                </option>
                                {countries.map((c) => (
                                    <option key={c.name} value={c.name}>
                                        {c.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="my-4 w-full">
                            <select
                                name="district"
                                id="district"
                                className="appearance-none w-full rounded-md border border-gray-200 px-6 py-2 text-sm outline-none text-gray-400"
                                value={formData.district}
                                onChange={handleDistrictChange}
                            >
                                <option value="" selected disabled>
                                    Select District
                                </option>
                                {districts.map((d) => (
                                    <option key={d.name} value={d.name}>
                                        {d.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="relative my-2 w-full">
                                <input
                                    type="text"
                                    name="town"
                                    value={billingForm.town}
                                    onChange={handleBillingChange}
                                    placeholder=" "
                                    className="peer w-full rounded-md border border-gray-200 px-6 py-2 text-sm placeholder-transparent outline-none"
                                />
                                <label
                                    htmlFor="town"
                                    className={`absolute left-6 text-sm transition-all ${billingForm.town ? 'hidden' : 'top-2 text-gray-400'}`}
                                >
                                    Town<span className="text-red-500">*</span>
                                </label>
                            </div>
                        <div className="relative my-4 w-full">
                                <input
                                    type="text"
                                    name="address"
                                    value={billingForm.address}
                                    onChange={handleBillingChange}
                                    placeholder=" "
                                    className="peer w-full rounded-md border border-gray-200 px-6 py-2 text-sm placeholder-transparent outline-none"
                                />
                                <label
                                    htmlFor="address"
                                    className={`absolute left-6 text-sm transition-all ${billingForm.address ? 'hidden' : 'top-2 text-gray-400'}`}
                                >
                                    Address<span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="my-4 w-full">
                                <input type="text" name='postalCode' className='w-full rounded-md border border-gray-200 px-6 py-2 text-sm outline-none' placeholder="Postal Code/ZIP"/>                        
                            </div>
                            <h1 className="mb-6 border-b-1 border-gray-300 py-2 text-xl font-semibold">Extra Order Details</h1>
                            <div className='my-4 w-full'>
                                <textarea name="orderDetails" rows={5} id="" placeholder='Order Details' className='w-full rounded-md border border-gray-200 px-6 py-2 text-sm outline-none'></textarea>
                            </div>
                    </div>
                    <div className="mt-10 flex w-full justify-center lg:w-[35%]">
                        <div className="mx-auto w-[90%] bg-[#E5ECEE] p-8">
                            <h1 className="border-b-1 border-gray-300 py-2 text-lg font-semibold">Your Order</h1>
                            <div className="my-5 flex items-center justify-between text-sm text-gray-500">
                                <p>Product</p>
                                <p>Total</p>
                            </div>
                            <div className="my-5 flex items-center justify-between text-sm text-gray-500">
                                <p>jooby</p>
                                <p className="text-black">x02</p>
                                <p>$200.00</p>
                            </div>
                            <div className="my-5 flex items-center justify-between text-sm text-gray-500">
                                <p>jooby</p>
                                <p className="text-black">x02</p>
                                <p>$200.00</p>
                            </div>
                            <div className="my-5 flex items-center justify-between text-sm text-gray-500">
                                <p>jooby</p>
                                <p className="text-black">x02</p>
                                <p>$200.00</p>
                            </div>
                            <div className="my-5 flex items-center justify-between text-sm font-semibold text-gray-500">
                                <p className="text-black">SUBTOTAL</p>
                                <p>$2100.00</p>
                            </div>
                            <div className="my-5 flex items-center justify-between text-sm font-semibold text-gray-500">
                                <p className="text-black">SHIPPING</p>
                                <p>Flate Rate: $50.00</p>
                            </div>
                            <div className="my-5 flex items-center justify-between text-sm font-semibold text-gray-500">
                                <p className="text-black">TOTAL</p>
                                <p>$2150.00</p>
                            </div>
                            <div className="my-5 flex items-center justify-start text-sm font-semibold">
                                <input
                                    type="radio"
                                    id="cash"
                                    name="payment"
                                    value={'cash'}
                                    className='relative h-3 w-3 cursor-pointer appearance-none rounded-full border-1 border-gray-300 bg-white checked:border-[#FFBA00] checked:bg-[#FFBA00] checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:h-1 checked:before:w-1 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:transform checked:before:rounded-full checked:before:bg-white checked:before:content-[""]'
                                />
                                <label htmlFor="cash" className="ml-3 cursor-pointer">
                                    CASH ON DELIVERY
                                </label>
                            </div>
                            <div className="my-5 flex items-center justify-between text-sm font-semibold">
                                <div>
                                    <input
                                        type="radio"
                                        id="card"
                                        name="payment"
                                        value={'card'}
                                        className='relative h-3 w-3 cursor-pointer appearance-none rounded-full border-1 border-gray-300 bg-white checked:border-[#FFBA00] checked:bg-[#FFBA00] checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:h-1 checked:before:w-1 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:transform checked:before:rounded-full checked:before:bg-white checked:before:content-[""]'
                                    />
                                    <label htmlFor="card" className="ml-3 cursor-pointer">
                                        CARD PAYMENTS
                                    </label>
                                </div>
                                <img src="/images/card.jpg" alt="" />
                            </div>
                            <div className="my-5 flex items-center justify-start text-sm font-semibold">
                                <input
                                    type="radio"
                                    id="easypaisa"
                                    name="payment"
                                    value={'easypaisa'}
                                    className='relative h-3 w-3 cursor-pointer appearance-none rounded-full border-1 border-gray-300 bg-white checked:border-[#FFBA00] checked:bg-[#FFBA00] checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:h-1 checked:before:w-1 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:transform checked:before:rounded-full checked:before:bg-white checked:before:content-[""]'
                                />
                                <label htmlFor="easypaisa" className="ml-3 cursor-pointer">
                                    EASYPAISA
                                </label>
                            </div>
                            <div className="my-5 flex items-center justify-start text-sm font-semibold">
                                <input
                                    type="radio"
                                    id="jazzcash"
                                    name="payment"
                                    value={'jazzcash'}
                                    className='relative h-3 w-3 cursor-pointer appearance-none rounded-full border-1 border-gray-300 bg-white checked:border-[#FFBA00] checked:bg-[#FFBA00] checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:h-1 checked:before:w-1 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:transform checked:before:rounded-full checked:before:bg-white checked:before:content-[""]'
                                />
                                <label htmlFor="jazzcash" className="ml-3 cursor-pointer">
                                    JAZZCASH
                                </label>
                            </div>
                            <div className="my-5 flex items-center justify-start">
                                <input type="checkbox" id="terms" name="terms" value={'terms'} />
                                <label htmlFor="terms" className="ml-3 text-[12px]">
                                    I’ve read and accept the{' '}
                                    <Link href="/terms" className="text-red-600">
                                        terms & conditions*
                                    </Link>
                                </label>
                            </div>
                            <button className="relative w-full overflow-hidden bg-gradient-to-r from-[#ffba00] to-[#ff6c00] px-10 py-2 text-sm font-semibold text-white uppercase transition-all duration-300 ease-in-out before:absolute before:top-0 before:left-[-150%] before:h-full before:w-full before:skew-x-[40deg] before:bg-black before:opacity-0 before:transition-all before:duration-300 before:ease-in-out before:content-[''] hover:before:left-[150%] hover:before:opacity-30">
                                proceed to payment
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
