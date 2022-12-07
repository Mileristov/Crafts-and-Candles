import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="about-wrap">
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
                className="left-about-container"
            >
                <h1> About Crafts and Candles </h1>
                <p>
                    Crafts and Candles is the result of our journey to create a
                    premium quality candle experience.
                </p>
                <p>
                    To go beyond just pouring candles and create a complete
                    candle experience, from the anticipation of unpacking to the
                    aesthetics of the candle itself, and finally the pleasure of
                    the clean burning experience.
                </p>
                <p>
                    Every candle we create, from the humble pillar to the
                    tallest cone, is the result of this design philosophy.
                </p>
                <p>
                    We design modern sculptural candles and homewares, founded
                    on the principles of minimalism clean geometric lines,
                    devoid of clutter and decoration, relying on the material to
                    form the art itself.
                </p>
            </motion.div>
            <div className="right-about-container">
                <video
                    width={"100%"}
                    height="auto"
                    autoPlay
                    loop
                    playsInline
                    muted
                >
                    <source src="video1.mp4"></source>
                </video>
            </div>
        </div>
    );
};

export default About;
