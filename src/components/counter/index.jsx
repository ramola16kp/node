import React, {} from "react";
import { useSelector,useDispatch } from "react-redux";
import {ADD, SUB} from './action'
const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.CountReducer.count);
    return (
        <>
        <p>count {count}</p>
            <button onClick={()=> dispatch(ADD(5))}>Addition</button>
            <button onClick={()=> dispatch(SUB(5))}>Substraction</button>
        </>
    )
}

export default Counter;