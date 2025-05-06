import { Link } from '@inertiajs/react';
import { Country, State } from 'country-state-city';
import { useEffect, useState } from 'react';

export default function ProfileSection() {
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
            <form action="">
                <div className="flex w-full flex-col lg:flex-row">
                    <div className="w-full lg:w-[65%]">
                        <h1 className="mb-6 border-b-1 border-gray-300 py-2 text-3xl font-semibold">Manage User Information</h1>
                        <div className="my-2 w-full">
                            <input
                                type="text"
                                name="username"
                                placeholder="username"
                                className="w-full rounded-md border border-gray-200 px-6 py-2 text-sm outline-none"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-between md:flex-row">
                            <div className="my-2 w-full md:w-[48%]">
                                <input
                                    type="text"
                                    name="fname"
                                    placeholder="First Name"
                                    className="w-full rounded-md border border-gray-200 px-6 py-2 text-sm outline-none"
                                />
                            </div>
                            <div className="my-2 w-full md:w-[48%]">
                                <input
                                    type="text"
                                    name="lname"
                                    placeholder="Last Name"
                                    className="w-full rounded-md border border-gray-200 px-6 py-2 text-sm outline-none"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-between md:flex-row">
                            <div className="my-2 w-full md:w-[48%]">
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    className="w-full rounded-md border border-gray-200 px-6 py-2 text-sm outline-none"
                                />
                            </div>
                            <div className="my-2 w-full md:w-[48%]">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email Address"
                                    className="w-full rounded-md border border-gray-200 px-6 py-2 text-sm outline-none"
                                />
                            </div>
                        </div>
                        <div className="my-3 w-full">
                            <select
                                name="country"
                                id="country"
                                className="w-full appearance-none rounded-md border border-gray-200 px-6 py-2 text-sm text-gray-500 outline-none"
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
                                className="w-full appearance-none rounded-md border border-gray-200 px-6 py-2 text-sm text-gray-500 outline-none"
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
                        <div className="my-2 w-full">
                            <input
                                type="text"
                                name="town"
                                placeholder="Town"
                                className="w-full rounded-md border border-gray-200 px-6 py-2 text-sm outline-none"
                            />
                        </div>
                        <div className="relative my-4 w-full">
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                className="w-full rounded-md border border-gray-200 px-6 py-2 text-sm outline-none"
                            />
                        </div>
                        <div className="my-4 w-full">
                            <input
                                type="text"
                                name="postalCode"
                                className="w-full rounded-md border border-gray-200 px-6 py-2 text-sm outline-none"
                                placeholder="Postal Code/ZIP"
                            />
                        </div>
                        <Link href='/forgot-password' className='mt-2 text-sm text-gray-600 text-end block'>forgor password?</Link>
                        <button className='relative mt-2 overflow-hidden bg-[#FFBA00] px-10 py-2 text-sm font-semibold text-white uppercase transition-all duration-300 ease-in-out before:absolute before:top-0 before:left-[-150%] before:h-full before:w-full before:skew-x-[40deg] before:bg-black before:opacity-0 before:transition-all before:duration-300 before:ease-in-out before:content-[""] hover:before:left-[150%] hover:before:opacity-30'>
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
