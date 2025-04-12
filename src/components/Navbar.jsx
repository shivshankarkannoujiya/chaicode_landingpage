import React from "react";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-5 border-b-2 border-black">
            <div className="text-2xl font-bold">LOGO</div>

            <div className="border-2 border-black px-5 py-3 items-center rounded-full">
                <ul className="flex gap-15 font-semibold cursor-pointer text-xl">
                    <li className="hover:text-gray-600 transition">Cohorts</li>
                    <li className="hover:text-gray-600 transition">Udemy</li>
                    <li className="hover:text-gray-600 transition">Docs</li>
                    <li className="hover:text-gray-600 transition">Reviews</li>
                </ul>
            </div>

            <div>
                <button className="px-6 py-2 bg-gray-950 text-white border-none rounded-xl text-xl font-semibold cursor-pointer hover:bg-gray-800 transition">
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
