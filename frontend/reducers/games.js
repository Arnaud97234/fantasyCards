import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: { pendingGames: [], futureGames: [] }
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        addPendingGamesToStore: (state, action) => {
            state.value.pendingGames = (action.payload)
        },
        addFutureGamesToStore: (state, action) => {
            state.value.futureGames = (action.payload)
        },
    }
})

export const { addPendingGamesToStore, addFutureGamesToStore } = gameSlice.actions
export default gameSlice.reducer