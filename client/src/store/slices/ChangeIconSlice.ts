import { createSlice } from "@reduxjs/toolkit";
import { SliceInterface } from "./SliceInterface";

const initialState: SliceInterface = {
    value: false
}

const ChangeIconSlice = createSlice({
    name: 'changeIcon',
    initialState,
    reducers: {
        toggleIconsWrap: (state) => {
            state.value = !state.value
        }
    }
})

export const {toggleIconsWrap} = ChangeIconSlice.actions
export default ChangeIconSlice.reducer