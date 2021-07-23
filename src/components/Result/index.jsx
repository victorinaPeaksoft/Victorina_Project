import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Result.less";

export const Result = () => {
  const result = useSelector((state) => state.currentUserAnswer);
  const data = useSelector((state) => state.data);

  const sanguine = result.sanguine.length;
  const melancholic = result.melancholic.length;
  const phlegmatic = result.phlegmatic.length;
  const choleric = result.choleric.length;

  const melan = Math.floor((melancholic * 100) / data.length);
  const sang = Math.floor((sanguine * 100) / data.length);
  const holeric = Math.floor((phlegmatic * 100) / data.length);
  const fleg = Math.floor((choleric * 100) / data.length);

  return (
    <div className="result_main">
      <div className="result_container">
        <h1>Ваша результат</h1>
        <Button variant="contained" color="primary" disableElevation>
          Меланхолик:{melan}%
        </Button>
        <Button variant="contained" color="primary" disableElevation>
          Сангвник : {sang} %
        </Button>
        <Button variant="contained" color="primary" disableElevation>
          Холерик: {holeric}%
        </Button>
        <Button variant="contained" color="primary" disableElevation>
          Флегматик : {fleg}%
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
    </div>
  );
};
