import React, { useState } from 'react'

function Functional() {

const[name ,setName] =useState("");
const [fn ,setFn]= useState("");

function handlechange(e){
setFn(e.target.value)

}

function handlebtn(e){
    e.preventDefault()
    
}

  return (
    <div>
        how are you
        <input type ="text" placeholder='enter your n' value={fn} onChange={handlechange}/>
        
        <input type ="text" value={name} onChange={e => (setName(e.target.value))} placeholder='enter  your name'/>
        <button onClick={handlebtn} >clickme</button>
    <p></p>
    <p></p>

    </div>
  )
}

export default Functional;