import React from "react";
import { authUser } from "../context/AuthContext";
import Navbar from "../components/component/Navbar";

function DashBoard() {
  const { user } = authUser();

  return (
    <>
      <Navbar />
    </>
  );
}

export default DashBoard;
