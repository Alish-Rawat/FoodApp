import { useState } from "react";
import { useEffect } from "react";
import { FETCH_MENU_URL } from "../contants";
const useRestaurant = (id) => {
  const [resinfo, setresinfo] = useState(null);
  const [resmenu, setresmenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);

    const json = await data.json();
    setresinfo(json.data.cards[0]?.card.card.info);
    setresmenu(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR?.cards[2]?.card?.card
    );
  }
  //   console.log(resinfo);
  return { resinfo, resmenu };
};

export default useRestaurant;
