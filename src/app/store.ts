import {configureStore} from '@reduxjs/toolkit'
import pauseReducer from '../features/pause/pauseSlice'
import timerReducer from '../features/timer/timerSlice'
export const store = configureStore({
    reducer:{
        pause: pauseReducer,
        timer: timerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch