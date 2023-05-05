import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PagesContainer from "src/pages/PagesContainer/PagesContainer";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword/ResetPassword";
import Confirm from './Confirm';

export enum RoutesList {
  Home = "/",
  Search = "/search",
  Book = "/search/:{isbn13}",
  Cart = "/cart",
  Favorites = "/favorites",
  Account = "/account",
  SignIn = "/sign-in",
  SignUp = "/sign-up",
  Reset = "/reset",
  Confirm = "/reset/confirm",
  NewPassword = "/reset/new-password",
  ChangedPassword = "/sign-in/success",
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.Home} element={<PagesContainer />}>
          <Route path={RoutesList.Home} element={<Home />} />
          <Route path={RoutesList.SignIn} element={<SignIn />} />
          <Route path={RoutesList.SignUp} element={<SignUp />} />
          <Route path={RoutesList.Reset} element={<ResetPassword />} />
          <Route path={RoutesList.Confirm} element={<Confirm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
