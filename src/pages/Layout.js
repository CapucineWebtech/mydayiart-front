import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import DayNight from "../components/DayNight";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <DayNight />
    </>
  )
};

export default Layout;