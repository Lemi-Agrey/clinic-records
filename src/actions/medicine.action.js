import axios from '../helper/axios'

export const addMedicine=form =>{
    return async dispatch=>{
        const res=await axios.post(`/medicine/create`, form)
        console.log(res);
    }
}

export const getMedicine=form =>{
    return async dispatch=>{
        const res=await axios.get(`/medicine/getMedicine`)
        console.log(res);
    }
}