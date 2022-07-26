import { createSlice } from "@reduxjs/toolkit";
import {SliceInterface} from './SliceInterface'

const initialState: SliceInterface = {
    value: false
}

const entranceSlice = createSlice({
    name: 'entrance',
    initialState,
    reducers: {
        toggleEntranceState: (state) => {
            state.value = !state.value
        }
    }
})

export default  entranceSlice.reducer
export const {toggleEntranceState} = entranceSlice.actions
