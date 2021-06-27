import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

export default function PrivateRoute(props, { children }) {
  const { currentUser } = useAuth();
  console.log(props.path);
  return (
    <Route
      render={(props) => {
        return currentUser ? <Redirect to="/Items" /> : <Redirect to="/" />;
      }}
    >
      {children}
    </Route>
  );
}
