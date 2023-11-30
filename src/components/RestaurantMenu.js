import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../contants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  const { resinfo, resmenu } = useRestaurant(id);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  // console.log(id);
  return !resinfo || !resmenu ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>{resinfo?.name}</h1>
        <img className="img" src={IMG_CDN_URL + resinfo?.cloudinaryImageId} />
        <h2>Restaurant id: {id}</h2>
        <h3>{resinfo?.areaName}</h3>
        <h3>{resinfo?.city}</h3>
        <h3>{resinfo?.avgRating}</h3>
        <h3>{resinfo?.costForTwoMessage}</h3>
      </div>
      {/* <div>
        <button
          className="p-2 m-5 bg-green-200"
          onClick={() => 
            handleAddItem();
          }
        >
          Add Item
        </button>
      </div> */}
      {/* <div>{resmenu.itemCards[1].card.info.name}</div> */}
      {console.log(resmenu)}
      <div className="p-5">
        <h1 className="font-bold text-2xl p-2">Menu</h1>
        <ul data-testid="menu" className="m-2">
          {resmenu?.itemCards?.map((i) => (
            <li key={i.card.info.id}>
              {i.card.info.name}
              <button
                data-testid="addbtn"
                onClick={() => addFoodItem(i.card.info)}
                className="p-1 bg-green-100"
              >
                add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
