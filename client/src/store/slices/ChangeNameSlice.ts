import { createSlice } from "@reduxjs/toolkit";
import { SliceInterface } from "./SliceInterface";


const initialState: SliceInterface = {
    value: false
}
const ChangeNameSlice = createSlice({
    name: 'changeName',
    initialState,
    reducers: {
        toggleChangeNameComponent: (state): void => {
            state.value = !state.value
        }
    }
})

export default ChangeNameSlice.reducer
export const {toggleChangeNameComponent} = ChangeNameSlice.actions