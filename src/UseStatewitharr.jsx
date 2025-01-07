import React, { useState } from 'react'

const UseStatewitharr = () => {
    const [values,setvalues]=useState([])
    const AddValue=()=>{

        setvalues([
            ...values,{
                id:values.length,
                value:"Abuzar"
            }
        ])
    }
  return (
    <>
      
    
        <ul>

 {values.map((cval,index)=>(
<li key={index}>
my name is {cval.value}
</li>
))}
        </ul>
      <button onClick={AddValue}>Add</button>
    </>
  )
}

export default UseStatewitharr
