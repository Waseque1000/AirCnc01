import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/NavBar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-28 pb-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
