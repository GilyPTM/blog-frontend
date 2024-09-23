import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../layout.css";

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <NavBar />

      <main>
        {/* This is where the child routes will be rendered */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
