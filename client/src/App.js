import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Content from "./components/Content";
import Subcontent from "./components/Subcontent";
import About from "./components/About";
import Brands from "./components/Brands";
import Client from "./components/Client";
import Product from "./components/Product";
import Heat from "./Pages/heat-ventillation-system";
import Dairy from "./Pages/dairy";
import Food from "./Pages/food";
import Vrfsystem from "./Pages/vrfsystem";
import Coldstoragecabin from "./Pages/coldstoragecabin";
import Ductable from "./Pages/ductable";
import Turnkey from "./Pages/turnkey";
import Industrialrack from "./Pages/Industrial-rack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>

        <Route path='/' element={<>
        <Slider />
        <Content />
        <Subcontent />
        <Footer />
        </>}/>

        <Route path='/about' element={<>
        <Slider />
        <About />
        <Brands />
        <Footer />
        </>} />

        <Route path='/client' element={<>
        <Client />
        <Footer />
        </>} />

        <Route path='/products' element={<>
        <Product />
        </>} />
      
        <Route path='/heat-ventillation-system' element={<>
        <Heat /> </>} />

        <Route path='/dairy-cold-storage' element={<>
        <Dairy /> </>} />

        <Route path='/food-processing-cold-room' element={<>
        <Food /> </>} />

        <Route path='/vrf-system-installation' element={<>
        <Vrfsystem /> </>} />

        <Route path='/cold-storage-cabin' element={<>
        <Coldstoragecabin /> </>} />

        <Route path='/ductable-air-conditioner' element={<>
        <Ductable /> </>} />

        <Route path='/cold-storage-turnkey-project-services' element={<>
        <Turnkey /> </>} />

        <Route path='/industrial-storage-rack' element={<>
        <Industrialrack /> </>} />

        {/*<Route path='/dairy-cold-storage' element={<>
        <Heat /> </>} />*/}



        <Route path='/contact' element={<>
        <Contact />
        </>} />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;