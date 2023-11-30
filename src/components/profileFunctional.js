import { useState } from "react";

const ProfileFunctional = (props) => {
  const [count, setcount] = useState(2);
  return (
    <div>
      {/* <h2>Profile Functional</h2> */}
      <h3>{props.name} Functional </h3>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setcount(2 + 2 + 4);
        }}
      >
        Btn
      </button>
    </div>
  );
};
export default ProfileFunctional;
