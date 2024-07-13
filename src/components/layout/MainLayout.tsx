import { Outlet } from "react-router-dom";
import Footer from "../../pages/Footer";
import Navbar from "../../pages/Navbar";





const MainLayout = () => {
  return (
  <div className="w-full">
      <Navbar/>
      <Outlet/>
      <Footer/>
  </div>

  );
};

export default MainLayout;
