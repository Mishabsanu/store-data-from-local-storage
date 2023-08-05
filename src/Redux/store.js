import {configureStore} from '@reduxjs/toolkit'
import {persistReducer,persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReduser from './authSlice/authSlice'



const persistConfig={
    key:"root",
    storage,
}

const persistedReducer=persistReducer(persistConfig,userReduser)

export const store=configureStore({
    reducer:persistedReducer
})

export const persistor=persistStore(store)