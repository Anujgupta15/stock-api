import React, { useState, useEffect } from "react";
import "./homepage.css";
import Detail from "../detail/detail.js";

const Homepage = ({ setLoginUser }) => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    fetch(`/NSE`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        // console.log(actualData);
        setResults(actualData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="homepage">
      <Detail results={results} />
    </div>
  );
};

export default Homepage;
