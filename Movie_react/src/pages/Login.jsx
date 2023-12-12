import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen w-full flex bg-[black]/[0.8] text-white flex-col gap-10 justify-center items-center text-xl font-bold">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(email);
          console.log(password);
        }}
        className="flex flex-col gap-10 bg-[black]/[0.5] text-white shadow-black shadow-lg p-10 justify-center items-center"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="">EMAIL</label>
          <input
            required
            className="text-black px-3 text-sm py-1 rounded-md"
            type="email"
            name="EMAIL"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="">PASSWORD</label>
          <input
            required
            className="text-black px-3 text-sm py-1 rounded-md"
            type="password"
            name="PASSWORD"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <button className="bg-[white]/[0.2] w-20 h-7 rounded-xl hover:w-24 hover:h-9 ">
          LOGIN
        </button>

        <div>
          <Link to={"/SignUp"}><p className="bg-[white]/[0.2] w-24 h-7 rounded-xl hover:w-[100px] hover:h-[29px] flex justify-center">
              SIGN-UP
            </p></Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
