import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: { token: null, username: null, email: null, cardsList: [], packsList: []}
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        login: (state, action) => {
            state.value.token = action.payload.token
            state.value.username = action.payload.username
            state.value.email = action.payload.email
            state.value.cardsList = action.payload.cardsList
            state.value.packsList = action.payload.packsList
        },
        logout: (state) => {
            state.value.token = null
            state.value.username = null
            state.value.email = null
            state.value.cardsList = []
            state.value.packsList = []
        }
    }
})

export const { login, logout, setCardIdSell } = usersSlice.actions
export default usersSlice.reducer