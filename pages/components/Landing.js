/* import React, { useEffect, useState } from "react";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const slides = [
    {
        url: "../../public/slide1.jpg",
        title: "candle1",
    },
    {
        url: "../../public/slide2.jpg",
        title: "candle2",
    },
];

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

const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate (0, -50%)",
    left: "30px",
    fontSize: "40px",
    color: "#fff",
    zIndex: "1",
    cursor: "pointer",
};
const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate (0, -50%)",
    right: "30px",
    fontSize: "40px",
    color: "#fff",
    zIndex: "1",
    cursor: "pointer",
};

const Landing = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex === slides.length - 1) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(currentIndex + 1);
            }
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currentIndex, slides.length]);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    return (
        <section>
            <div style={sliderStyles} className="sliderStyles">
                <div style={leftArrowStyles} onClick={goToPrevious}>
                    <AiOutlineArrowLeft />
                </div>
                <div style={rightArrowStyles} onClick={goToNext}>
                    <AiOutlineArrowRight />
                </div>
                <a href="/google.com">
                    <div style={slideStylesWidthBackground}>
                        <h1>click here</h1>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Landing;  */
