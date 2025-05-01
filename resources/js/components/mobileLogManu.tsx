import { createPortal } from 'react-dom';
import { Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from 'react';

interface LogDropdownProps {
    triggerRef: React.RefObject<HTMLElement | null>;
} 
const LogDropdown: React.FC<LogDropdownProps> = ({ triggerRef }) => {
    const [position, setPosition] = useState({top: 0, left: 10});
    const animationFrame = useRef<number | null>(null);

    const   updatePosition = () => {
        if(animationFrame.current) {
            cancelAnimationFrame(animationFrame.current);
        }
        animationFrame.current = requestAnimationFrame(() => {
            if(triggerRef.current) {
                const rect = triggerRef.current.getBoundingClientRect();
                setPosition({
                    top: rect.bottom + window.scrollY + 4,
                    left: rect.left + window.scrollX,
                });
            }
        });
    };

    useEffect(() => {
        updatePosition(); // Initial

        window.addEventListener('scroll', updatePosition);
        window.addEventListener('resize', updatePosition);

        return () => {
            window.removeEventListener('scroll', updatePosition);
            window.removeEventListener('resize', updatePosition);
            if(animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, [triggerRef]);


    return createPortal(
        <ul className="absolute z-50 w-50 bg-white shadow-2xl">
            <li className="border-b-1 border-gray-200 bg-white p-4 text-sm font-semibold text-[#ffba00] transition-all duration-300 ease-in-out hover:bg-[#ffba00] hover:text-white">
                <Link href="">Update Profile</Link>
            </li>
            <li className="border-b-1 border-gray-200 bg-white p-4 text-sm font-semibold text-[#ffba00] transition-all duration-300 ease-in-out hover:bg-[#ffba00] hover:text-white">
                <Link href="">Track Orders</Link>
            </li>
            <li className="border-b-1 border-gray-200 bg-white p-4 text-sm font-semibold text-[#ffba00] transition-all duration-300 ease-in-out hover:bg-[#ffba00] hover:text-white">
                <Link href="">Orders History</Link>
            </li>
            <li className="bg-white p-4 text-sm font-semibold text-[#ffba00] transition-all duration-300 ease-in-out hover:bg-[#ffba00] hover:text-white">
                <Link href="">Sign Out</Link>
            </li>
        </ul>,
        document.body
    );
};
 export default LogDropdown;