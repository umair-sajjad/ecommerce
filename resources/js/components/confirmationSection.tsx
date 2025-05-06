export default function ConfirmationSection() {
    return (
        <>
            <p className="my-5 text-center text-xl font-semibold text-green-500">Thank you. Your Oder has been Received.</p>
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="w-full lg:w-1/3 lg:pr-8">
                    <h1 className="mb-3 border-b-1 border-gray-300 py-2 text-lg font-semibold px-5">Order Info</h1>
                    <div className="my-2 flex text-sm text-gray-500 px-5">
                        <span className="w-40">Order number</span>
                        <span className="font-medium text-gray-500 px-5">: 60235</span>
                    </div>
                    <div className="my-2 flex text-sm text-gray-500 px-5">
                        <span className="w-40">Date</span>
                        <span className="font-medium text-gray-500 px-5">: 8/9/23</span>
                    </div>
                    <div className="my-2 flex text-sm text-gray-500 px-5">
                        <span className="w-40">Total</span>
                        <span className="font-medium text-gray-500 px-5">: $1200.00</span>
                    </div>
                    <div className="my-2 flex text-sm text-gray-500 px-5">
                        <span className="w-40">Payment method</span>
                        <span className="font-medium text-gray-500 px-5">: cash</span>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 lg:pr-8">
                    <h1 className="mb-3 border-b-1 border-gray-300 py-2 text-lg font-semibold px-5">Shipping Address</h1>
                    <div className="my-2 flex text-sm text-gray-500 px-5">
                        <span className="w-40">Order number</span>
                        <span className="font-medium text-gray-500 px-5">: 60235</span>
                    </div>
                    <div className="my-2 flex text-sm text-gray-500 px-5">
                        <span className="w-40">Date</span>
                        <span className="font-medium text-gray-500 px-5">: 8/9/23</span>
                    </div>
                    <div className="my-2 flex text-sm text-gray-500 px-5">
                        <span className="w-40">Total</span>
                        <span className="font-medium text-gray-500 px-5">: $1200.00</span>
                    </div>
                    <div className="my-2 flex text-sm text-gray-500 px-5">
                        <span className="w-40">Payment method</span>
                        <span className="font-medium text-gray-500 px-5">: cash</span>
                    </div>
                </div>
                <div className="w-full lg:w-1/3">
                    <h1 className="mb-3 border-b-1 border-gray-300 py-2 text-lg font-semibold px-5">Billing Address</h1>
                    <div className="my-2 flex text-sm text-gray-500 px-5">
                        <span className="w-40">Order number</span>
                        <span className="font-medium text-gray-500 px-5">: 60235</span>
                    </div>
                    <div className="my-2 flex text-sm text-gray-500 px-5">
                        <span className="w-40">Date</span>
                        <span className="font-medium text-gray-500 px-5">: 8/9/23</span>
                    </div>
                    <div className="my-2 flex text-sm text-gray-500 px-5">
                        <span className="w-40">Total</span>
                        <span className="font-medium text-gray-500 px-5">: $1200.00</span>
                    </div>
                    <div className="my-2 flex text-sm text-gray-500 px-5">
                        <span className="w-40">Payment method</span>
                        <span className="font-medium text-gray-500 px-5">: cash</span>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex w-full justify-center">
                <div className="w-full bg-[#E5ECEE] p-8">
                    <h1 className="py-2 text-xl font-semibold">Order details</h1>
                    <div className="py-2 flex items-center justify-between text-md text-gray-500 border-t-1 border-gray-300">
                        <p>Product</p>
                        <p>Quantity</p>
                        <p>Total</p>
                    </div>
                    <div className="py-3 flex items-center justify-between text-md text-gray-500 border-t-1 border-gray-300">
                        <p>jooby</p>
                        <p className="text-black font-semibold">x02</p>
                        <p>$200.00</p>
                    </div>
                    <div className="py-3 flex items-center justify-between text-md text-gray-500 border-t-1 border-gray-300">
                        <p>jooby</p>
                        <p className="text-black font-semibold">x02</p>
                        <p>$200.00</p>
                    </div>
                    <div className="py-3 flex items-center justify-between text-md text-gray-500 border-t-1 border-gray-300">
                        <p>jooby</p>
                        <p className="text-black font-semibold">x02</p>
                        <p>$200.00</p>
                    </div>
                    <div className="py-3 flex items-center justify-between text-md font-semibold text-gray-500 border-t-1 border-gray-300">
                        <p className="text-black">SUBTOTAL</p>
                        <p>$2100.00</p>
                    </div>
                    <div className="py-3 flex items-center justify-between text-md font-semibold text-gray-500 border-t-1 border-gray-300">
                        <p className="text-black">SHIPPING</p>
                        <p>Flate Rate: $50.00</p>
                    </div>
                    <div className="py-3 flex items-center justify-between text-md font-semibold text-gray-500 border-t-1 border-gray-300">
                        <p className="text-black">TOTAL</p>
                        <p>$2150.00</p>
                    </div>
                </div>
            </div>
        </>
    );
}
