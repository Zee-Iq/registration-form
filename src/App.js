import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  return (
    <div className="container">
      <form>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui-form"></div>

        {/* Username */}
        <div className="field">
          <label>Username: </label>
          <input type="text" name="username" placeholder="username" />
        </div>
        {/* Email */}
        <div className="field">
          <label>Email: </label>
          <input type="email" name="email" placeholder="Email" />
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
