import React from "react";
import { client } from "../lib/client";
import Headerbanner from "./components/Headerbanner";
import Instagram from "./components/Instagram";
import Product from "./components/Product";

const index = ({ products, bannerData }) => {
    return (
        <>
            {/*  {
                <div className="head-ing">
                    <h1>The candle shop</h1>
                </div>
            }     */}

            <Headerbanner headerBanner={bannerData} />

            <div className="container">
                {products?.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </div>

            <Instagram />
        </>
    );
};

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
        props: { products, bannerData },
    };
};

export default index;
