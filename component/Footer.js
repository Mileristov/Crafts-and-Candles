import React from "react";

import {
    FaFacebook,
    FaLinkedin,
    FaMailBulk,
    FaPhone,
    FaSearchLocation,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <h4>
                            <FaSearchLocation
                                size={20}
                                style={{
                                    color: "#ffffff",
                                    marginRight: "2rem",
                                }}
                            />
                            Logo
                        </h4>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone
                                size={20}
                                style={{
                                    color: "#ffffff",
                                    marginRight: "2rem",
                                }}
                            />
                            Phone number:
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk
                                size={20}
                                style={{
                                    color: "#ffffff",
                                    marginRight: "2rem",
                                }}
                            />
                            Thecandleshop@at.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the event</h4>
                    <p>I dont know what to write here</p>
                    <div className="social">
                        <FaFacebook
                            size={30}
                            style={{
                                color: "#ffffff",
                                marginRight: "1rem",
                            }}
                        />
                        <FaTwitter
                            size={30}
                            style={{
                                color: "#ffffff",
                                marginRight: "1rem",
                            }}
                        />
                        <FaLinkedin
                            size={30}
                            style={{
                                color: "#ffffff",
                                marginRight: "1rem",
                            }}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
