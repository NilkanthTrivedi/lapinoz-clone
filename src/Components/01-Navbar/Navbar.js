import React from "react";
import styled from "styled-components";
import "./Navbar.css";

export default function Navbar() {
    return (
        <>
            <nav className="navbar container-fluid navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid Navi">
                    <Logo>
                        <img src="./Images/lapinoz-logo.png" alt="" />
                    </Logo>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse Menu my-3"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Order Online
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Store Locater
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Franchise Enquiry
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Our Story
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <Login>
                                    Login
                                    <i className="fa-solid fa-user-check"></i>
                                </Login>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

const Login = styled.button`
    padding: 8px 15px;
    background-color: #00572d;
    color: white;
    border-radius: 5px;
    border: none;
    font-weight: 600;

    i {
        font-size: 12px;
        margin-left: 5px;
    }
`;

const Logo = styled.a`
    margin-left: 150px;
    img {
        width: auto;
        max-width: 150px;
        max-height: 55px;
    }
`;
