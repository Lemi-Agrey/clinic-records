import {getPatientConstant} from '../actions/constants'

const initialState={
    patients: []
};
export default (state=initialState, action)=>{
    switch(action.type){
        case getPatientConstant.GET_ALL_PATIENT_SUCCESS:
            state={
                ...state,
                patients: action.payload.patients
            }
            break;
    }
    return state;
}