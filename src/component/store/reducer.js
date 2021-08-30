/* eslint-disable no-lone-blocks */

import { useState } from "react";
import { act } from "react-dom/test-utils";

const object ={"id":0,"quatity":0}
const initialState = [object];
function BlockReducer(state = initialState, action, payload) {
  let isState=false;
  switch (action.type) {
    case "increment": {
    //   state.push(action.payload)
    //   console.log(action.payload);
    //   console.log(state);
    state.map((data)=>{
        if(data.id===action.payload.id)
        {
            data.quatity++;
            isState=true;
        }
    })
    if(isState===false)
    {
        const object ={"id":action.payload.id,"quatity":1}
        state.push(object)
    }

    console.log(state);
      return state;
      
    }
    case "decrement":{
    state.map((data)=>{
        if(data.id=== action.payload.id)
            data.quatity--;
    })
    console.log(state);
      return state };
    default:
      return state;
  }
}

export default BlockReducer;
