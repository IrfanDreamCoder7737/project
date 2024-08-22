import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import NavBar from "./component/Navbar";
import Page404 from "./component/Page404"; // Note: Page404 is imported but not used
import User from "./component/User";
import Filter from './component/Filter';
import Contact from "./component/Contact";
import Company from './component/Company';
import Channel from './component/Channel';
import Other from './component/Other';
import Login from "./component/Login";

function Appdemo() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/User/:name" element={<User />} />
          <Route path="/Filter" element={<Filter />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Channel" element={<Channel />} />
          <Route path="/Other" element={<Other />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Appdemo;
