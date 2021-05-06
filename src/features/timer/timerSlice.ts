import {createSlice} from '@reduxjs/toolkit'
import type {RootState} from '../../app/store'

interface TimerObject {
    job: string;
    id: number;
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
        }
    }
})

export default timerSlice.reducer