import React, { useState } from "react";
import styles from "./App.module.scss";
import Card from "./components/Card/Card";
import { CardSize } from "./components/Card/types";
import { CardProps } from "./components/Card/types";
import Home from "./pages/Home/Home";


const App = () => {
    //   const [username, setUsername] = useState("");

    //   const onChange = (value: string) => {
    //     setUsername(value);
    //   };

    return (
        <div className={styles.Container}>
          <Home />
      
    </div>
  );
};

export default App;

