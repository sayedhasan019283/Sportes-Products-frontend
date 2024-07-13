import { Outlet } from "react-router-dom";
import Footer from "../../pages/Footer";
import Navbar from "../../pages/Navbar";





const MainLayout = () => {
  return (
  <>
      <Navbar/>
      <Outlet/>
      <Footer/>
  </>

  );
};

export default MainLayout;
