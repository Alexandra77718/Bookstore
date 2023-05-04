import React, { useState } from "react";
import styles from "./SignIn.module.scss";
import Title from "src/components/Title";
import Input from "src/components/Input";
import classNames from "classnames";
import Button from "src/components/Button";
import { ButtonType } from "src/utils/@globalTypes";
import { NavLink } from "react-router-dom";
import { RoutesList } from "../Router";

const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  return (
    <div>
      <div className={classNames(styles.title)}>
        <Title title={"Sing In"} />
      </div>
      <div className={styles.wrapper}>
        <div className={classNames(styles.inputContainer)}>
          <Input
            value={email}
            onChange={onChangeEmail}
            type={"text"}
            title="Email"
            placeholder="Your email"
          />
          <div className={styles.button}>
            <Button
              title={"Sign In"}
              onClick={() => {}}
              type={ButtonType.Primary}
            />
          </div>
          <div className={classNames(styles.singUp)}>
            <NavLink to={RoutesList.SignUp} className={styles.navButton}>
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
