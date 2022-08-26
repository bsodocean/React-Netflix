import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../Components/Context/auth";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default Protected;
