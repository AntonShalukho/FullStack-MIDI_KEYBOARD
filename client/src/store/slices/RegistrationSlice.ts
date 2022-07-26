import { createSlice } from "@reduxjs/toolkit";
import {SliceInterface} from './SliceInterface'

const initialState: SliceInterface = {
    value: false
}

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        toggleRegistrationState: (state) => {
            state.value = !state.value
        }
    }
})

export const {toggleRegistrationState} = registrationSlice.actions
export default registrationSlice.reducer