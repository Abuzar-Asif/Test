import React, { useMemo, useState } from 'react'

const MemoHookprac = () => {
    const [count,setcount]=useState(0);
    const [input,setinput]=useState(0)
const expensivetask=(num)=>{
    console.log('inside the expensive function')
    for(let i=0;i<=1000000000;i++){}
    return num*2
}

let doubleValue=useMemo(()=>expensivetask(input),[input])

  return (
    <>
    <center>
      <button onClick={()=>{setcount(count+1)}}>
        Increment
      </button>
      <h1>
        {count}
      </h1>
      <input 
      type="text"
      value={input}
      onChange={(e)=>{setinput(e.target.value)}}
      
      />
      <h1>
        double value {doubleValue}
      </h1>
   </center>
    </>
  )
}

export default MemoHookprac
