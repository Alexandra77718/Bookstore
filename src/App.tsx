import React from "react";
import styles from "./App.module.scss";
import Router from "./pages/Router";

const App = () => {
  return (
    
      <div className={styles.Container}>
        <Router />
      </div>
  
  );
};

export default App;
