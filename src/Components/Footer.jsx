import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white px-5 py-10">
            <motion.div
                className="border-t border-[#e4ff1a] py-9 max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                {/* Logo & Description */}
                <div>
                    <motion.div
                        className="logo flex gap-1 mb-3 items-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <AiOutlineThunderbolt className="text-5xl text-[#e4ff1a]" />
                        <h1 className="text-[#e4ff1a] font-semibold text-5xl font-[myButtonfont] capitalize cursor-pointer">
                            Bolt
                        </h1>
                    </motion.div>
                    <p className="text-md text-gray-300">
                        Your one-stop destination for transforming your fitness journey with top-notch equipment, expert trainers, and personalized programs.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold mb-3 text-[#e4ff1a]">Quick Links</h2>
                    <div className="flex flex-col gap-2 text-gray-300 capitalize text-sm">
                        {["home", "programs", "about", "pricing", "contact"].map((link, i) => (
                            <Link
                                key={i}
                                to={link === "home" ? "/" : `/${link}`}
                                className="hover:text-white hover:underline underline-offset-4 transition"
                            >
                                {link}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-xl font-semibold mb-3 text-[#e4ff1a]">Contact</h2>
                    <p className="text-sm text-gray-300">📍 123 Gym Street, Delhi, IN</p>
                    <p className="text-sm text-gray-300">📞 +91 98765 43210</p>
                    <p className="text-sm text-gray-300">✉️ contact@bolt.in</p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 mt-4 text-[#e4ff1a]">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-xl cursor-pointer hover:scale-110 transition" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="text-xl cursor-pointer hover:scale-110 transition" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-xl cursor-pointer hover:scale-110 transition" />
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Bottom Footer */}
            <motion.div
                className="w-full border-t border-gray-700 mt-10 pt-5 text-center text-xs text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                © {new Date().getFullYear()} Bolt. All rights reserved.
            </motion.div>
        </footer>
    );
};

export default Footer;
