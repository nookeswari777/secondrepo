"use client"
import React from 'react';
import { connect } from 'react-redux'
 let C = (props) => {
  return (
    <div>
        <h1>C</h1>
        <h3>Name:{props.name}</h3>
        <h3>Location:{props.location}</h3>
    </div>
  );
};

const mapStateToprops=(state)=>{
  const {name,location}=state.appReducer
 return{
 name,location
 }
}
const mapDispatchToprops=(dispatch)=>{
return{dispatch}

}
C=connect(mapStateToprops,mapDispatchToprops)(C)
export default C;