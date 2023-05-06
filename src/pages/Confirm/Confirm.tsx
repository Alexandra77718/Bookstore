import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Confirm.module.scss";
import Button from "../../components/Button";
import { ButtonType } from "../../utils/@globalTypes";
import Input from "../../components/Input";
import Title from "src/components/Title/Title";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const onChangeEmail = (value: string) => {
    setEmail(value);
  };

  return (
      <div className={styles.container}>
          <div className={styles.title}>{'reset password' }</div> 
      <div className={classNames(styles.Text)}>
        You will receive an email <b>example@gmail.com</b> with a link to reset
        your password!</div>
        <div className={styles.inputContainer}>
          <Input
            value={email}
            onChange={onChangeEmail}
            type={"text"}
            title="Email"
            placeholder="Your email"
          />
        </div>
        <div className={styles.button}>
          <Button
            title={"Go to home"}
            onClick={() => {}}
            type={ButtonType.Primary}
          />
        </div>
      
    </div>
  );
};

export default ResetPassword;