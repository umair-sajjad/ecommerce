import { Link } from "@inertiajs/react";

export default function RegisterSection() {
    return (
        <>
            <main className="flex w-full flex-col lg:flex-row items-stretch shadow-xl">
            <div className="flex w-full lg:w-1/2 flex-col items-center justify-center bg-[url(/images/login-img.jpg)] bg-cover bg-center bg-no-repeat py-[200px] text-white relative">
                <div className="absolute top-0 left-0 z-10 h-full w-full bg-black opacity-50"></div>
                <div className="relative z-20 w-[75%] text-center">
                    <h1 className="text-2xl font-semibold">Already have an account</h1>
                    <p className="mt-4 text-sm">There are advances being made in science and technology everyday, and a good example of this is the</p>
                    <Link
                        href="/login"
                        className="relative mt-10 inline-block overflow-hidden bg-gradient-to-r from-[#ffba00] to-[#ff6c00] px-7 py-2 font-semibold text-white uppercase transition-all duration-300 ease-in-out before:absolute before:top-0 before:left-[-150%] before:h-full before:w-full before:skew-x-[40deg] before:bg-black before:opacity-0 before:transition-all before:duration-300 before:ease-in-out before:content-[''] hover:before:left-[150%] hover:before:opacity-30"
                    >
                        login/signin
                    </Link>
                </div>
            </div>
            <div className="flex w-full lg:w-1/2 items-center justify-center py-[100px]">
                <div>
                    <h1 className="text-center font-semibold text-xl">REGISTER TO ENTER</h1>
                    <form action="#" className=" mt-10">
                        <div>
                            <input type="text" placeholder="Name" name="name" className="p-4 border-b-1 border-gray-300 outline-0 w-full"/>
                            <span className="text-red-600 text-end text-[14px] block">error</span>
                        </div>
                        <div>
                            <input type="text" placeholder="Username" name="username" className="p-4 border-b-1 border-gray-300 outline-0 w-full"/>
                            <span className="text-red-600 text-end text-[14px] block">error</span>
                        </div>
                        <div>
                            <input type="email" placeholder="Email" name="email" className="p-4 border-b-1 border-gray-300 outline-0 w-full"/>
                            <span className="text-red-600 text-end text-[14px] block">error</span>
                        </div>
                        <div>
                            <input type="text" placeholder="password" name="password" className="p-4 border-b-1 border-gray-300 outline-0 w-full"/>
                            <span className="text-red-600 text-end text-[14px] block">error</span>
                        </div>
                        <div>
                            <input type="password" placeholder="Confirm Password" name="password_confirmation" className="p-4 border-b-1 border-gray-300 outline-0 w-full"/>
                            <span className="text-red-600 text-end text-[14px] block">error</span>
                        </div>
                        <button className="relative mt-8 inline-block overflow-hidden bg-gradient-to-r from-[#ffba00] to-[#ff6c00] px-7 py-2 w-90 font-semibold text-white uppercase transition-all duration-300 ease-in-out before:absolute before:top-0 before:left-[-150%] before:h-full before:w-full before:skew-x-[40deg] before:bg-black before:opacity-0 before:transition-all before:duration-300 before:ease-in-out before:content-[''] hover:before:left-[150%] hover:before:opacity-30">register</button>
                    </form>
                </div>
            </div>
        </main>
        </>
    );
}