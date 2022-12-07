/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

const Craft = () => {
    return (
        <div className="craft-wrap">
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
                    duration: 1.5,
                }}
                className="craft-text"
            >
                <h1>The art of candle makings</h1>
                <p>
                    We love lighting a candle after a long day of work. We love
                    how it calms us down. And we love the ritual of lighting a
                    candle to transition between work and home, slowing down by
                    candle light. What we don&apos;t love so much is a smoking
                    candle. Or a candle that drips. Nor candles that burn
                    unevenly. This is why we started Arts and Candles .
                </p>
            </motion.div>
            <div className="craft-text">
                <h1>THE PERFECT CANDLE CAN&apos;T BE RUSHED.</h1>
                <p>
                    The art of candle making emerged almost 5000 years ago. By
                    the 13th century, candle making had become a guild craft in
                    Europe. This art involves techniques and skills that have
                    been passed down through the ages. Today, anyone can make a
                    candle quickly by cutting corners with modern technology,
                    but to make a candle of the highest quality a clean,
                    smoke-free and calm burn, minimal drip, and an ability to
                    maintain shape this needs to be done by true experts.
                </p>
            </div>

            <div className="craft-img">
                <div>
                    <img src="/4v4.jpg" alt="img" />
                </div>
                <div>
                    <img src="/2v2.jpg" alt="img" />
                </div>
            </div>
            <div className="craft-text">
                <p>
                    These days, anyone can make a candle quickly by cutting
                    corners, but to make a candle of the highest quality a
                    clean, smoke-free and calm burn, minimal drip, and an
                    ability to maintain shape that needs to be done by true
                    experts.
                </p>
                <p>
                    All our candles are designed and developed in Germany, and
                    then hand-poured to perfection by master candlemakers. Our
                    products are handmade by craftspeople in Germany. Modern
                    craftsmanship is all about dedication and skill. Time does
                    not dictate the process. Quality does.
                </p>
            </div>
            <div className="full-img">
                <div>
                    <img src="/1v1.jpg" alt="img" />
                </div>
            </div>
        </div>
    );
};

export default Craft;
