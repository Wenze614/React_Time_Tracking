import {createSlice} from '@reduxjs/toolkit'
import type {RootState} from '../../app/store'

interface PauseState {
    value: boolean
}
const initialState: PauseState = {
    value: false
}

export const pauseSlice = createSlice({
    name: 'pause',
    initialState,
    reducers: {
        pauseTimer: (state) => {
            state.value = true;
        },
        resumeTimer: (state) => {
            state.value = false
        }
    }
});

export const { pauseTimer, resumeTimer } = pauseSlice.actions;
export const selectPause = (state: RootState) => state.pause.value

export default pauseSlice.reducer

