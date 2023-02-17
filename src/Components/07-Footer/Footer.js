import React from "react";
import styled from "styled-components";

export default function Footer() {
    return (
        <>
            <Finish>
                <div className="container-fluid">
                    <div className="row py-4">
                        <div className="col-lg-4">
                            <ul>
                                <li>
                                    <i className="fa-regular fa-lightbulb"></i>
                                    <b> Useful Links</b>
                                </li>
                                <li className="mt-3">
                                    <a href=""> Refund Policy</a>
                                </li>
                                <li className="mt-3">
                                    <a href=""> Terms & Conditions</a>
                                </li>
                                <li className="mt-3">
                                    <a href=""> Privecy Policy</a>
                                </li>
                                <li className="mt-3">
                                    <a href=""> Promo Codes</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 Bill">
                            <h6>
                                <i className="fa-solid fa-receipt"></i>
                                <b> Payments Methods</b>
                            </h6>
                            <ul>
                                <li>
                                    <a href="">
                                        <img
                                            src="./Images/cash-svg.svg"
                                            alt=""
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img
                                            src="./Images/visa-svg.svg"
                                            alt=""
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img
                                            src="./Images/gpay-svg.svg"
                                            alt=""
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img
                                            src="./Images/paytm-svg.svg"
                                            alt=""
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img
                                            src="./Images/mastercard-svg.svg"
                                            alt=""
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 ps-5">
                            <h6>
                                <b>@ Connect With Us</b>
                            </h6>
                            <div className="socialcards">
                                <div className="socialcard">
                                    <a href="">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                </div>
                                <div className="socialcard">
                                    <a href="">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="socialcard">
                                    <a href="">
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>
                                </div>
                                <div className="socialcard">
                                    <a href="">
                                        <i className="fa-brands fa-pinterest-p"></i>
                                    </a>
                                </div>
                                <div className="socialcard">
                                    <a href="">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="mail mt-5">
                                <p>
                                    <i className="fa-sharp fa-solid fa-envelope d-inline"></i>
                                    &nbsp;
                                    copenhagenhospitalityandretail@yahoo.com
                                    <br />
                                    <i className="fa-sharp fa-solid fa-phone mt-3"></i>
                                    <span> +91 01762509231</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="foot">
                        <p>
                            Made with Love in India by uEngage
                            <span>Copyright. All Rights Reserved</span>
                        </p>
                    </div>
                </div>
            </Finish>
        </>
    );
}

const Finish = styled.div`
    background: #00572d;
    color: white;
    padding: 20px 100px;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        padding-left: 100px;

        li a {
            text-decoration: none;
            color: white;
        }
    }

    .Bill {
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;

            li a img {
                width: 50px;
                height: 30px;
                border-radius: 8px;
                margin-right: 5px;
                color: white;
            }
        }
    }

    .socialcards {
        display: flex;

        .socialcard {
            width: 40px;
            height: 40px;
            margin-top: 8px;
            border-radius: 50%;
            border: 2px solid white;
            text-align: center;
            line-height: 35px;
            margin-right: 10px;

            &:hover {
                background: white;
                cursor: pointer;
            }

            a {
                color: white;
                padding: 10px;
                font-size: 14px;

                &:hover {
                    color: #00572d;
                    cursor: pointer;
                }
            }
        }
    }
    .foot {
        width: 100%;
        height: auto;
        text-align: center;
        border-top: 1px solid white;
        padding-top: 20px;

        span {
            margin-left: 100px;
        }
    }
`;
