// fist add the new root element in the index.js file 

import React, { useState } from 'react'
import reactDom from 'react-dom'

const Portals = () => {
  const [modal,setmodal]=useState('false')
    return (
    <div>
      <button onClick={()=>{
        setmodal(!modal)
      }}>
        {modal?"Hide":"Show"}
      </button>
      <h1>
        {modal && <Modal/>}
      </h1>
    </div>
  )
}

export default Portals

const Modal=()=>{
return reactDom.createPortal(<h1> Hellow this is modal </h1>,document.getElementById('modal-root'))

}
