import { Link } from "react-router-dom";
import "./Login&SignUpPage.css";
import { useState } from "react";
import Card from "./UI/Card";

const SignUpPage = () => {
    const [userInfo, setUserInfo] = useState({
      username: "",
      email: "",
      password: "",
    });
  
    const signUpHandler = () => {}

    return (
      <Card className="SUC">
        <label className="label">Email</label>
        <input
          className="input"
          type="text"
          placeholder="Email"
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <label className="label">Username</label>
        <input
          className="input"
          type="text"
          placeholder="Username"
          value={userInfo.username}
          onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
        />
        <label className="label">Password</label>
        <input
          className="input"
          type="password"
          placeholder="********"
          value={userInfo.password}
          onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
        />
        <button className="bttn SUB" onClick={signUpHandler}>
          Sign Up
        </button>
        <div className="control">
          <p>Already a member?</p>
          <Link to="/login">
            <button className="bttn">Login</button>
          </Link>
        </div>
      </Card>
    );
  };
  
  export default SignUpPage;