import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
