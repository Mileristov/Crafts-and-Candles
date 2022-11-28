import React from "react";

const Candles = () => {
    return (
        <div className="about-wrap">
            <div className="left-about-video">
                <video
                    width={"100%"}
                    height="auto"
                    autoPlay
                    loop
                    playsInline
                    muted
                >
                    <source src="video.mp4" type="video/mp4"></source>
                </video>
            </div>
            <div className="right-about-video">
                <h1>Our Packaging</h1>
                <p>
                    With so much plastic ending up in our oceans, we've decided
                    to be smarter about our packaging and have chosen a more
                    considered route; we make our packaging entirely out of
                    recycled paper, from the box to the protective buffers
                    inside it. And the candles are individually wrapped in
                    tissue paper, not plastic. So we can ship our candles
                    undamaged, without damaging the world.
                </p>
            </div>
        </div>
    );
};

export default Candles;
