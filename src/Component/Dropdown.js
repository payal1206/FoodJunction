import "../styles.css";
import axios from "axios";
import { useId, useState } from "react";

const Dropdown = ({ data }) => {
  // console.log("hheloo", data.length);
  return (
    <div id="dropdown">
      {data.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "15px"
          }}
        >
          <p>No matching cusine</p>
        </div>
      ) : (
        <div>
          {data.map((d, id) => {
            return (
              <div id="food-search-data">
                <div id="food-item">
                  <img src={d.imgdata} />
                  <div id="food-details">
                    <p>
                      <b>Price</b> &nbsp; {d.price}
                      <p>
                        <b>Resturant</b> &nbsp; {d.address}
                      </p>
                    </p>
                    <p>
                      <b>Rating</b> &nbsp; {d.rating}/5
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Dropdown;
