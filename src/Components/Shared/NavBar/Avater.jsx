import { useContext } from "react";
import avatarImg from "../../../assets/images/placeholder.jpg";
import { AuthContext } from "../../../providers/AuthProvider";

const Avater = () => {
  const user = useContext(AuthContext);
  return (
    <img
      className="rounded-full"
      // src={user && user.photoURL ? user.photoURL : img}
      src={user && user.photoURL ? user.photoURL : avatarImg}
      alt="profile"
      height="30"
      width="30"
    />
  );
};

export default Avater;
