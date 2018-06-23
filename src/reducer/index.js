import * as actions from '../actions/actions'

const initialState={
    counter:0
}

const reducers=(state=initialState,action)=>{
    switch(action.type){
        case actions.INCREMENT:
              return{
                  counter:state.counter + 1
              }
        default:
        return state;      
    }
}

export default reducers;