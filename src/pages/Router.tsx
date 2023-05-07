import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PagesContainer from "src/pages/PagesContainer/PagesContainer";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword/ResetPassword";
import Confirm from "./Confirm";
import NewPassword from "./NewPassword/NewPassword";
import Account from "./Account/Account";
import Favorites from "./Favorites/Favorites";
import YourCart from "./YourCart/YourCart";

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
  Default = "*",
}

const Router = () => {
  const isLoggedIn = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.Home} element={<PagesContainer />}>
          <Route path={RoutesList.Home} element={<Home />} />
          <Route path={RoutesList.SignIn} element={<SignIn />} />
          <Route path={RoutesList.SignUp} element={<SignUp />} />
          <Route path={RoutesList.Reset} element={<ResetPassword />} />
          <Route path={RoutesList.Confirm} element={<Confirm />} />
          <Route path={RoutesList.NewPassword} element={<NewPassword />} />
          <Route path={RoutesList.Account} element={<Account />} />
          <Route path={RoutesList.Cart} element={<YourCart />} />

          {/* <Route
            path={RoutesList.Cart}
            element={
              isLoggedIn ? <Cart /> : <Navigate to={RoutesList.SignIn} />
            }
          /> */}
          <Route
            path={RoutesList.Favorites}
            element={
              isLoggedIn ? <Favorites /> : <Navigate to={RoutesList.SignIn} />
            }
          />
          <Route path={RoutesList.Default} element={<div>404 NOT FOUND</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
