import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/Navbar";
import RoutesComponent from "./components/Routes/RoutesComponent";
import CartContextProvider from "./components/Context/CartContextProvider";
import Footer from "./components/Footer/Footer";


function App  () {
  return (
    
    <div className="Container">
      <CartContextProvider>
        <NavBar/>
        <RoutesComponent/>
        <Footer/>
      </CartContextProvider>
    </div>
  );
}

export default App;
