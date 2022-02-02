import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  /* Allows the program to manage and handle the form  */
  const { register, handleSubmit, errors } = useForm();
  /* onSubmit event handles the parameter data after submitting */
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };
  /* state variable  */
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className="container">
      {/* displaying data on the screen */}
      <div>{userInfo.username}</div>
      <div>{userInfo.email}</div>
    

      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration Form</h1>
     

        {/* Username */}
        <div className="field">
          <label>Username: </label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={userInfo.username}
            onChange={(e) => setUserInfo({ username: e.target.value })}
          />
         
        </div>
        {/* Email */}
        <div className="field">
          <label>Email: </label>
          <input
            type="email"
            name="email"
            placeholder="email" 
            value = {userInfo.email}
            onChange = { (e) => setUserInfo({email:e.target.value})}
          />
        </div>
        {/* Password */}
        <div className="field">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            placeholder="password" /* ref= {register} */
          />
        </div>
        <button className="fluid ui button grey">Submit</button>
      </form>
    </div>
  );
}

export default App;

/* test comment */
