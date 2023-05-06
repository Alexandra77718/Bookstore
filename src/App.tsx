import React from "react";
import { Provider } from "react-redux";
import styles from "./App.module.scss";
import Card from "./components/Card/Card";
import { CardSize } from "./components/Card/types";
import { CardProps } from "./components/Card/types";
import Home from "./pages/Home/Home";
import Router from "./pages/Router";

const App = () => {
  return (
    
      <div className={styles.Container}>
        <Router />
      </div>
  
  );
};

export default App;
