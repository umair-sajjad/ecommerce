
export default function ForgotPasswordSection() {
    return (
        <>
            <div className="flex lg:w-[75%] w-full items-center justify-center py-[100px] shadow-xl px-10 sm:px-20">
                <div className="w-full">
                    <h1 className="text-center font-semibold text-xl">Forgot Password</h1>
                    <form action="#" className="mt-10">
                        <div>
                            <input type="email" placeholder="Email" name="email" className="p-4 border-b-1 border-gray-300 outline-0 w-full"/>
                            <span className="text-red-600 text-end text-[14px] block">error</span>
                        </div>
                        
                        <button className="relative mt-8 inline-block overflow-hidden bg-gradient-to-r from-[#ffba00] to-[#ff6c00] px-7 py-2 w-full font-semibold text-white uppercase transition-all duration-300 ease-in-out before:absolute before:top-0 before:left-[-150%] before:h-full before:w-full before:skew-x-[40deg] before:bg-black before:opacity-0 before:transition-all before:duration-300 before:ease-in-out before:content-[''] hover:before:left-[150%] hover:before:opacity-30">send</button>
                    </form>
                    <p className="mt-5 text-sm text-gray-600 text-center block">We are mailing a password reset link</p>
                </div>
            </div>
        </>
    );
}