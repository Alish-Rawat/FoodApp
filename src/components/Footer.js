import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <h1 className="p-10 m-10">
      This Website is made with Love by {user.name} - {user.email}
    </h1>
  );
};

export default Footer;
