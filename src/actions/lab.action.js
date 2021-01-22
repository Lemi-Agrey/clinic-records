import axiosInstant from "../helper/axios"

import axios from '../helper/axios'

export const addLab=(form)=>{
    return async dispatch=>{
        const res=await axios.post(`/lab/create`, form);
        console.log(res);
    }
}