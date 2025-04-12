import React from "react";
import { motion } from "framer-motion";

const AnimatedHeading = ({ text }) => {
    return (
        <motion.h1
            className="text-5xl font-bold flex  flex-wrap justify-center"
            initial="initial"
            whileHover="hover"
        >
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    variants={{
                        initial: { y: 0 },
                        hover: {
                            y: -10,
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 10,
                                delay: i * 0.03,
                            },
                        },
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.h1>
    );
};

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
    return (
        <motion.main
            className="h-screen p-10 flex flex-col items-center"
            variants={container}
            initial="hidden"
            animate="show"
        >
            <div
                className="border-2 border-gray-950 px-5 py-2 mt-4 rounded"
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
            >
                <h2 className="text-center font-semibold">Trusted by 1.5M Code Learners</h2>
            </div>

            <motion.div className="flex items-center flex-col gap-4 mt-5" variants={container}>
                <AnimatedHeading text="Consistency and Community" />

                <h2 className="text-6xl font-bold text-center text-[#d48040]">
                    An unmatched Learning Experience for coding courses.
                </h2>

                <div className="w-4/7">
                    <h3 className="text-center text-xl text-gray-950 font-semibold leading-tight ">
                        Content is everywhere, we provide a learning experience that is unmatched.
                        Bounties, peer learning peer code reviews, Virtual hostel, Alumni Network,
                        Doubt sessions, Group projects and so many other activities to keep you on
                        track.
                    </h3>
                </div>
            </motion.div>

            <div className="text-center mt-10 w-4/8 border-1 border-[#d78242]  shadow-[0_4px_10px_0_#d78242] p-4 rounded-lg">
                <motion.button
                    whileHover={{
                        scale: 1.05,
                        y: -2,
                        backgroundColor: "#cf6f1e",
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                    }}
                    whileTap={{
                        scale: 0.05,
                        y: 0,
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 18,
                    }}
                    className="bg-[#d78242] text-white border-none hover:bg-[#d78242] transition-all duration-300 px-10 py-5 w-4/8 text-2xl font-medium  hover:shadow-lg cursor-pointer shadow-[0_4px_10px_0_#d78242] rounded-lg"
                >
                    Check all Live Cohorts
                </motion.button>
            </div>
        </motion.main>
    );
};

export default Hero;
