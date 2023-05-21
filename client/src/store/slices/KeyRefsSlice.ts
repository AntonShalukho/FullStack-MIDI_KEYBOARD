import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RefKeyType } from "../../components/Piano/types"
import { WritableDraft } from "immer/dist/internal"

export type KeyRefsType = Array<RefKeyType>

export type SetKeyRefsPayload = {
  ref:  RefKeyType
}

const initialState: KeyRefsType = []

const KeyRefsSlice = createSlice({
    name: 'keyRefs',
    initialState,
    reducers: {
      setKeyRefs: (state: WritableDraft<KeyRefsType>, action: PayloadAction<Array<RefKeyType>> )  => {
        const newRefs: Array<RefKeyType | null> = []
        action.payload.map(ref => {
          // state.push(ref.)
        })
        // state.refs = newRefs
      }
    }
})

export const {setKeyRefs} = KeyRefsSlice.actions
export default KeyRefsSlice.reducer