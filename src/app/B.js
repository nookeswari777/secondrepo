"use client"
import React from "react";
import {appStore} from "./store";
export const B = () => {
    const [location,setlocation]=React.useState("");
   const fnsubmit=()=>{
    //pass  loc to reducer
        appStore.dispatch({type:"LOCATION_UPDATE",payload:location})
   };
  return (
<div>
    <h1>B</h1>
        <p>Location:<input onChange={(eve)=>setlocation(eve.target.value)}/></p>
        <p><button onClick={fnsubmit}>Submit</button></p>
    </div>
  )
}
