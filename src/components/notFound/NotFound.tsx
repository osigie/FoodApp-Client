import Wrapper from "../../assets/wrappers/ErrorPage";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <h3> Ohh! page not found </h3>
        <p>We can't seem to find the page you are looking for</p>
        <Link to="/"> Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default NotFound;
