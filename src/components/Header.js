import { useState, useContext } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
  /* // <a href="/">
  //   <img
  //     className="logo"
  //     src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
  //     alt="logoo"
  //   />
  // </a> */ // another way of writing , from internet

  <a href="/">
    <img data-testid="logo" className="h-28 p-2 " alt="logo" src={Logo} />
  </a> // this one from local
);

const Header = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className=" flex justify-between bg-pink-100 shadow-lg sm:bg-blue-400 md:bg-yellow-300">
      <Title />
      <div className="nav-items">
        <ul className="flex py-12">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link to="/cart">
            <li data-testid="cart" className="px-2">Cart - {cartItems.length}</li>
          </Link>
        </ul>
      </div>
      <h4 data-testid="online-status" className="py-12">
        {isOnline ? "online" : "offline"}
      </h4>
      <h2 className="p-12 font-bold text-red-900">{user.name}</h2>
      {isLoggedin ? (
        <Link to="/">
          <button className="py-12" onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </Link>
      ) : (
        <Link to="/login">
          <button className="py-12" onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default Header;
