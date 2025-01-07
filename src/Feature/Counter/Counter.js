import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { increment,decrement} from './CounterSlice';

const Countertoolkit = () => {
    const count=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();
 const inc=()=>{
    dispatch(increment());
 }
 const dec=()=>{
    dispatch(decrement());
 }
 
    return (
    <>
    <center>
      <button onClick={dec}> Increment </button>
      <p>
        {count}
      </p>
      <button onClick={inc}>Decrement </button>
      </center>
    </>
  )
}

export default Countertoolkit
