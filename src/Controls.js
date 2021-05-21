import React from 'react';
import {useDispatch} from "react-redux";
import {decrement, increment} from "./actions";

const Controls = () => {
    const dispatch = useDispatch();


    const incrementFn = () => {
        dispatch(increment())
    }

    const decrementFn = () => {
        dispatch(decrement())
    }

    return (
        <div className={"controls-box"}>
            <button className={"btn plus-btn"} onClick={incrementFn}>+</button>
            <button className={"btn minus-btn"} onClick={decrementFn}>-</button>
        </div>
    );
};

export default Controls;