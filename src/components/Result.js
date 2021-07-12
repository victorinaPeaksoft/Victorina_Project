import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Result = (props) => {
  const result = useSelector((state) => state);
  return (
    <div>
      <div className="container">
        <h1>Result</h1>
        <h3>
          Melanholik {(100 / (result.data.length - 1)) * result.melanholik} %
        </h3>
        <h3>Sangvinnik: {result.sangvinnik}</h3>
        <h3>Holerik: {result.holerik}</h3>
        <h3>Flegmstik: {result.fregmatik}</h3>
      </div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/questions">
        <button>Back to Questions</button>
      </Link>
    </div>
  );
};

export default Result;
