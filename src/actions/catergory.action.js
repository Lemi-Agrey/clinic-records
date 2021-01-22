import axios from '../helper/axios'
import {catergorConstant} from './constants'
export const getAllCatergory=()=>{
    return async dispatch=>{
        dispatch({type: catergorConstant.GET_ALL_CATERGORY_REQUEST})
        const res=await axios.get('/catergory/getcat')
        console.log(res);

        if(res.status===200){
            const {catergoryList}=res.data;
            dispatch({
                type: catergorConstant.GET_ALL_CATERGORY_SUCCESS,
                payload: {catergories: catergoryList}
            });
        } else {
            dispatch({
                type: catergorConstant.GET_ALL_CATERGORY_FAILURE,
                payload: {error: res.data.error}
            })
        }
    }
}
export const addCatergory=(form)=>{
    return async dispatch=>{
        dispatch({type: catergorConstant.ADD_NEW_CATERGORY_REQUEST})
         const res=await axios.post('/catergory/create', form)
         if(res.status===201){
             dispatch({
                 type: catergorConstant.ADD_NEW_CATERGORY_SUCCESS,
                 payload: {catergory: res.data.catergory}
             })
         } else {
             dispatch({
                 type: catergorConstant.ADD_NEW_CATERGORY_FAILURE,
                 payload: res.data.error
             })
         }
    }
}