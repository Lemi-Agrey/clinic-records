import authReducer from './auth.reducer'
import userReducer from './user.Reducer'
import catergoryReducer from './catergory.reducer'
import orderReducer from './orders.reducer'
import productReducer from './product.reducer'
import doctorReducer from './doctor.reducer'
import patientReducer from './patient.reducer'
import medicineReducer from './medicine.reducer'

import {combineReducers} from 'redux'
const rootReducer=combineReducers({
    auth: authReducer,
    user: userReducer,
    catergory: catergoryReducer,
    order: orderReducer,
    product: productReducer,
    doctor: doctorReducer,
    patient: patientReducer,
    medicine: medicineReducer
})

export default rootReducer; 