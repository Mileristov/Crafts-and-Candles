import "../styles/globals.css";
import React from "react";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
import Layout from "../component/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <StateContext>
            <Layout>
                <Toaster />
                <Component {...pageProps} />
            </Layout>
        </StateContext>
    );
}

export default MyApp;
