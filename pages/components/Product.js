import React from "react";
import Link from "next/link";
import { urlFor } from "../../lib/client";
import Image from "next/image";

const Product = ({ product: { image, name, slug, price } }) => {
    return (
        <div>
            <Link href={`/product/${slug.current}`}>
                <img src={urlFor(image && image[0])} alt="wa" />
                <h4>{name}</h4>
                <p>${price}</p>
            </Link>
        </div>
    );
};

export default Product;
