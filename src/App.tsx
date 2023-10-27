import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { FC, ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "./containers/auth/selectors";
import Header from "./core/header";
import Searchbar from "./features/searchbar";

const App: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUser);
  // TODO: You can access user data and now fetch user's playlists
  console.log(user);

  return (
    <>
      <Header></Header>
      <p>hello app comp</p>
      <Searchbar></Searchbar>
    </>
  );
};

export default App;
