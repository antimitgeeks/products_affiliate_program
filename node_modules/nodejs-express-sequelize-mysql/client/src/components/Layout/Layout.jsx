import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import CustomizerContext from "../../Context/Customizer";
import Footer from "./Footer/Footer";
import Header from "./Header";
import Loader from "./Loader";
import Sidebar from "./Sidebar";
import TapTop from "./TapTop";
import Themecustomizer from "./ThemeCustomizer";

const Layout = () => {
  const { sidebar_types, setTogglSidebar, setSidebarTypes, defaultClass, setDefaultClass, } = useContext(CustomizerContext);

  const compactSidebar = () => {
    let sidebar_types1 = localStorage.getItem("sidebar_types");
    if (sidebar_types1 === "compact-wrapper") {
      if (window.innerWidth <= 1200) {
        setDefaultClass(true);
        setTogglSidebar(true);
      } else {
        setDefaultClass(false);
        setTogglSidebar(false);
      }
    } else if (sidebar_types1 === "horizontal-wrapper") {
      if (window.innerWidth <= 1200) {
        setDefaultClass(true);
        setTogglSidebar(true);
        setSidebarTypes("compact-wrapper");
      } else {
        setDefaultClass(false);
        setTogglSidebar(false);
        setSidebarTypes("horizontal-wrapper");
      }
    }
  };

  useEffect(() => {
    compactSidebar();
    window.addEventListener("resize", () => {
      compactSidebar();
      if (window.innerWidth <= 1200) {
        setDefaultClass(true);
        setTogglSidebar(true);
      } else {
        setTogglSidebar(false);
        setDefaultClass(false);
      }
    });
  }, [sidebar_types]);
  return (
    <>
      <Loader />
      <TapTop />
      <div className={`page-wrapper ${defaultClass ? "compact-wrapper" : sidebar_types}`}>
        <Header />
        <div className={`page-body-wrapper `}>
          <Sidebar />
          <Outlet />
          <Footer />
          <Themecustomizer />
        </div>
      </div>
    </>
  );
};

export default Layout;
