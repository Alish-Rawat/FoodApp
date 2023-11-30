import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFuntional from "./profileFunctional";
import React from "react";
import UserContext from "../utils/UserContext";

// const About2 = () => {
//   return (
//     <div>
//       <h1>About this page</h1>
//       <p>This is for Practice</p>
//       {/* <Outlet /> */}
//       <ProfileClass name="alish" />
//       <ProfileFuntional name={"ALish"} />
//     </div>
//   );
// };  // Functional Component

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // API call
  }

  render() {
    return (
      <div>
        <h1>About this page</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-xl p-10">
              {user.name} - {user.email}
            </h4>
          )}
        </UserContext.Consumer>

        <p>This is for Practice</p>
        {/* <Outlet /> */}
        {/* <ProfileClass name="alish" /> */}
        <ProfileFuntional name={"ALish"} />
      </div>
    );
  }
}

export default About;
