import axios from "../helper/axios";
import {
    initialDataConstant, 
    catergorConstant, 
    productConstant} from './constants'

export const getInitialData=()=>{
    return async dispatch=>{
        const res=await axios.post('/initialData');
        if(res.status===200){
            const {catergories, products}=res.data;
            dispatch({
                type: catergorConstant.GET_ALL_CATERGORY_SUCCESS,
                payload: {catergories}
            });
            dispatch({
                type: productConstant.GET_ALL_PRODUCT_SUCCESS,
                payload: {products}
            });
        }
        console.log(res)
    }
}