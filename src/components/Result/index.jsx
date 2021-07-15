import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
// import Button from "@material-ui/core/Button";

import "./Result.less";

const Result = (props) => {
  const result = useSelector((state) => state.currentUserAnswer);
  const data = useSelector((state) => state.data);

  const sanguine = result.sanguine.length;
  const melancholic = result.melancholic.length;
  const phlegmatic = result.phlegmatic.length;
  const choleric = result.choleric.length;

  return (
    <Container>
      <div className="result_main">
        <div className="result_container">
          <h1>Ваша результат</h1>
          <Button variant="contained" color="primary" disableElevation>
            Меланхолик:{Math.floor((melancholic * 100) / data.length)}%
          </Button>
          <Button variant="contained" color="primary" disableElevation>
            Сангвник : {Math.floor((sanguine * 100) / data.length)} %
          </Button>
          <Button variant="contained" color="primary" disableElevation>
            Холерик: {Math.floor((phlegmatic * 100) / data.length)}%
          </Button>
          <Button variant="contained" color="primary" disableElevation>
            Флегматик : {Math.floor((choleric * 100) / data.length)}%
          </Button>
        </div>
        <Link to="/">
          <Button
            variant="contained"
            color="secondary"
            style={{ marginTop: "50px" }}
          >
            Home
          </Button>
        </Link>
        {/* <Link to="/questions">
        <Button variant="contained" color="secondary">
          Back to Questions
        </Button>
      </Link> */}
      </div>
    </Container>
  );
};

export default Result;
