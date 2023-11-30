// import { render } from "@testing-library/react";
// import Header from "../Header";
// import { Provider } from "react-redux";
// import store from "../../utils/store";
// import { StaticRouter } from "react-router-dom/server";

// test("Logo should laod on rendering header", () => {
//   const header = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Header />;
//       </Provider>
//     </StaticRouter>
//   );
//   //   console.log(header);
//   const logo = header.getAllByTestId("logo");
//   //   console.log(logo[0]);
//   expect(logo[0].src).toBe("http://localhost/dummy.jpg");
// });

// test("Online status should be online", () => {
//   const header = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Header />;
//       </Provider>
//     </StaticRouter>
//   );
//   //   console.log(header);
//   const onlineStatus = header.getByTestId("online-status");
//   //   console.log(logo[0]);
//   expect(onlineStatus.innerHTML).toBe("online");

//   //for online check
// });
// test("Cart should have 0 items", () => {
//   const header = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Header />;
//       </Provider>
//     </StaticRouter>
//   );
//   //   console.log(header);
//   const cart = header.getByTestId("cart");
//   //   console.log(logo[0]);
//   expect(cart.innerHTML).toBe("Cart - 0");

//   //for online check
// });
