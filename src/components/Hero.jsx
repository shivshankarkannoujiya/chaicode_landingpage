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
                        Content is everywhere, we provide a learning experience that is unmatched
                        --- Bounties, peer learning peer code reviews, Virtual hostel, Alumni
                        Network, Doubt sessions, Group projects and so many other activities to keep
                        you on track.
                    </h3>
                </div>
            </motion.div>

            <div className="text-center mt-10 w-4/6 ">
                <button className="border-[1px] border-[#d78242] shadow-[0_4px_10px_0_#d78242] p-6 rounded-lg w-1/2 text-xl font-semibold text-[#d78242] cursor-pointer">
                    Check all Live Cohorts
                </button>
            </div>
        </motion.main>
    );
};

export default Hero;
