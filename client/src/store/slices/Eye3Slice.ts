import { createSlice } from "@reduxjs/toolkit"
import {SliceInterface} from './SliceInterface'

const initialState: SliceInterface = {
    value: false
}

const Eue3Slice = createSlice({
    name: 'eye3',
    initialState,
    reducers: {
        toggleEntranceEye: (state) => {
            state.value = !state.value
        },
        disabledEye3: (state) => {
            state.value = false
        }
    }
})

export const {toggleEntranceEye, disabledEye3} = Eue3Slice.actions
export default Eue3Slice.reducer