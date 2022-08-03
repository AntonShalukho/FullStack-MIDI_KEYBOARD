import { createSlice } from "@reduxjs/toolkit";
import RefKeyInterface from "../../interfaces/RefKeyInterface";

const initialState: Array<RefKeyInterface> = [];

const BlackKeyArraySlice = createSlice({
    name: 'blackKeyArray',
    initialState,
    reducers: {
        addKey: (state, action) => {
            state.push(action.payload)
        }
    }
})

export default BlackKeyArraySlice.reducer
export const  {addKey} = BlackKeyArraySlice.actions