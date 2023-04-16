import "../styles.css";
import axios from "axios";
import { useId, useState } from "react";
// import Cards from "./Cards";
import Dropdown from "./Dropdown";
import Header from "./Header";
import data from "./data";
import Cards from "./Cards";
import Footer from "./footer";

const Homepage = (props) => {
  const [input, setInput] = useState("");
  const [matchingFoodData, setFoodData] = useState([]);
  // console.log("hhhhhhhhhj", props);
  return (
    <div>
      <Header />
      <div className="header">
        <input
          id="search-food"
          placeholder="Search your Cuisine or Dish"
          value={input}
          onInput={(e) => {
            let found = 1;
            data.map((d) => {
              if (e.target.value === d.rname) {
                matchingFoodData.push(d);
                found = 0;
              }
              if (found === 1) {
                setFoodData([]);
              }
              setInput(e.target.value);
            });
          }}
        />
        <Dropdown data={matchingFoodData} />
      </div>
      <Cards />
      <Footer />
    </div>
  );
};
export default Homepage;
