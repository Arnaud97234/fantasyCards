import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: { myEvents: [], pendingEvent: [], futureEvent: [] }
}

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addMyEventsToStore: (state, action) => {
            state.value.myEvents.push(action.payload)
        },
        addPendingEventsToStore: (state) => {
            state.value.pendingEvent.push(action.payload)
        },
        addFutureEventsToStore: (state) => {
            state.value.futureEvent.push(action.payload)
        },
    }
})

export const { addMyEventsToStore, addPendingEventsToStore, addFutureEventsToStore } = eventsSlice.actions
export default eventsSlice.reducer