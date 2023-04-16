import React from "react";

import { Link } from "react-router-dom";

// import Timer from "../../components/Common/Timer";
// import "../../styles/core/_productCard.scss";

const Card = (props) => {
  const { image, description, price, sale, ratings, brand } = props;

  console.log(props.dish);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);

  console.log(image);

  var res = props.rest;

  var cusines = res.cusines;










  return (
    <div>
      <Link to={``}>
        <div className="product-card">
          <div className="product-tumb">
            <img src={image} alt="" />
          </div>
          <div className="product-details">
            <h4>
              <a href="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                in .Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </a>
            </h4>
            <div className="product-bottom-details">
              <div className="row1">
                <div className="product-price">
                  <small>$96.00</small>$230.99 &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className="reviews">
                  <ul className="stars">
                    <li>
                      5 <i className="fa fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row2">
                <div className="product-links">
                  <div className="brand">
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By
                      - Some Brand
                    </p>
                  </div>
                  <div className="brand">
                    <p>Category/subcategory</p>
                  </div>
                </div>
              </div>
              <div className="row3">
                {/* <Timer expiryTimestamp={time} /> */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
