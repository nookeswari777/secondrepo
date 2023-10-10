"use client"
import React from "react";
import { appStore } from "./store";
export const A = () => {
    const [name,setname]=React.useState("")
    const fnsubmit=()=>{
      //pass name to reducer
        appStore.dispatch({type:"NAME_UPDATE", payload:name})
    };
  return (
    <div><h1>A</h1>
        <p>

        Name: <input onChange={(eve)=>setname(eve.target.value)}/></p>
        <p><button onClick={fnsubmit}>Submit</button></p>
    </div>
  );
      };
