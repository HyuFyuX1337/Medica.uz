import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import News from "./components/News";
import Turn from "./components/Turn";
import Footer from "./components/Footer";
import Doctors from "./components/Doctors";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <About/>
      <Doctors/>
      <Services/>
      <Contact/>
      <News/>
      <Turn/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
