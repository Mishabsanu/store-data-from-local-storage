import {createSlice} from '@reduxjs/toolkit'

const initialState={FirstName:"",email:"",password:""}
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            const {FirstName,email,password}=action.payload
            state.FirstName=FirstName
            state.email=email
            state.password=password
        },
        clearUser:(state)=>{
            state.FirstName=''
            state.email=''
            state.password=''
        }
    }
})
export const {setUser,clearUser}=userSlice.actions
export default userSlice.reducer