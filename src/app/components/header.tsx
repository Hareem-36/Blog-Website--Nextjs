"use client"

// components/Header.tsx
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-teal-600 text-white">
            {/* Toggle Button for Mobile View */}
            <div className="md: flex justify-between items-center p-10">
              <span className="text-xl font-bold">Historical Places Of Pakistan</span>
                <button onClick={toggleMenu} className="focus:outline-none">
                    {isOpen ? '✖' : '☰'} {/* Change icon based on open state */}
                </button>
            </div>

            {/* Menu Items */}
            <ul className={`flex ${isOpen ? 'flex-col' : 'hidden'} md:flex-row md:justify-between md:items-center`}>
                <li className="menu-item hover:bg-gray-700 p-2 transition-colors font-bold">
                    <Link href={"/"}>Home</Link>
                </li>
                <li className="menu-item hover:bg-gray-700 p-2 transition-colors font-bold">
                    <Link href={"/about"}>About Pakistan</Link>
                </li>
                <li className="menu-item hover:bg-gray-700 p-2 transition-colors font-bold">
                    <Link href={"#blogSection"}>Blogs</Link>
                </li>
                <li className="menu-item hover:bg-gray-700 p-2 transition-colors font-bold">
                    <Link href={"#contactUs"}>Contact</Link>
                </li>
            </ul>
        </div>
    );
}
