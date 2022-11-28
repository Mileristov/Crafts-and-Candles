/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { urlFor } from "../../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
    return (
        <div>
            <Link href={`/product/${slug.current}`}>
                <img src={urlFor(image && image[0])} alt="candles for sale" />
                <h4>{name}</h4>
                <p>${price}</p>
            </Link>
        </div>
    );
};

export default Product;
