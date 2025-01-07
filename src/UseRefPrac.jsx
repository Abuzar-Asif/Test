import React, { useRef, useState } from 'react'

const UseRefPrac = () => {
  const refElement=useRef('')
const [inp,setInp]=useState([])
const handleChange=(e)=>{
setInp(e.target.value=e.target.name)
}  
return (
    <>
      
    <center>
      <h1>
        hellow to the use ref 
      </h1>
      <input onChange={handleChange} name='firstname' value={inp.value} type="'text'" />
      <button>
        Reset
      </button>
      <button>
        Handle field
      </button>
      <br />
<ul>
  {inp.map((cvalue,index)=>(
    <li key={index}>
{cvalue}
    </li>
    ))}
</ul>
    </center>

    </>
  )
}

export default UseRefPrac
