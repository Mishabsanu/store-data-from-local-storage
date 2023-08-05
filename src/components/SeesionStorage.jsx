import { useState } from 'react';
import './session.css'


const SeesionStorage = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [getuserData, setGetuserData] = useState();
    console.log(getuserData);

    const handleSubmit=(event)=>{
        event.preventDefault()
        const data={
            name:name,
            email:email,
            password:password

        }
        localStorage.setItem("user", JSON.stringify(data));

        const storedData=localStorage.getItem("user")
        if (storedData) {
            const userData = JSON.parse(storedData);
            setGetuserData(userData)
            console.log(userData);
          } else {
            console.log("No data found in local storage.");
          }
    }
  return (
    <>
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
    <h1>{getuserData?.name}</h1>
    <h1>{getuserData?.email}</h1>
    <h1>{getuserData?.password}</h1>
  

</div>
</>
  );
};

export default SeesionStorage;
