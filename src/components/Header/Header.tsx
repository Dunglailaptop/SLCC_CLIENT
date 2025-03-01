import logo_login from "../../assets/logo.png";
import Dropdownhead from "./Dropdownhead";
import { NavLink } from "react-router-dom";
import { siderbarMenu } from "../../ultis/menu";

const activeClass: string = "bg-green-500 text-white rounded"
const notActiveClass: string = ""

const Header = () => {
  return (
  
      <div id="barMenu" className="flex h-[80px] items-center text-black p-4 bg-white drop-shadow-md">
        {/* Logo (bên trái) */}
        <a href="#" className="flex items-center">
          <img
            src={logo_login}
            alt="Logo"
            className="w-20 hover:scale-105 transition-all"
          />
          <h1 className="p-3 font-bold font-main">Sàng lọc cấp cứu
            <br></br>Bệnh viện nhi đồng 2</h1>
        </a>

        {/* Navigation (ở giữa) */}
        <nav className="flex-1 flex justify-center">
          <ul className="hidden xl:flex items-center font-semibold text-base space-x-8">
            {siderbarMenu.map(item => (
              <NavLink to={item.path} className={({ isActive }) => (isActive ? activeClass : notActiveClass)}>
                <li className="flex flex-col items-center p-3 hover:bg-green-500 hover:text-white text-sm rounded-md transition-all cursor-pointe">
                  {item.icon}
                  {item.text}
                </li>
              </NavLink>
            ))}

          </ul>
        </nav>

        {/* Dropdown (bên phải) */}
        <div className="w-20 flex justify-end">
          <Dropdownhead />
        </div>
      </div>
  

  );
};

export default Header;
