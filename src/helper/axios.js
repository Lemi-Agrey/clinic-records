import axios from 'axios'
import {api} from '../urlconfig'

const token =window.localStorage.getItem('token')
const axiosInstant=axios.create({
    baseURL: api,
    headers: {
        'Authorization': token ? `Bearer ${token}` : '',
        'content-type': 'multipart/form-data'
    }

})
export default axiosInstant