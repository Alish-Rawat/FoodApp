import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { IMG_CDN_URL } from "../contants";

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  // user, (through props)
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-48 p-2 m-2 shadow-lg bg-pink-100 ">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3 className="overflow-hidden text-ellipsis">{cuisines.join(",")}</h3>
      <h4>{avgRating} stars</h4>
      <h2 className="font-bold">{user.name}</h2>
      <h2 className="text-md">{user.email}</h2>
    </div>
  );
};

export default RestaurantCard;
