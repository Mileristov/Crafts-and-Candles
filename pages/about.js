import React from "react";
import About from "./components/About";
import { client } from "../lib/client";
import Fans from "./components/Fans";
import Candles from "./components/Candles";

const about = () => {
    return (
        <>
            <About />
            <Fans />
            <Candles />
        </>
    );
};

export default about;
