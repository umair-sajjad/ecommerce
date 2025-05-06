import { Link } from "@inertiajs/react";

export default function HistorySection() {
    return(
        <>
            <h1 className="text-3xl font-semibold mb-5">Your History</h1>
            <table className="w-full">
                <tr className="text-left text-gray-500 border-b-1 border-gray-300 font-semibold">
                    <th className="py-3">ID#</th>
                    <th>Order ID</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th> </th>
                </tr>
                <tr className="text-gray-500 border-b-1 border-gray-300 text-left text-sm">
                    <td className="py-3">1</td>
                    <td>12345845</td>
                    <td>$196.00</td>
                    <td className=" text-red-500">deliverd</td>
                    <td>
                        <Link href="#" className="w-25 h-10 bg-[#FF6C00] text-white py-2 px-5">Deatils</Link>
                    </td>
                </tr>
                <tr className="text-gray-500 border-b-1 border-gray-300 text-left text-sm">
                    <td className="py-3">2</td>
                    <td>12345845</td>
                    <td>$196.00</td>
                    <td className=" text-red-500">deliverd</td>
                    <td>
                        <Link href="#" className="w-25 h-10 bg-[#FF6C00] text-white py-2 px-5">Deatils</Link>
                    </td>
                </tr>
                <tr className="text-gray-500 border-b-1 border-gray-300 text-left text-sm">
                    <td className="py-3">3</td>
                    <td>12345845</td>
                    <td>$196.00</td>
                    <td className=" text-red-500">deliverd</td>
                    <td>
                        <Link href="#" className="w-25 h-10 bg-[#FF6C00] text-white py-2 px-5">Deatils</Link>
                    </td>
                </tr>
            </table>
        </>
    );
}