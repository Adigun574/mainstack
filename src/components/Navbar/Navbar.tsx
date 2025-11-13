import "./Navbar.css";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineInsertChart, MdOutlineMessage } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import type { IMenu } from "../../models/navigation.model";
import { useLocation, useNavigate } from "react-router-dom";
import mainstackLogo from "../../assets/images/mainstack-logo.svg"
import { useState } from "react";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";

const NAV_MENUS: IMenu[] = [
  { name: 'Home', route: '/home', icon: <GrHomeRounded /> },
  { name: 'Analytics', route: '/analytics', icon: <MdOutlineInsertChart /> },
  { name: 'Revenue', route: '/revenue', icon: <FaMoneyBills /> },
  { name: 'CRM', route: '/crm', icon: <FiUsers /> },
  { name: 'Apps', route: '/apps', icon: <AiOutlineAppstore /> }
]

export default function Navbar(){

  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [profileOpen, setProfileOpen] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleProfile = () => setProfileOpen((prev) => !prev);

  return (
    <header className="topbar">
      <div className="topbar-left">
        <img src={mainstackLogo} alt="mainstack logo" />
      </div>

      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <RxHamburgerMenu />
      </button>

      <nav className={`navlinks ${menuOpen ? "open" : ""}`}>
        {
          NAV_MENUS.map((menu) => {
            return (
              <a
                key={menu.name}
                onClick={() => {
                  navigate(menu.route);
                  setMenuOpen(false);
                }}
                className={location.pathname === menu.route ? "active" : ""}
              >
                {menu.icon}
                <span>{menu.name}</span>
              </a>
            )
          })
        }
      </nav>

      <div className="topbar-right" onClick={toggleProfile}>
        <button className="icon">
          <BsBell />
        </button>
        <MdOutlineMessage />
        <div className="profile-container">
          <div className="profile">OJ</div>
          <RxHamburgerMenu />
        </div>
      </div>

      {
        profileOpen && (
          <div className="dropdown-menu">
            <ProfileDropdown />
          </div>
        )
      }


    </header>
  );
}

