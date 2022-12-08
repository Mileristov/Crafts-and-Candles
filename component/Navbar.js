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
        <>
            <div className="home">
                <Link href="/">
                    <h1 className="logo">C & C</h1>
                </Link>
            </div>
            <header className="nav-bar">
                <nav ref={navRef}>
                    <Link href="/about" onClick={showNavbar}>
                        About
                    </Link>

                    <Link href="/contactpage" onClick={showNavbar}>
                        Contact
                    </Link>

                    <Link href="/playlist" onClick={showNavbar}>
                        Radio
                    </Link>

                    <Link href="/craft" onClick={showNavbar}>
                        Crafting
                    </Link>

                    <Link href="/shop" onClick={showNavbar}>
                        Store
                    </Link>

                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}
                    >
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
        </>
    );
};

export default Navbar;
