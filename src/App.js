import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import ModelDisplay from "./Components/ModelDisplay";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="/:id" element={<ModelDisplay />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
