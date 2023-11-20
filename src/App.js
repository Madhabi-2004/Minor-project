// import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/foot"
import Footer from "./Components/Footer/Footr";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
// import Login from "./Pages/Authentication/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route  path="/"  element={<Home />} />
          <Route  path="/about"  element={<About/>} />
          <Route  path="/contact"  element={<Contact/>} />
          {/* <Route  path="/login"  element={<Login/>} /> */}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
