import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/home/landingpage";
import Features from "./pages/features/features";
import AboutUs from "./pages/aboutus/aboutus";
import ContactUs from "./pages/contactus/contactus";

import "./App.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route path="/features" element={<Features  />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs  />} />
      </Routes>
    </div>
  );
}

export default App;
