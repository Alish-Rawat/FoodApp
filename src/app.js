/***
 * Created a Server
 * HMR = Hot module Replacement
 * Filer Watcher algorith - C++
 * Bundling
 * Minify
 * Cleaning our Code
 * Dev and PRoduction Build
 *  Super Fast build algorithm
 * image optimization
 * Caching while development
 * Compress
 * Compatble with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree Shaking - Removing un-wanted code
 *
 */

/* import React from "react";
 import ReactDOM from "react-dom/client"; */

/* const h1 = React.createElement(
  "h1",
  { id: "h1", style: { color: "blue" }, key: "h1" },
  "heading using parcel"
); */
// console.log(h1);

// React.createElement => Object => HTML(DOM)

/* const h2 = React.createElement("h2", { id: "h2", key: "h2" }, "heading Twoo"); */

// const container = React.createElement("div", { id: "container" }, [
//   React.createElement("h1", {}, "heading using parcel"),
//   React.createElement("ul", {}, [
//     React.createElement("li", {}, "1"),
//     React.createElement("li", {}, "2"),
//   ]),
// ]);  // Chaining Method which we will not use //

//
/*const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Namsate REact from using react"
); */

// JSX = it is not HTML in Javascript, Its a HTML like syntax,

/* const heading2 = (
  <h1 id="title" key="h2" className="heading">
  Heading 2
  </h1>
  ); */ // React Element

// const jsx = (
//   <div
//     style={{
//       backgroundColor: "red",
//       color: "white",
//     }}
//   >
//     <h1>sd</h1>
//     <h1>gggg</h1>
//   </div>
// );

// const jsx = (
//   <React.Fragment>
//     <h1>sd</h1>
//     <h1>gggg</h1>
//   </React.Fragment>
// );

/**
      Header
         -Logo
         -Nav Items(Right Side)
         -Cart
      Body
         -SearchBar
         -RestrauntList
           -RestaurantCard
             -image
             -name
             -rating
             -cuisnes
      Footer       
         - links
         - copyright
         */

//   <h1 id="title" key="h3" className="heading">
//     Food Villa
//   </h1>
// );
//-- React Component --//
// Functional = Javascript function
//  - Name of Component starts with Capital letter
//  <Title></Title>  , <Title/> , {Title()}

/*const BurgerKing = {
  name: "Burger King",
  image:
    "https://insanelygoodrecipes.com/wp-content/uploads/2020/02/Burger-and-Fries.jpg",
  cusines: ["Burger", "American"],
  rating: "4.3",
}; */

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Contact from "./components/contact";
import Profile from "./components/profileFunctional";
import ProfileClass from "./components/ProfileClass";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LogIn from "./components/logIn";
import { lazy, Suspense, useState } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
// import Instamart from "./components/instamart";

const Instamart = lazy(() => import("./components/instamart"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userA, setUserA] = useState({
    name: "Alish Rawat",
    email: "supportalish@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: userA,
          setUser: setUserA,
        }}
      >
        {/* <React.Fragment> */}
        <Header />

        {/* <About />
      <Body />
    <Contact /> */}
        <Outlet />
        <Footer />
        {/* </React.Fragment> */}
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/FoodApp",
        element: (
          <Body user={{ name: "Alish", email: "rawtalish@gmail.com" }} />
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h2>Loading.....</h2>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />,
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
