import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./UI/Card";
import "./Login&SignUpPage.css";

const LoginPage = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const loginHandler = () => {}

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
      <label className="label">Password</label>
      <input
        className="input"
        type="password"
        placeholder="********"
        value={userInfo.password}
        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
      />
      <button
        className="bttn SUB"
        onClick={loginHandler}
      >
        Login
      </button>
      <div className="control">
        <p>Not Registered?</p>
        <Link to="/signup">
          <button className="bttn">Sign Up</button>
        </Link>
      </div>
    </Card>
  );
};

export default LoginPage;