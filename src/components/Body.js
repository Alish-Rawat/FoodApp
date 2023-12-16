import React from "react";
import { restaurantList } from "../contants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");

  const [allrestaurants, searchallrestaurants] = useState([]);
  const [Filteredrestaurants, searchFilteredrestaurants] = useState([]); // returns = [variableName, Function to update the variable]
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.537970195220126&lng=77.26460639387369"
    );

    const json = await data.json();
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    searchallrestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    searchFilteredrestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline!! check your Internet Connection.</h1>;
  }

  if (!allrestaurants) return null;
  // if (Filteredrestaurants?.length === 0) {
  //   return <h1>No Restaurant Match Your Filter</h1>;
  // }

  return allrestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <React.Fragment>
      <div className="p-5 bg-pink-100 my-5">
        <input
          data-testid="inputt"
          type="text"
          className="focus:bg-sky-200 p-2 w-60 m-2"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            // e.target.value = whatver we write in input
            setSearchInput(e.target.value);
          }}
        />

        <button
          className="p-2 m-3 hover:bg-blue-500 bg-purple-900 text-white rounded-md"
          data-testid="search-btn"
          onClick={() => {
            const data = filterData(searchInput, allrestaurants);
            searchFilteredrestaurants(data);
          }}
        >
          Search
        </button>
        <input
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
              // email: "new Email",
            })
          }
        ></input>
        <input
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
              // email: "new Email",
            })
          }
        ></input>
      </div>

      <div className="flex flex-wrap" data-testid="res-list">
        {Filteredrestaurants.length === 0 ? (
          <div>
            <h1>No Restaurant Match Your Filter sadasd</h1>
            <h2>Plese search relevant restaurants</h2>
          </div>
        ) : (
          Filteredrestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} user={user} />
              </Link>
            );
          })
        )}
      </div>
    </React.Fragment>
  );
};

export default Body;

//
//
//
//

//
/* <RestaurantCard {...restaurantList[0].info} />
        <RestaurantCard {...restaurantList[1].info} />
        <RestaurantCard {...restaurantList[2].info} />
        <RestaurantCard {...restaurantList[3].info} />
        <RestaurantCard {...restaurantList[4].info} />
        <RestaurantCard {...restaurantList[5].info} />
      <RestaurantCard {...restaurantList[6].info} />  */
