import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    todos:""
}

const cartSlice = createSlice({
    name: 'svet',
    initialState,
    reducers:{
        toggle(state,action){
            console.log(action);
            if(action.payload === "1"){
                state.todos = "red"
            }
            if(action.payload === "2"){
                state.todos = "blue"
            }
            if(action.payload === "3"){
                state.todos = "black"
            }
            if(action.payload > 3 ){
                state.todos = 'white'
            }
            if(action.payload ==='0' ){
                state.todos = 'white'
            }
        }
    }
})

export const cartAction = cartSlice.actions
export default cartSlice


export const colRed = (name)=>{
    return(dispatch)=>{
        setTimeout(()=>{
            dispatch(cartAction.toggle(name))
          },3000)
    }
}