import React, {useContext} from "react";
import { AuthContext } from "../context/AuthContext.jsx";

function Profile() {
	const {user} = useContext(AuthContext)

  return (
    <div>
      <h1>Profile</h1>
      <h1>Username: {user.username}</h1>
    </div>
  );
}

export default Profile;
