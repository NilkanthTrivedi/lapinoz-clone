import React, { Component } from "react";

class ReusableCard extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <img
                        src={this.props.img}
                        className="card-img-top img-fluid"
                        alt="..."
                        style={{
                            width: "500px",
                            height: "250px",
                            // borderRadius: "20px",
                        }}
                    />
                </div>
            </>
        );
    }
}

export default ReusableCard;
