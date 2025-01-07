import React, { useState } from 'react'

const HocPractice = () => {
  return (
    <>
{/* <Counter/> */}
<center>
<HOCgreen cmp={Counter}/>
<HOCred cmp={Counter}/>
<HOCblue cmp={Counter}/>
</center>
    </>
  )
}

export default HocPractice
const HOCred=(props)=>{
return(
    <h2 style={{backgroundColor:'red',width:'300px ' ,height:'300px'}}>
    < props.cmp/>
    </h2>
)
}
const HOCgreen=(props)=>{
    return(
        <h2 style={{backgroundColor:'green',width:'300px ' ,height:'300px'}}>
        < props.cmp/>
        </h2>
    )
    }

    const HOCblue=(props)=>{
        return(
            <h2 style={{backgroundColor:'blue',width:'300px ' ,height:'300px'}}>
            < props.cmp/>
            </h2>
        )
        }
        
const Counter=()=>{
    const [count,setcount]=useState(0)
    return(
        <>
        <h2>
            Counter
        </h2>
        <h2>
           count is : {count}
        </h2>
        <button onClick={()=>setcount(count+1)}>
            increment 
        </button>
        </>
    )
};