import { init } from "@/init";

export const appReducer=(state=init,action)=>{
    switch(action.type){
    case 'NAME_UPDATE':
    state={
           ...state,
          name:action.payload
        }
 
    break;
    
case 'LOCATION_UPDATE':
    state={
     ...state,
     location:action.payload
    }
      break;
   }
   return state
  }
