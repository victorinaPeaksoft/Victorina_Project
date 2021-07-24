import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";

import "./Result.less";
import { refresh, refresh_result } from "../../store/actions";
import { useDispatch } from "react-redux";

export const Result = () => {
  const result = useSelector((state) => state.victorina.currentUserAnswer);
  const data = useSelector((state) => state.translate.data.questions);
  const data2 = useSelector((state) => state.translate.data);

  const dispatch = useDispatch()

  const sanguine = result.sanguine.length;
  const melancholic = result.melancholic.length;
  const phlegmatic = result.phlegmatic.length
  const choleric = result.choleric.length;

  const melan = Math.floor((melancholic * 100) / data.length);
  const sang = Math.floor((sanguine * 100) / data.length);
  const holeric = Math.floor((phlegmatic * 100) / data.length);
  const fleg = Math.floor((choleric * 100) / data.length);

  const refreshResult = () => {
    dispatch(refresh())
    dispatch(refresh_result())
  }
  return (
    <Container>
      <div className="result_main">
        <div className="result_container">
          <h1>{data2.main}</h1>
          <Button variant="contained" color="primary" disableElevation>
            {data2.melancholic}:{melan}%
          </Button>
          <Button variant="contained" color="primary" disableElevation>
            {data2.sanguine} : {sang} %
          </Button>
          <Button variant="contained" color="primary" disableElevation>
            {data2.choleric}: {holeric}%
          </Button>
          <Button variant="contained" color="primary" disableElevation>
            {data2.phlegmatic} : {fleg}%
          </Button>
        </div>
        <Link to="/">
          <Button
            variant="contained"
            color="secondary"
            style={{ marginTop: "50px" }}
            onClick={() => refreshResult()}
          >
            {data2.address}
          </Button>
        </Link>
      </div>
    </Container>

  );
};
