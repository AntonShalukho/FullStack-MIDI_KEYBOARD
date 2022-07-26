import { createSlice } from "@reduxjs/toolkit"
import {SliceInterface} from './SliceInterface'

const initialState: SliceInterface = {
    value: false
}

const RegistrationEye2Slice = createSlice({
    name: 'registrationEye2',
    initialState,
    reducers: {
        toggleRegistrationEye2: (state) => {
            state.value = !state.value
        },
        disabledRegistrationEye2: (state) => {
            state.value = false
        }
    }
})

export default RegistrationEye2Slice.reducer
export const {toggleRegistrationEye2, disabledRegistrationEye2} = RegistrationEye2Slice.actions