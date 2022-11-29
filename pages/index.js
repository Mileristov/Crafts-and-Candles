import React from "react";
import { client } from "../lib/client";
import Headerbanner from "../component/Headerbanner";
import Instagram from "../component/Instagram";
import Product from "../component/Product";

const index = ({ products, bannerData }) => {
    return (
        <>
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
