import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: { token: null, username: null, email: null }
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUserToStore: (state, action) => {
            state.value.token = action.payload.token
            state.value.username = action.payload.username
            state.value.email = action.payload.email
        }
    }
})

export const { addUserToStore } = usersSlice.actions
export default usersSlice.reducer