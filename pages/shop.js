import React from "react";
import Product from "../component/Product";
import { client } from "../lib/client";
const Shop = ({ products }) => {
    return (
        <>
            <div className="container">
                {products?.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
        </>
    );
};

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    return {
        props: { products },
    };
};
export default Shop;
