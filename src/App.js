import { BrowserRouter , Routes, Route } from 'react-router-dom'; 
import Header from "./components/Header"; 
import Footer from"./components/Footer"; 
import Home from "./pages/Home"; 
import Attraction from "./pages/Attraction"; 
import Contact from "./pages/Contact"; 
import './App.css'; 
 
function App(){ 
   return( 
    <BrowserRouter> 
     <div className="app"> 
      <Header/> 
      <main className="main-content"> 
        <Routes> 
          <Route path="/" element={<Home/>} /> 
          <Route path="/attraction" element={<Attraction/>} /> 
          <Route path="/contact" element={<Contact/>} /> 
          <Route path="*" element={<Home/>} /> 
        </Routes> 
      </main> 
      <Footer/> 
     </div> 
    </BrowserRouter> 
   ); 
} 
export default App;