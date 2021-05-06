import {createSlice} from '@reduxjs/toolkit'
import type {RootState} from '../../app/store'

export interface TimerObject {
    job: string;
    id: number;
    status: boolean
}

interface timerState{
    timerList: TimerObject[]
}

const initialState: timerState =  {
    timerList: []
}

export const timerSlice = createSlice({
    name: 'timers',
    initialState,
    reducers:{
        addTimer: (state, action) => {
            state.timerList = [...state.timerList, action.payload]
        }
    }
})
export const {addTimer} = timerSlice.actions
export const selectTimer = (state: RootState) => state.timer.timerList
export default timerSlice.reducer