import {getDoctorConstant} from '../actions/constants'

const initialState={
    doctors: []
};
export default (state=initialState, action)=>{
    switch(action.type){
        case getDoctorConstant.GET_ALL_GETDOCTOR_SUCCESS:
            state={
                ...state,
                doctors: action.payload.doctors
            }
            break;
    }
    return state;
}