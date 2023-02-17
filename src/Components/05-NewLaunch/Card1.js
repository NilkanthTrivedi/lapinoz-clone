import React from "react";

import styled from "styled-components";

export default function Card1(props) {
    const styleOne = {
        background:
            "linear-gradient(50deg,rgba(160, 216, 186,1), rgba(63, 147, 102,1))",
    };
    const styleTwo = {
        background:
            "linear-gradient(50deg,rgba(254, 163, 158,1), rgba(235, 95, 88,1))",
    };
    const styleThree = {
        background:
            "linear-gradient(50deg,rgba(238, 230, 199,1), rgba(241, 220, 131,1))",
    };
    return (
        <>
            <MyCard className="my-5">
                <div className="x">
                    <h3>{props.Location}</h3>
                    <p>{props.city}</p>
                </div>
                <Sticker style={styleOne}>
                    <i class="fa-solid fa-phone"></i>
                    <img src="./Images/android-chrome-192x192.png" alt="" />
                    <h6>La Pino'z Pizza</h6>
                </Sticker>
            </MyCard>
        </>
    );
}

const MyCard = styled.div`
    width: 320px;
    height: 220px;
    background: white;
    box-shadow: -1px -1px 4px gray;

    border-radius: 20px;
    overflow: hidden;
    .x {
        width: 100%;
        height: 100px;
        padding-top: 15px;
        padding-left: 15px;
        h3 {
            color: rgb(63, 147, 102);
            margin: 0;
            padding: 0;
        }
        p {
            color: rgb(63, 147, 102);
        }
    }
`;

const Sticker = styled.div`
    width: 100%;
    height: 120px;
    background: gray;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    position: relative;
    padding: 20px 30px;

    i {
        position: absolute;
        top: -15%;
        right: 12%;
        background: white;
        padding: 10px;
        border-radius: 50%;
    }
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    h6 {
        color: white;
        margin-top: 15px;
        font-size: 18px;
        word-spacing: 1.5px;
        letter-spacing: 1px;
    }
`;

// const Phone = styled.div`
//     width: 40px;
//     height: 40px;
//     background-color: white;
//     border-radius: 50%;
//     text-align: center;
//     color: black;
//     line-height: 40px;
//     box-shadow: -2px -2px solid black;
// `;
