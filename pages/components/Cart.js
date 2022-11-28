import React, { useRef } from "react";
import Link from "next/link";
import {
    AiOutlineMinus,
    AiOutlinePlus,
    AiOutlineLeft,
    AiOutlineShopping,
} from "react-icons/ai";
import toast from "react-hot-toast";
import { urlFor } from "../../lib/client";
import { useStateContext } from "../../context/StateContext";
import getStripe from "../../lib/getStripe";
import Image from "next/image";

const Cart = () => {
    const cartRef = useRef();
    const {
        totalPrice,
        totalQuantities,
        cartItems,
        setShowCart,
        toggleCartItemQuanitity,
        onRemove,
    } = useStateContext();

    const handleCheckout = async () => {
        const stripe = await getStripe();

        const response = await fetch("/api/stripe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cartItems),
        });

        if (response.statusCode === 500) return;

        const data = await response.json();

        toast.loading("Redirecting...");

        stripe.redirectToCheckout({ sessionId: data.id });
    };

    return (
        <div className="cart-wrapper" ref={cartRef}>
            <div className="cart-container">
                <div className="total">
                    <button
                        type="button"
                        className="cart-heading"
                        onClick={() => setShowCart(false)}
                    >
                        <AiOutlineLeft />
                        <span className="heading">
                            <p>Continue shopping</p>
                        </span>
                    </button>

                    <div className="subtotal">
                        <h3>Subtotal:</h3>
                        <h3>${totalPrice}</h3>
                    </div>
                </div>

                {cartItems.length < 1 && (
                    <div className="empty-cart">
                        <AiOutlineShopping size={150} />
                        <h3>Your shopping bag is empty</h3>
                        <Link href="/">
                            <button
                                type="button"
                                onClick={() => setShowCart(false)}
                                className="btn"
                            >
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                )}

                <div className="product-container-cart">
                    <div className="the-total">
                        <p>{totalQuantities} items in your cart</p>
                    </div>
                    {cartItems.length >= 1 &&
                        cartItems.map((item) => (
                            <div className="product-cart" key={item._id}>
                                <div className="cart-product-image-padding">
                                    <Image
                                        src={urlFor(item?.image[0])}
                                        className="cart-product-image"
                                        alt="img"
                                    />
                                </div>
                                <div className="item-desc-cart">
                                    <h5>{item.name}</h5>
                                    <h4>${item.price}</h4>

                                    <div className="flex bottom">
                                        <div>
                                            <p className="quantity-desc-cart">
                                                <span
                                                    className="minus"
                                                    onClick={() =>
                                                        toggleCartItemQuanitity(
                                                            item._id,
                                                            "dec"
                                                        )
                                                    }
                                                >
                                                    <AiOutlineMinus />
                                                </span>
                                                <span className="num">
                                                    {item.quantity}
                                                </span>
                                                <span
                                                    className="plus"
                                                    onClick={() =>
                                                        toggleCartItemQuanitity(
                                                            item._id,
                                                            "inc"
                                                        )
                                                    }
                                                >
                                                    <AiOutlinePlus />
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="remove-item"
                                        onClick={() => onRemove(item)}
                                    >
                                        Remove item
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
                {cartItems.length >= 1 && (
                    <div className="cart-bottom">
                        <div></div>
                        <div className="btn-container">
                            <button
                                type="button"
                                className="btn"
                                onClick={handleCheckout}
                            >
                                Pay with Stripe
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
