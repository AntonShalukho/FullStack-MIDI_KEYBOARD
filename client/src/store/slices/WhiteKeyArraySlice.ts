import { createSlice } from "@reduxjs/toolkit";
import RefKeyInterface from "../../interfaces/RefKeyInterface";

interface Foo {
    payload: RefKeyInterface,
    type: string
}

const initialState: Array<RefKeyInterface> = [];

const WhiteKeyArraySlice = createSlice({
    name: 'whiteKeyArray',
    initialState,
    reducers: {
        addKey: (state, action) => {
            // state.push(action.payload)
            let flag = true;
            state?.forEach(el => {
          if(el.ref.current === action.payload.ref.current) {
            flag = false
          }
        })
        if(flag) {
          console.log('add keys')
          state?.push(action.payload.ref)
        }
        return state
        }
    }
})

export default WhiteKeyArraySlice.reducer
export const  {addKey} = WhiteKeyArraySlice.actions