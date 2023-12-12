import React, { useState } from 'react'
import { toast } from 'react-toastify';

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  function passhandle(event){
    event.preventDefault()
      if(password===cpassword){
        console.log(name);
        console.log(email);
        console.log(password);
      }

      else{
        console.log("error");
        toast.error("password doesn't match")
      }
  }
  return (
    <div className='min-h-screen bg-[black]/[0.8] flex flex-col justify-center items-center text-white text-lg font-bold py-24'>
      <form onSubmit={passhandle}
     className='bg-black p-10 px-14 shadow-lg shadow-black gap-10 flex flex-col '>
          <div className='flex flex-col gap-3'>
            <label htmlFor="">NAME</label>
            <input 
            required
            className="rounded-md text-black" type="text"
            onChange={(event)=>{
                setName(event.target.value);
            }}  
            />
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="">EMAIL</label>
            <input className="rounded-md text-black" type="email" 
            required
            onChange={(event)=>{
              setEmail(event.target.value);
          }}  
            />
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="">PASSWORD</label>
            <input className="rounded-md text-black" type="password" 
            required
            onChange={(event)=>{
              setPassword(event.target.value);
          }}  
            />
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="">CONFIRM PASSWORD</label>
            <input className="rounded-md text-black" type="password"
            required
            onChange={(event)=>{
              setCpassword(event.target.value);
          }}  

            />
          </div>

          <div className='flex justify-center items-center'>
          <button className={`bg-slate-600 w-[100px] cursor-pointer hover:h-[29px] hover:w-[101px]`}

          >
            SUBMIT
          </button>
          </div>


      </form>
    </div>
  )
}

export default SignUp