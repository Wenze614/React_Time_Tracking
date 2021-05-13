import {createSlice} from '@reduxjs/toolkit'
import type {RootState} from '../../app/store'

export interface TimerObject {
    job: string;
    id: number;
    status: boolean;
    counter: number;
    ifFinished: boolean;
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
        },
        pauseTimer: (state, action) => {
            const this_timer = state.timerList.find(timer=>timer.id === action.payload)
            if (this_timer){
                this_timer.status = true
            }
        },
        resumeTimer: (state, action) => {
            const this_timer = state.timerList.find(timer=>timer.id === action.payload)
            if (this_timer) {
                this_timer.status = false
            }
        },
        deleteTimer: (state, action) => {
            state.timerList = state.timerList.filter(timer=>timer.id !== action.payload)
        },
        saveTimer: (state, action) =>{
            const this_timer = state.timerList.find(timer=>timer.id === action.payload)
            if (this_timer) {
                this_timer.ifFinished = true
            }
        },
        saveCounter: (state, action) => {
            const this_timer = state.timerList.find(timer=>timer.id === action.payload.id)
            if (this_timer) {
                this_timer.counter = action.payload.counter
            }
        }
    }
})
export const {addTimer, pauseTimer, resumeTimer, deleteTimer, saveTimer, saveCounter} = timerSlice.actions
export const selectTimer = (state: RootState) => state.timer.timerList.filter(timer=>timer.ifFinished === false)
export const selectSavedTimer = (state: RootState) => state.timer.timerList.filter(timer=>timer.ifFinished === true)
export default timerSlice.reducer