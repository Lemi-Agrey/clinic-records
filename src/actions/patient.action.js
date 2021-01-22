import axios from '../helper/axios'
import {getPatientConstant} from './constants'
 export const addPatient = form => {
     return  async dispatch=>{
         const res=await axios.post('/patient/create', form)
         console.log(res);
     }
 }
 export const getPatient=()=>{
     return async dispatch=>{
         dispatch({type: getPatientConstant.GET_ALL_PATIENT_REQUEST})
         const res=await axios.get('/patient/getPatients');
         console.log(res)
         if(res.status===200){
             const {patient}=res.data;
             dispatch({
                 type: getPatientConstant.GET_ALL_PATIENT_SUCCESS,
                 payload: {patients: patient}
             })
         } else {
             dispatch({
                 type: getPatientConstant.GET_ALL_PATIENT_FAILURE,
                 payload: {error: res.error.data}
             })
         }
     }
 }