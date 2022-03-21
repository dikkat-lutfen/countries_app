import React from "react";
import Navbar from "./components/Navbar";
/*import Home from "./components/Home";*/
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import CountriesShow from "./components/CountriesShow";
import Country from "./components/Country"

function App() {

 

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className=" container mt-2">
          <Routes> 
             <Route element={<CountriesShow/>} path='/' exact/>
             <Route element={<Country/>} path='/:name'/>
              <Route element={<About/>} path='/about'/>    
              <Route element={<Contact/>} path='/contact'/>  
            </Routes>
              
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
