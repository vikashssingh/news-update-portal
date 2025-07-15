import { configureStore } from '@reduxjs/toolkit'
import useReducer from './user/userSlice'

// export default configureStore({
//   reducer: {},
// })

export const store = configureStore({
    reducer: {
        user: useReducer,
    },
})