import React from "react";
// import Card from "react-bootstrap/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles.css";
import Card from "./Card";
import firebase from "firebase/compat";
import { useState, useEffect } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const Cards = (props) => {
  const storage = getStorage();
  var arr = [];
  const [data, setData] = useState([]);
  const [img, setimg] = useState("");

  const db = firebase.firestore();
  // const collectionRef = db.collection("resturants");
  // Initialize Firebase

  // Get a reference to the collection
  var collectionRef = firebase.firestore().collection("resturants");

  // Define an empty array to store the data
  var dataArray = [];

  useEffect(() => {
    collectionRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        dataArray.push(doc.data());
      });
      console.log("dataArray", dataArray);
      setData(dataArray);
    });
  }, []);

  console.log("dataaaaa", data.length);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  // listItem();

  return (
    <div>
      <Carousel responsive={responsive}>
        {data.map((d) => {
          d.cusine_details.map(() => {
            console.log("67676");
            getDownloadURL(ref(storage, "images/fooood.png"))
              .then((url) => {
                console.log("112");
                // This can be downloaded directly:
                const xhr = new XMLHttpRequest();
                xhr.responseType = "blob";
                xhr.onload = (event) => {
                  const blob = xhr.response;
                };
                xhr.open("GET", url);
                xhr.send();

                console.log("uyfy885865846746", url);

                // setimg(url);

                // Or inserted into an <img> element
                // const img = document.getElementById("myimg");
                // img.setAttribute("src", url);
              })
              .catch((error) => {
                // Handle any errors
                console.log(error);
              });
          });
        })}
      </Carousel>
      {/* <button onClick={listItem}>List Item</button> */}
      {/* <button onClick={(imageRef) => getDownloadURL(imageRef)}>xxx</button> */}
    </div>
  );
};

export default Cards;
