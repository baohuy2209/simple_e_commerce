import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Login from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import About from "./pages/About/About";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
