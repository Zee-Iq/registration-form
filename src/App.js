import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  /* Allows the program to manage and handle the form  */
  const {register, handleSubmit, errors} = useForm();
  /* onSubmit event handles the parameter data after submitting */
  const onSubmit = (data) => {
    setUserInfo(data)
    console.log(data)
  }
  /* state variable  */
  const [userInfo, setUserInfo] = useState();

  return (
    <div className="container">
      {/* displaying data on the screen */}
      <span>{JSON.stringify(userInfo, undefined, 2)}</span>
      <form onSubmit = {handleSubmit(onSubmit)}>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui-form"></div>

        {/* Username */}
        <div className="field">
          <label>Username: </label>
          <input type="text" name="username" placeholder="username" ref= {register} />
          {/* conected input to useForm() through ref attribute */}
        </div>
        {/* Email */}
        <div className="field">
          <label>Email: </label>
          <input type="email" name="email" placeholder="Email"  />
        </div>
        {/* Password */}
        <div className="field">
          <label>Password: </label>
          <input type="password" name="password" placeholder="password" />
        </div>
        <button className='fluid ui button grey'>Submit</button>
      </form>
    </div>
  
  );
}

export default App;

/* test comment */
