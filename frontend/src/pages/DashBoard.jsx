import React from "react";
import { authUser } from "../context/AuthContext";

function DashBoard() {
  const { user } = authUser();

  return (
    <>
      <div className="text-white">
        <h1>{user.email}</h1>
        <h1>{user.name}</h1>
        <h1>{user.profile}</h1>
        <h1>{user.id}</h1>
      </div>
    </>
  );
}

export default DashBoard;
