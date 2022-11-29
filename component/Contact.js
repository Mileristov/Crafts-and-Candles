import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div
            initial={{
                x: -500,
                opacity: 0,
            }}
            animate={{
                x: 0,
                opacity: 1,
            }}
            transition={{
                duration: 0.5,
            }}
            className="contact-wrap"
        >
            <h1> How to get in contact with us</h1>

            <p>Have questions or complaints? </p>
            <p>Call us anytime at ++49 1578 6810 677</p>
            <p>Send us an Email: </p>
            <Link href="mailto:mile.ristov12@gmail.com" className="icon">
                mile.ristov12@gmail.com
            </Link>

            <p>
                Follow us on social media to keep up to date with our products
            </p>

            <Link
                href="https://www.instagram.com/diecandle/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
            >
                <FaInstagram />
                <p>Instagram</p>
            </Link>
        </motion.div>
    );
};

export default Contact;
