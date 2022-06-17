import Wrapper from "../assets/wrappers/SmallSidebar";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import { FaTimes } from "react-icons/fa";
// import Logo from "./Logo";
import Navlinks from "./NavLinks";
import { toggleSideBar } from "../features/cart/cartSlice";

const SmallSideBar = () => {
  const dispatch = useAppDispatch();
  const { showSideBar } = useAppSelector((store) => store.cart);
  const toggleSideBarFunc = () => {};
  return (
    <Wrapper>
      <div
        className={
          showSideBar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button
            type="button"
            className="close-btn"
            onClick={() => dispatch(toggleSideBar())}
          >
            <FaTimes />
          </button>
          <header>
            {/* <Logo /> */}
            <h1>FoodApp</h1>
          </header>
          <Navlinks toggleSideBarFunc={() => dispatch(toggleSideBar())} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSideBar;
