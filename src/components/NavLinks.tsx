import { NavLink } from "react-router-dom";
import {  MdOutlineLocalGroceryStore } from "react-icons/md";
import { MdNoMeals } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const links = [
  { id: 1, text: "profile", path: "/admin", icon: <CgProfile /> },
  {
    id: 2,
    text: "add meal",
    path: "/admin/add-meal",
    icon: <MdNoMeals />,
  },
  {
    id: 3,
    text: "all meals",
    path: "/admin/all-meal",
    icon: <MdOutlineLocalGroceryStore />,
  },
  {
    id: 4,
    text: "orders",
    path: "/admin/orders",
    icon: <MdOutlineLocalGroceryStore />,
  },
];
type NavProps = {
  toggleSideBarFunc?: () => void;
};

const NavLinks = (props: NavProps) => {
  return (
    <div className="nav-links">
      {links.map(({ icon, text, id, path }) => {
        return (
          <NavLink
            to={path}
            key={id}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={props.toggleSideBarFunc}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
