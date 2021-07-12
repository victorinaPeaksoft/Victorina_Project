import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Result = () => {
  const state = useSelector((state) => state.currentUserAnswer);

  const sanguine = state.sanguine.length;
  const melancholic = state.melancholic.length;
  const phlegmatic = state.phlegmatic.length;
  const choleric = state.choleric.length;

  return (
    <div>
      <h3>sanguine: {(100 * Math.floor(sanguine)) / 5}% </h3>
      <h3> melancholic : {(100 * Math.floor(melancholic)) / 5}%</h3>
      <h3> phlegmatic :{(100 * Math.floor(phlegmatic)) / 5}%</h3>
      <h3> choleric :{(100 * Math.floor(choleric)) / 5}%</h3>

      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
};
