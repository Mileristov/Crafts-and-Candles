/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";
import { client, urlFor } from "../../lib/client";

import { useStateContext } from "../../context/StateContext";
import Product from "../components/Product";

const ProductDetails = ({ product, products }) => {
    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
    const [isDesktop, setDesktop] = useState(false);

    const handleBuyNow = () => {
        onAdd(product, qty);

        setShowCart(true);
    };

    useEffect(() => {
        if (window.innerWidth > 850) {
            setDesktop(true);
        } else {
            setDesktop(false);
        }

        const updateMedia = () => {
            if (window.innerWidth > 850) {
                setDesktop(true);
            } else {
                setDesktop(false);
            }
        };
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, []);

    return (
        <div className="wrap">
            <div className="product-container">
                {isDesktop
                    ? image?.map((item, i) => (
                          <div
                              className="img-wrap-one small-image-container"
                              key={i}
                          >
                              <img src={urlFor(item)} />
                          </div>
                      ))
                    : image?.map((item, i) => (
                          <div
                              className="img-wrap-one small-image-container"
                              key={i}
                          >
                              <img
                                  src={urlFor(item)}
                                  className={
                                      i === index
                                          ? "small-image selected-image"
                                          : "small-image"
                                  }
                                  onClick={() => setIndex(i)}
                              />
                          </div>
                      ))}
            </div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="product-detail"
            >
                <h1 className="margin">{name}</h1>
                <h5 className="margin-one">Details </h5>
                <p className="margin-one">{details}</p>
                <p className="price margin-one">${price}</p>
                <div className="quantity margin-one">
                    <h5 className="margin-one">Quantity:</h5>
                    <p className="quantity-desc margin-one">
                        <span className="minus" onClick={decQty}>
                            <AiOutlineMinus />
                        </span>
                        <span className="num">{qty}</span>
                        <span className="plus" onClick={incQty}>
                            <AiOutlinePlus />
                        </span>
                    </p>
                </div>
                <div className="buttons">
                    <button
                        type="button"
                        className="add-cart"
                        onClick={() => onAdd(product, qty)}
                    >
                        Add to Cart
                    </button>
                    <button
                        type="button"
                        className="buy-now"
                        onClick={handleBuyNow}
                    >
                        Buy Now
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current,
        },
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    console.log(product);

    return {
        props: { products, product },
    };
};

export default ProductDetails;
