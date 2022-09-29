import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import AsideNav from "./AsideNav";

const Nav = () => {
  const [menuToogle, setMenuToogle] = useState(true);

  return (
    <>
      <div className="sticky z-50 max-w-7xl m-auto bg-green-600 px-7 h-14 flex items-center justify-between shadow-green-500 shadow-sm">
        <Link to="/">
          {" "}
          <img className="w-8 ml-2" src={logo} alt="logo" />
        </Link>
        <h2 className="text-white text-2xl font-semibold ">Css-Generators</h2>
        <span
          className="text-2xl text-white cursor-pointer"
          onClick={() => setMenuToogle(!menuToogle)}
        >
          {menuToogle ? "" : <AiOutlineMenu />}
        </span>
        {menuToogle && <AsideNav setMenuToogle={setMenuToogle} />}
      </div>
    </>
  );
};

export default Nav;
