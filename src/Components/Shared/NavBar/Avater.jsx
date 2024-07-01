import { useContext } from "react";
import img from "../../../assets/images/placeholder.jpg";
import { AuthContext } from "../../../providers/AuthProvider";

const Avater = () => {
  const user = useContext(AuthContext);
  return (
    <img
      className="rounded-full"
      src={user && user.photoUrl ? user.photoUrl : img}
      alt="avater"
      height="30"
      width="30"
    />
  );
};

export default Avater;
