import Link from "next/link";
import React from "react";

import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear;

    return (
        <footer>
            <div className="footer-social">
                <Link
                    href="https://www.instagram.com/diecandle/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="footer-icon"
                >
                    <FaInstagram />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/mile-ristov-898486235/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="footer-icon"
                >
                    <FaLinkedin />
                </Link>
            </div>
            <div className="footer-links">
                <Link href="/about" className="footer-link">
                    <p>About</p>
                </Link>

                <Link href="/contactpage" className="footer-link">
                    <p>Contact</p>
                </Link>

                <Link href="/playlist" className="footer-link">
                    <p>Radio</p>
                </Link>

                <Link href="/craft" className="footer-link">
                    <p>Craft</p>
                </Link>
            </div>
            <div className="footer-copyright">
                <Link
                    href="https://www.linkedin.com/in/mile-ristov-898486235/"
                    className="footer-link"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <p> Mile Ristov. © {yearTxt}</p>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
