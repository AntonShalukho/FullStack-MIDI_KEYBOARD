import { createSlice } from "@reduxjs/toolkit"
import {SliceInterface} from './SliceInterface'

const initialState: SliceInterface = {
    value: false
}

const RegistrationEye1Slice = createSlice({
    name: 'registrationEye1',
    initialState,
    reducers: {
        toggleRegistrationEye1: (state) => {
            state.value = !state.value
        },
        disabledRegistrationEye1: (state) => {
            state.value = false
        }
    }
})

export default RegistrationEye1Slice.reducer
export const {toggleRegistrationEye1, disabledRegistrationEye1} = RegistrationEye1Slice.actions