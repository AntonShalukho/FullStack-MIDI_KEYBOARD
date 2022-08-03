import { createSlice } from "@reduxjs/toolkit";
import RefKeyInterface from "../../interfaces/RefKeyInterface";

const initialState: Array<RefKeyInterface> = [];

const WhiteKeyArraySlice = createSlice({
    name: 'whiteKeyState',
    initialState,
    reducers: {
        addKey: (state, action) => {
            state.push(action.payload)
        }
    }
})

export default WhiteKeyArraySlice.reducer
export const  {addKey} = WhiteKeyArraySlice.actions