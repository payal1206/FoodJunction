import React from "react";
import { useEffect } from "react";
// import Card from "react-bootstrap/Card";
// import firebase from "firebase/compat";
import Footer from "./footer";

import { getStorage, ref, getDownloadURL } from "firebase/storage";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles.css";
import { redirect } from "react-router-dom";
import { getFirestore, getDocs } from "firebase/firestore";
import { useId, useState } from "react";
import edit from "./editbtn.png";
import axios from "axios";
import { db } from "../firebaseconfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { storage } from "../firebaseconfig";
// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

async function addRest(db, resInfo) {
  try {
    const docRef = await addDoc(collection(db, "resturants"), resInfo);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const H = ({ setcount, setResInfo, resInfo }) => {
  const [image, setImage] = useState("");
  const [input, setInput] = useState({
    name: "",
    price: "",
    rating: "",
    image: ""
  });

  const upload = () => {
    if (image == null) return;
    const imageref = storage
      .ref("/images/" + image.name)
      .put(image)
      .on("state_changed", console.log("uploaded"), "success");
    console.log("kjhgfd", imageref);
    imageref();
  };

  const clickAddHandle = (e) => {
    e.preventDefault();
    upload();
    setResInfo({
      ...resInfo,
      cusine_details: [...resInfo.cusine_details, input]
    });
    setcount(0);
    document.getElementById(
      "cuisine-details"
    ).innerHTML += `<div id ='detail'><p><b>Name</b>&nbsp;${input.name}</p><p><b>Price</b>&nbsp;${input.price}</p><p><b>Rating</b>&nbsp;${input.rating}</p> </div>`;
  };

  return (
    <div id="detail">
      <input
        value={input.name}
        type="text"
        placeholder="Cuisine name"
        onInput={(e) => {
          setInput({ ...input, name: e.target.value });
        }}
      ></input>
      <input
        value={input.price}
        type="text"
        placeholder="Cuisine Price"
        onInput={(e) => {
          setInput({ ...input, price: e.target.value });
        }}
      ></input>
      <input
        value={input.rating}
        type="Number"
        placeholder="Cuisine Rating"
        onInput={(e) => {
          setInput({ ...input, rating: e.target.value });
        }}
      />
      <input
        type="file"
        id="myFile"
        name="filename"
        accept=".png, .jpg, .jpeg"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
        onInput={(e) => {
          setInput({ ...input, image: e.target.files[0].name });
        }}
      />
      <Button variant="contained" onClick={clickAddHandle}>
        Add
      </Button>
    </div>
  );
};

const AddRestaurant = (props) => {
  const navigate = useNavigate();
  var [count, setcount] = useState(0);
  var [resInfo, setResInfo] = useState({
    rname: "",
    raddress: "",
    rnumber: "",
    cusine_details: []
  });

  const [files, setFiles] = useState([]);

  // var storageRef = firebase.storage().ref("images");

  // const storage = getStorage();
  // getDownloadURL(ref(storage, "images/fooood.png"))
  //   .then((url) => {
  //     // `url` is the download URL for 'images/stars.jpg'

  //     // This can be downloaded directly:
  //     const xhr = new XMLHttpRequest();
  //     xhr.responseType = "blob";
  //     xhr.onload = (event) => {
  //       const blob = xhr.response;
  //     };
  //     xhr.open("GET", url);
  //     xhr.send();

  //     console.log("uyfy885865846746", url);

  //     // Or inserted into an <img> element
  //     const img = document.getElementById("myimg");
  //     img.setAttribute("src", url);
  //   })
  //   .catch((error) => {
  //     // Handle any errors
  //   });

  // useEffect(() => {
  //   console.log("1st render");
  //   const fetchImages = async () => {
  //     let result = await storageRef.child("images").listAll();
  //     let urlPromises = result.items.map((imageRef) =>
  //       imageRef.getDownloadURL()
  //     );

  //     return Promise.all(urlPromises);
  //   };

  //   const loadImages = async () => {
  //     const urls = await fetchImages();
  //     setFiles(urls);
  //   };
  //   loadImages();
  // }, []);

  // console.log("jhvkhvhj", files);

  const submitDetail = (e) => {
    e.preventDefault();
    var x = addRest(db, resInfo);
    console.log("resInfo", x);
    navigate("/");
    // return redirect("/");
    // console.log(" jhgf", props);
    // axios
    //   .get("https://foodhub-igwh.onrender.com")
    //   .then((response) => response.data)
    //   .then((data) => {
    //     console.log(data);
    //   });
  };

  return (
    <div class="form">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" }
        }}
        noValidate
        autoComplete="off"
      >
        <h4> Restaurant details</h4>
        <TextField
          id="outlined-search"
          value={resInfo.rname}
          label="Restaurant Name"
          type="string"
          onChange={(e) => {
            console.log(e.target.value);
            setResInfo({ ...resInfo, rname: e.target.value });
          }}
        />
        <TextField
          id="outlined-search"
          label="Restaurant Complete Address"
          value={resInfo.raddress}
          onChange={(e) => {
            setResInfo({ ...resInfo, raddress: e.target.value });
          }}
        />
        <TextField
          id="outlined-search"
          label="Mobile number at Restaurant"
          value={resInfo.rnumber}
          onChange={(e) => {
            setResInfo({ ...resInfo, rnumber: e.target.value });
          }}
        />
        <h4> Cuisine Details</h4>
        <div id="cuisine-details"></div>
        {count === 1 && (
          <div id="cuisine-detail">
            {
              <H
                setResInfo={setResInfo}
                resInfo={resInfo}
                setcount={setcount}
              />
            }
          </div>
        )}
        <Button
          onClick={() => {
            setcount(1);
          }}
          variant="contained"
        >
          Add New Cuisine
        </Button>
      </Box>
      <div style={{ display: "flex", justifyContent: "center" }}>
        &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="contained" onClick={submitDetail}>
          Submit Cuisine Details
        </Button>
      </div>
      <footer />
    </div>
  );
};

export default AddRestaurant;
