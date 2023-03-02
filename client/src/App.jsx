import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Static/Navbar";
import Footer from "./Components/Static/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import User from "./Components/Dynamic/User";
import useAuth from "./Hooks/useAuth";

function App() {
  const { loginStatus } = useAuth();
  return (
    <>
      <Navbar />
      <div className="layout">
        {loginStatus && <User />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
