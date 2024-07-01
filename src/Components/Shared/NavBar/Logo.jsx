import { Link } from "react-router-dom";
import img from "../../../assets/images/logo.png";
const Logo = () => {
  return (
    <Link to={"/"}>
      <img
        className=" cursor-pointer hidden md:block"
        src={img}
        alt=" logo "
        width="100"
        height="100"
      />
    </Link>
  );
};

export default Logo;
