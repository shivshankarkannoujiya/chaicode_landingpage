import React from "react";
import { motion } from "framer-motion";

const NavItem = ({ label }) => {
    return (
        <motion.li
            className="relative px-5 py-1 text-lg font-semibold text-gray-800 cursor-pointer group"
            initial="initial"
            whileHover="hover"
            animate="initial"
        >
            <motion.div
                className="absolute inset-0 bg-[#d48040] rounded-full z-0"
                variants={{
                    initial: { scaleX: 0, opacity: 0 },
                    hover: { scaleX: 1, opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0.5 }}
            />

            <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                {label}
            </span>
        </motion.li>
    );
};

const Navbar = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-between p-5 border-b-[1px] border-black bg-white"
        >
            <div>
                {/* <img src="\images\chaicode-black.png" alt="logo" className="w-40 h-auto" /> */}
                <h1 className="text-2xl font-bold">LOGO</h1>
            </div>

            <div className="border-2 border-black px-5 py-3 items-center rounded-full">
                <ul className="flex space-x-6">
                    {["Cohorts", "Udemy", "Docs", "Reviews"].map((item, index) => (
                        <NavItem key={index} label={item} />
                    ))}
                </ul>
            </div>

            <motion.button
                whileHover={{
                    scale: 1.05,
                    y: -2,
                    backgroundColor: "#cf6f1e",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                }}
                whileTap={{
                    scale: 0.97,
                    y: 0,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                }}
                className="px-4 py-2.5 sm:px-7 sm:py-2.5 bg-[#d48040] text-white rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 border border-[#d76f1f] shadow-md hover:shadow-lg cursor-pointer"
            >
                Login
            </motion.button>
        </motion.nav>
    );
};

export default Navbar;
