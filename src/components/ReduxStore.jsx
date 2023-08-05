import { useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import './session.css'
import { clearUser, setUser } from "../Redux/authSlice/authSlice";


const ReduxStore = () => {
    const dispatch=useDispatch()
   const getuserData=useSelector(state=>state.user)
    console.log(getuserData);

    const [FirstName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit=(event)=>{
        event.preventDefault()
        const data={
            FirstName:FirstName,
            email:email,
            password:password

        }
        dispatch(setUser(data))

        
        // console.log(data);
    }
const logout=()=>{
    dispatch(clearUser())
}
  return (
    <div>
            <div>
        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Name {" "}</label>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
      </div>

      <div>
        <label htmlFor="">Eamil  {""}</label>
        <input type="email"  onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="">Password  {" "}</label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <button type='submit'>submit</button>
      </form>
    </div>


<div>
<div>
    <h1>{getuserData?.FirstName}</h1>
    <h1>{getuserData?.email}</h1>
    <h1>{getuserData?.password}</h1>
  

</div>
<button onClick={logout}>lOGoUT</button>
</div>
      
    </div>
  )
}

export default ReduxStore
