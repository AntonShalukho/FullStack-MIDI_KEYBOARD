import { createSlice } from "@reduxjs/toolkit";
import { SliceInterface } from "../../interfaces/SliceInterface";

const initialState: SliceInterface = {
    value: false
}
const RegistrationMessageSlice = createSlice({
    name: 'registrationMessage',
    initialState,
    reducers: {
        toggleRegistrationMessage: (state): void => {
            state.value = !state.value
        }
    }
})

export default RegistrationMessageSlice.reducer
export const {toggleRegistrationMessage} = RegistrationMessageSlice.actions
