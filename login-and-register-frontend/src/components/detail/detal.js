import React, { useState, useEffect } from "react";
import "./detail.css";

import "../../../node_modules/react-linechart/dist/styles.css";
const Detal = (props) => {
  const [company, setCompany] = useState("NSE");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setCompany(e.target.value);
  };
  const getdata = (company) => {
    fetch(`/` + company)
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
  useEffect(() => {
    setResults(props.results);
  }, [props.results]);
  useEffect(() => {
    getdata(company);
  }, [company]);
  // useEffect(() => {
  // const arr = [{}];
  // results.map((item, index) => {
  //   arr.push({ x: item.Date, y: item.Volume });
  // });
  // }, [results]);

  return (
    <div className="MainDiv">
      <div className="dropdown">
        <select name="com-names" id="com-names" onChange={handleChange}>
          <option value="NSE">NSE</option>
          <option value="ASHOKLEY">ASHOKLEY</option>
          <option value="BSE">BSE</option>
          <option value="CIPLA">CIPLA</option>
          <option value="EICHERMOT">EICHERMOT</option>
          <option value="RELIANCE">RELIANCE</option>
          <option value="TATASTEEL">TATASTEEL</option>
        </select>
      </div>

      <div className="Market">Market</div>
      <div className="Para">Browse stocks that are always available</div>

      <div>
        <h1>{results[0] ? results[1234].Close : "Fetching"}</h1>
      </div>
      <div>
        {results[0]
          ? results[1234].Close - results[1234].Adj_Close
          : "Fetching"}
      </div>
      <div>
        <h3>12/01/2023</h3>
      </div>
      <div className="Box">
        <div>
          <div className="boxes">
            {/* <i class="fa fa-inverse fa-apple"></i> */}
            <div>Open</div>
            <div>{results[0] ? results[1234].Open : "Error"}</div>
          </div>
          <div className="boxes">
            {/* <i class="fa fa-inverse fa-facebook"></i> */}
            <div>Previous Close</div>
            <div>{results[0] ? results[1234].Adj_Close : "Error"}</div>
          </div>
          <div className="boxes">
            {/* <i class="fa fa-inverse fa-amazon"></i> */}
            <div>Day High</div>
            <div>{results[0] ? results[1234].High : "Error"}</div>
          </div>
        </div>
        <div>
          <div className="boxes">
            {/* <i class="fa fa-inverse fa-twitter"></i> */}
            <div>Day Low</div>
            <div>{results[0] ? results[1234].Low : "Error"}</div>
          </div>
          <div className="boxes">
            {/* <i class="fa fa-inverse fa-paypal"></i> */}
            <div>52 Week High</div>
            <div>{results[0] ? results[1234].Open : "Error"}</div>
          </div>
          <div className="boxes">
            {/* <i class="fa fa-inverse fa-google"></i> */}
            <div>52 Week Low</div>
            <div>{results[0] ? results[1234].Close : "Error"}</div>
          </div>
        </div>
      </div>
      {/* <div>
        <LineChart width={600} height={300} data={data} />
      </div> */}
    </div>
  );
};

export default Detal;
