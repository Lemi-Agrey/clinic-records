import axios from '../helper/axios'
import {getDoctorConstant} from './constants'
 export const addDoctor = form => {
     return  async dispatch=>{
         const res=await axios.post('/doctor/create', form)
         console.log(res);
     }
 }
 export const getDoctor=()=>{
     return async dispatch=>{
         dispatch({type: getDoctorConstant.GET_ALL_GETDOCTOR_REQUEST})
         const res=await axios.get('/doctor/getDoc');
         console.log(res)
         if(res.status===200){
             const {doctor}=res.data;
             dispatch({
                 type: getDoctorConstant.GET_ALL_GETDOCTOR_SUCCESS,
                 payload: {doctors: doctor}
             })
         } else {
             dispatch({
                 type: getDoctorConstant.GET_ALL_GETDOCTOR_FAILURE,
                 payload: {error: res.error.data}
             })
         }
     }
 }