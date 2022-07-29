import { combineReducers, configureStore } from '@reduxjs/toolkit'
import Eye3Slice from './slices/Eye3Slice'
import RegistrationEye1Slice from './slices/RegistrationEye1Slice'
import RegistrationEye2Slice from './slices/RegistrationEye2Slice'
import Song1Slice from './slices/Song1Slice'
import Song2Slice from './slices/Song2Slice'
import Song3Slice from './slices/Song3Slice'
import ChangeIconSlice from './slices/ChangeIconSlice'
import AccountIconSlice from './slices/AccountIconSlice'
import ChangeNameSlice from './slices/ChangeNameSlice'
import RegistrationMessageSlice from './slices/RegistrationMessageSlice'

const rootReducer = combineReducers({
    eye3: Eye3Slice,
    registrationEye1: RegistrationEye1Slice,
    registrationEye2: RegistrationEye2Slice,
    sogn1: Song1Slice,
    sogn2: Song2Slice,
    sogn3: Song3Slice,
    isIcon: ChangeIconSlice,
    accountIcon: AccountIconSlice,
    changeName: ChangeNameSlice,
    registrationMessage: RegistrationMessageSlice,
})

const store = configureStore({
    reducer: rootReducer
})

type RootState = ReturnType<typeof store.getState>

// export const selectors = {
//     selectorEnrtance(state: RootState) {state.entrance.entrance},
//     selectorRegistration(state: RootState) {state.regisrtation.registration},
// }
export const selectorEnrtanceEye = (state: RootState) => state.eye3.value
export const selectorRegistrationEye1 = (state: RootState) => state.registrationEye1.value
export const selectorRegistrationEye2 = (state: RootState) => state.registrationEye2.value
export const selectorSong1 = (state: RootState) => state.sogn1.value
export const selectorSong2 = (state: RootState) => state.sogn2.value
export const selectorSong3 = (state: RootState) => state.sogn3.value
export const selectorChangeIcon = (state: RootState) => state.isIcon.value
export const selectorAccountIcon = (state: RootState) => state.accountIcon.src
export const selectorChangeName = (state: RootState) => state.changeName.value
export const selectorRegistrationMessage = (state: RootState) => state.registrationMessage.value

export default store