import React from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actionTypes from "../components/store/actions";

function Main(props) {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const addOne = (e) => {
    dispatch({
      type: actionTypes.ADD_ONE,
      payload: parseInt(e.target.value),
    });
  };
  const removeOne = (e) => {
    dispatch({
      type: actionTypes.REMOVE_ONE,
      payload: parseInt(e.target.value),
    });
  };
  const addFive = (e) => {
    dispatch({
      type: actionTypes.ADD_FIVE,
      payload: parseInt(e.target.value),
    });
  };
  const removeFive = (e) => {
    dispatch({
      type: actionTypes.REMOVE_FIVE,
      payload: parseInt(e.target.value),
    });
  };
  const reset = (e) => {
    dispatch({
      type: actionTypes.RESET,
      payload: parseInt(e.target.value),
    });
  };

  return (
    <div>
      <main>
        <div className="counter">
          <p id="counter">{counter}</p>
        </div>

        <div className="buttonContainer">
          <button value="5" onClick={addFive}>
            Add Five
          </button>
          <button value="1" onClick={addOne}>
            Add One
          </button>
          <button value="1" onClick={removeOne}>
            Remove One
          </button>
          <button value="5" onClick={removeFive}>
            Remove Five
          </button>
        </div>
        <button value="0" onClick={reset}>
          Reset
        </button>
      </main>
    </div>
  );
}

export default Main;
