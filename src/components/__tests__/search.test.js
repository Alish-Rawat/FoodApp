// // import "@testing-library/jest-dom";
// import { fireEvent, render, waitFor } from "@testing-library/react";
// import Body from "../Body";
// import store from "../../utils/store";
// import { Provider } from "react-redux";
// import { StaticRouter } from "react-router-dom/server";
// import { Restaurant_data } from "../../mocks/data";

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(Restaurant_data);
//     },
//   });
// });

// test("Shimmer should load on home page", () => {
//   const body = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Body />
//       </Provider>
//     </StaticRouter>
//   );
//   //   console.log(body);

//   const shimmer = body.getByTestId("shimmer");

//   expect(shimmer.children.length).toBe(10);

//   // console.log(shimmer);
// });

// test("Restaurants should load on Homepage", async () => {
//   const body = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Body />
//       </Provider>
//     </StaticRouter>
//   );
//   //   // console.log(body);

//   // await new Promise((resolve) => setTimeout(resolve, 1000 * 10));
//   await waitFor(() => expect(body.getByTestId("inputt")));

//   const resList = body.getByTestId("res-list");

//   expect(resList.children.length).toBe(20);

//   //   // console.log(shimmer);
// });

// test("Restaurants should load on Homepage", async () => {
//   const body = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Body />
//       </Provider>
//     </StaticRouter>
//   );

//   await waitFor(() => expect(body.getByTestId("search-btn")));

//   const input = body.getByTestId("inputt");

//   fireEvent.change(input, {
//     target: {
//       value: "pizza",
//     },
//   });

//   const searchBtn = body.getByTestId("search-btn");

//   fireEvent.click(searchBtn);

//   const resList = body.getByTestId("res-list");

//   expect(resList.children.length).toBe(2);
// });
