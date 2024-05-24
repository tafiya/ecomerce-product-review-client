import { Outlet, useLocation } from "react-router-dom";

import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { Toaster } from "react-hot-toast";


const Main = () => {
  const  location=useLocation();
  // console.log(location);
  const noHeaderFooter =location.pathname.includes('login') ||location.pathname.includes('signup');
    return (
        <>
      {noHeaderFooter || <Navbar></Navbar>}
     
     <Outlet ></Outlet>

      
      {noHeaderFooter || <Footer></Footer>}
     
      
     
    <Toaster
      position="top-center"
      reverseOrder={false}
    /> 
            
        </>
    );
};

export default Main;