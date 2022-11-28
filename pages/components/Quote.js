import Image from "next/image";
import React from "react";

const Quote = () => {
    return (
        <div className="about-wrap">
            <div className="right-about-container">
                <Image src="/radio.jpg" alt="spotify radio candle" />
            </div>
            <div className="left-about-container">
                <h1>
                    “The only truth is music.” <br /> ― Jack Kerouac
                </h1>
                <p>
                    We care about music so we hope you feel the same. Here is
                    some playlist for you to enjoy.
                </p>
            </div>
        </div>
    );
};

export default Quote;
