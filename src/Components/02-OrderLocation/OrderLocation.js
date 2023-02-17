import React from "react";
import "./OrderLocation.css";

export default function OrderLocation() {
    return (
        <>
            <div
                id="carouselExampleDark"
                className="carousel carousel-dark slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div
                    // style={{
                    //     border: "1px solid yellow",
                    //     background: "#00000099",
                    //     height: "100vh",
                    //     width: "100vw",
                    //     position: "absolute",
                    //     zIndex: 100,
                    // }}
                    />
                    <div
                        className="carousel-item active"
                        data-bs-interval="10000"
                    >
                        <img
                            src="./Images/banner1.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="headers">
                                More Than 400+ Outlets <br />
                                <span> LIVE Accross India</span>
                            </h1>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img
                            src="./Images/banner2.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>
                                The Giant Pizza Slices <br />
                                <span>Now Available In Your City</span>
                            </h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="./Images/banner3.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>
                                La Pino'z Going International
                                <br />
                                <span>Across 6 Countries</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cover">
                <h1>Order Pizza Online In Your Area</h1>
                <div className="area_card">
                    <div className="dropdown">
                        <button
                            className="btn dropdown-toggle x1"
                            type="button"
                            id="dropdownMenu2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Select Your City
                            <i className="fa-solid fa-caret-down"></i>
                        </button>
                        <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenu2"
                        >
                            <li>
                                <button className="dropdown-item" type="button">
                                    Ahmedabad
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">
                                    Baroda
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">
                                    Gandhinagar
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">
                                    Rajkot
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">
                                    Morbi
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button
                            className="btn   dropdown-toggle x2"
                            type="button"
                            id="dropdownMenu2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Select Your Favourite Area
                            <i className="fa-solid fa-caret-down"></i>
                        </button>
                        <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenu2"
                        >
                            <li>
                                <button className="dropdown-item" type="button">
                                    CG Road
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">
                                    S-G Highway
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">
                                    Satallite
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <h3> Download The App For Seamless Experience</h3>
                <button
                    type="button"
                    className="btn btn-dark download rounded-pill"
                >
                    Download Now
                </button>
            </div>
        </>
    );
}
