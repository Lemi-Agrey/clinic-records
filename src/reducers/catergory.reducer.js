import {catergorConstant} from '../actions/constants'
const initState={
    catergories: [],
    loading: false,
    error: null
}
const buildNewCatergories=(parentId, catergories, catergory)=>{
    let myCatergories=[];
    if(parentId===undefined){
        return [
            ...catergories,
            {
                id: catergory._id,
                name: catergory.name,
                slug: catergory.slug,
                children: []
            }
        ]
    }
    for(let cat of catergories){
        if(cat._id ===parentId){
            myCatergories.push({
                ...cat,
                children: cat.children ? buildNewCatergories(parentId, [...cat.children, {
                    _id: catergory._id,
                    name: catergory.name,
                    slug: catergory.slug,
                    parentId: catergory.parentId,
                    children: catergory.children
                }], catergory): []
            })
        } else {
            myCatergories.push({
                ...cat,
                children: cat.children ? buildNewCatergories(parentId, cat.children, catergory): []
            })
        }
        
    }
    return myCatergories
}
export default(state=initState, action)=>{
    switch(action.type){
        case catergorConstant.GET_ALL_CATERGORY_SUCCESS:
            state={
                ...state,
                catergories: action.payload.catergories
            }
            break; 
        case catergorConstant.ADD_NEW_CATERGORY_REQUEST:
                state={
                    ...state,
                    loading: true
                } 
            break;
          case catergorConstant.ADD_NEW_CATERGORY_SUCCESS:
            const catergory=action.payload.catergory;
            const updatedCatergories=buildNewCatergories(catergory.parentId, state.catergories, catergory)
            console.log(updatedCatergories)
            state={
                ...state,
                catergories: updatedCatergories,
                loading: false
            }
            break;
        case catergorConstant.ADD_NEW_CATERGORY_FAILURE:
            state={
                ...initState
            }
            break;
    }
    return state;
} 