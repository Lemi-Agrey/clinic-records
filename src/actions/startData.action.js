import axios from '../helper/axios'
import {initialDataConstant, catergorConstant, medicineConstant} from './constants'

export const  getStartData=()=>{
    return async dispatch=>{
        const res=await axios.post('/startData')
        if(res===200){
            const {catergories, medicines}=res.data
            dispatch({
                type: catergorConstant.ADD_NEW_CATERGORY_SUCCESS,
                payload: {catergories}
            });
            dispatch({
                type: medicineConstant.GET_ALL_MEDICINE_SUCCESS,
                payload: {medicines}
            })
        } 
        console.log(res);

    }
}