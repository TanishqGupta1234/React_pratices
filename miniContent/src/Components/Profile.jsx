import React, { useContext } from "react";
import UserContext from "../Context/userContext";

function Profile() {
  const { user, setUser } = useContext(UserContext); // ✅ Destructure user

  if (!user) {
    return <div>Please login</div>;
  }

  return <div>Welcome {user.email}</div>;
}

export default Profile;
