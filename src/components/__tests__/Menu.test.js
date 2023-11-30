// // import "@testing-library/jest-dom";
// import { fireEvent, render, waitFor } from "@testing-library/react";
// import Header from "../Header";
// import store from "../../utils/store";
// import { Provider } from "react-redux";
// import { StaticRouter } from "react-router-dom/server";
// import { MENU_DATA } from "../../mocks/data";
// import RestaurantMenu from "../RestaurantMenu";

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(MENU_DATA);
//     },
//   });
// });

// test("Add Items to cart", async () => {
//   const restaurantMenu = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Header />
//         <RestaurantMenu />
//       </Provider>
//     </StaticRouter>
//   );

//   await waitFor(() => expect(restaurantMenu.getByTestId("menu")));

//   const addBtn = restaurantMenu.getAllByTestId("addbtn");

//   fireEvent.click(addBtn[0]);
//   fireEvent.click(addBtn[1]);

//   const cart = restaurantMenu.getByTestId("cart");

//   //   expect(cart.innerHTML).toBe("Cart - 1");
//   expect(cart.innerHTML).toBe("Cart - 2");
// });
