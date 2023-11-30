import { IMG_CDN_URL } from "../contants";

const FoodItem = ({
  name,
  description,
  price,
  imageId,
  // user, (through props)
}) => {
  return (
    <div className="w-48 p-2 m-4 shadow-lg bg-pink-100 ">
      <img src={IMG_CDN_URL + imageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3 className="overflow-hidden text-ellipsis">{description}</h3>
      <h4>Rs- {price / 100}</h4>
    </div>
  );
};

export default FoodItem;
