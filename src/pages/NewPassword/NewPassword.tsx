import React, { useState } from "react";
import styles from "./NewPassword.module.scss";
import Title from "src/components/Title";
import Input from "src/components/Input";
import classNames from "classnames";
import Button from "src/components/Button";
import { ButtonType } from "src/utils/@globalTypes";
import { NavLink } from "react-router-dom";
import { RoutesList } from "../Router";

const NewPassword = () => {
  const [password, setPassword] = useState("");

  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  return (
      <div className={styles.container}>
        <div className={styles.title}>{"new password"}</div>
          <div className={styles.inputContainer}>
            <Input
            value={password}
            onChange={onChangePassword}
            type={"text"}
            title="Password"
            placeholder="Your password"
          />
          <Input
            value={password}
            onChange={onChangePassword}
            type={"text"}
            title="Confirm Password"
            placeholder="Confirm your password"
          />
          <div className={styles.button}>
            <Button
              title={"Set Password"}
              onClick={() => {}}
              type={ButtonType.Primary}
            />
          </div>  
          </div>
          
        </div>
  );
};

export default NewPassword;