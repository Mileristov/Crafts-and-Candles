/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { urlFor } from "../../lib/client";
import { motion } from "framer-motion";
import Link from "next/link";

const sliderStyles = {
    height: "100%",
    position: "relative",
};

const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
};

const Headerbanner = ({ headerBanner }) => {
    const [currIndex, setCurrIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currIndex === headerBanner.length - 1) {
                setCurrIndex(0);
            } else {
                setCurrIndex(currIndex + 1);
            }
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currIndex]);

    let picUrl = urlFor(headerBanner[currIndex].image.asset._ref);
    console.log("wads", picUrl);

    return (
        <section>
            <div style={sliderStyles} className="sliderstyles">
                <Link
                    href="/craft
                "
                >
                    <div style={slideStyles}>
                        <img
                            src={picUrl}
                            className="slidestyle"
                            alt="candle lit"
                        />
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
                                duration: 1,
                            }}
                            className="div-slider"
                        >
                            <h1> {headerBanner[currIndex].largeText1}</h1>
                            <p>{headerBanner[currIndex].desc}</p>
                            <button type="button" className="btn-slider">
                                {headerBanner[currIndex].buttonText}
                            </button>
                        </motion.div>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default Headerbanner;
