export default function Tracking() {
    return(
        <>
            <p className="text-black text-md w-full">To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
            <form action=""  className="my-4 w-full">
                <div>
                    <input type="text" name='OrderID' className='w-full md:w-[60%] rounded-md border border-gray-200 px-6 py-2 text-sm outline-none' placeholder="Order ID"/>
                </div>            
                <button className="relative mt-5 overflow-hidden bg-gradient-to-r from-[#ffba00] to-[#ff6c00] px-10 py-2 text-sm font-semibold text-white uppercase transition-all duration-300 ease-in-out before:absolute before:top-0 before:left-[-150%] before:h-full before:w-full before:skew-x-[40deg] before:bg-black before:opacity-0 before:transition-all before:duration-300 before:ease-in-out before:content-[''] hover:before:left-[150%] hover:before:opacity-30">
                                Track Order
                </button>            
            </form>
        </>
    );
}