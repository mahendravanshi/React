import { createSlice } from "@reduxjs/toolkit";

interface appSliceInitialState{
    count:number
}


const initialState:appSliceInitialState= {
    count:0
   
}
const appSlice = createSlice({

    name:"appSlice",
    initialState,
    reducers:{
        increaseCount:(state)=>{
              state.count++;
        },
        decreaseCount:state=>{
            state.count--;
        },
        resetCount:state=>{
            state.count = initialState.count
        }
    }
})


export const {resetCount,increaseCount,decreaseCount} = appSlice.actions;
export default appSlice.reducer;



