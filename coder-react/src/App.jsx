import "./App.css";
import NavBar from "./components/Navbar";
import { Route, Routes} from "react-router-dom";
import Contact from "./pages/Contact";
import Home from './pages/Home';
import Store from './pages/Store';
import Details from "./pages/details";


function App() {
  return (
    <div className="Container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
