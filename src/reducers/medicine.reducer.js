import {medicineConstant} from '../actions/constants'
 const initState={
     medicines: []
 }

 export default (state=initState, action)=>{
     switch(action.type){
         case medicineConstant.GET_ALL_MEDICINE_SUCCESS:
             state={
                 ...state,
                 medicines: action.payload.medicines
             }
             break;
     }
     return state;
 }