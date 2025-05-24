import React from 'react';
import Button from './Button';
import { LuIndianRupee } from "react-icons/lu";
import { motion } from 'framer-motion';

function Fees() {
    const data = [
        {
            plan: "basic plan",
            rate: "600",
            sub1: "single personalized plan",
            sub2: "Tailored to fitness",
            sub3: "basic workout",
            sub4: "meal suggestions",
            sub5: "",
        },
        {
            plan: "pro plan",
            rate: "1200",
            sub1: "personal traning",
            sub2: "weight tracking",
            sub3: "meal plan",
            sub4: "progress monitoring",
            sub5: "customizable routines",
        },
        {
            plan: "elite plan",
            rate: "2000",
            sub1: "all pro plan feature",
            sub2: "one-on-one coaching",
            sub3: "weekly check-ins",
            sub4: "priority support",
            sub5: "expert guidance",
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
        }),
    };

    return (
        <div className="w-full min-h-10vh bg-black px-4 py-10">
            {/* Heading */}
            <motion.div
                className="w-full text-white flex flex-col gap-5 items-center justify-center mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-[myHeadingfont] uppercase lg:text-[6vw]">
                        perfect plan for your
                    </h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-[myHeadingfont] uppercase lg:text-[6vw]">
                        fitness goals
                    </h1>
                </div>
                <p className="text-sm sm:text-base md:text-lg font-normal font-[myParafont] w-[90%] sm:w-[80%] text-center capitalize lg:text-[1.3vw]">
                    Choose the perfect plan to match your fitness goals and start your journey today
                </p>
            </motion.div>

            {/* Plans */}
            <div className="flex flex-wrap gap-6 justify-center items-stretch">
                {data.map((elem, index) => {
                    const features = [elem.sub1, elem.sub2, elem.sub3, elem.sub4, elem.sub5].filter(Boolean);
                    return (
                        <motion.div
                            key={index}
                            className="bg-zinc-200 rounded-3xl flex flex-col items-center justify-between px-6 py-6 mb-5 w-full sm:w-[80%] md:w-[45%] lg:w-[30%] max-w-[350px] hover:scale-[1.03] transition-transform duration-300 shadow-md"
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {/* Plan name */}
                            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-[3vw] text-zinc-700 font-semibold font-[myHeadingfont] mb-4 text-center capitalize">
                                {elem.plan}
                            </h1>

                            {/* Price + Features */}
                            <div className="w-full mb-4">
                                <div className="flex items-center gap-1 mb-4">
                                    <LuIndianRupee className="text-black text-3xl" />
                                    <h1 className="text-2xl font-semibold font-[myHeadingfont] lg:text-[2.5vw]">{elem.rate}/</h1>
                                    <h3 className="text-base font-medium font-[myParafont] lg:text-[1.3vw]">Month</h3>
                                </div>
                                <ul className="list-disc pl-5">
                                    {features.map((feature, idx) => (
                                        <li key={idx} className="text-sm sm:text-base font-normal font-[myParafont] capitalize mb-2 lg:text-[1.2vw]">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Button */}
                            <div className="mt-auto">
                                <Button title={"join now"} />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

export default Fees;
