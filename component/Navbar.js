import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { useRef } from "react";
import Link from "next/link";
import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";
const Navbar = () => {
    const navRef = useRef();
    const { showCart, setShowCart, totalQuantities } = useStateContext();
    const [cartQuantity, setCartQuantity] = useState(0); // To avoid React hydration error

    useEffect(() => setCartQuantity(totalQuantities), [totalQuantities]);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header className="nav-bar">
            <Link href="/">
                <h3 className="logo">The Candle</h3>
            </Link>
            <nav ref={navRef}>
                <Link href="/about">About</Link>

                <Link href="/contactpage">Contact</Link>

                <Link href="/playlist"> Radio </Link>

                <Link href="/craft"> Crafting </Link>

                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </nav>

            <button className="nav-btn" onClick={showNavbar}>
                Menu
            </button>
            <button
                type="button"
                className="cart-icon"
                onClick={() => setShowCart(true)}
            >
                <AiOutlineShopping />
                <span className="cart-item-qty">{cartQuantity}</span>
            </button>
            {showCart && <Cart />}
        </header>
    );
};

export default Navbar;
