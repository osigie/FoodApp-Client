import Wrapper from "../assets/wrappers/BigSidebar";
import Navlinks from "./NavLinks";
import { useAppSelector } from "../app/hooks";
// import Logo from "./Logo";
const BigSideBar = () => {
  const { showSideBar } = useAppSelector((store) => store.cart);
  return (
    <Wrapper>
      <div
        className={
          showSideBar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            {/* <Logo /> */}
           <h1>FoodApp</h1> 
          </header>

          <Navlinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSideBar;
