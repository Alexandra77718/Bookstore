import React, { useState, useEffect, useMemo } from "react";
import styles from "./Account.module.scss";
import Title from "src/components/Title";
import Input from "src/components/Input";
import classNames from "classnames";
import Button from "src/components/Button";
import { ButtonType } from "src/utils/@globalTypes";
import { NavLink, useNavigate } from "react-router-dom";
import { RoutesList } from "../Router";
import { BackArrowIcon } from "src/assets/icons/BackArrowIcon";
import { useDispatch } from "react-redux";


const Account = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [newPasswordTouched, setNewPasswordTouched] = useState(false);
  const [confirmNewPasswordTouched, setConfirmNewPasswordTouched] =
    useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

  const onChangeName = (value: string) => {
    setName(value);
  };
  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };
  const onChangeNewPassword = (value: string) => {
    setNewPassword(value);
  };
  const onChangeConfirmNewPassword = (value: string) => {
    setConfirmNewPassword(value);
  };

  const onBlurName = () => {
    setNameTouched(true);
  };
  const onBlurEmail = () => {
    setEmailTouched(true);
  };
  const onBlurPassword = () => {
    setPasswordTouched(true);
  };
  const onBlurNewPassword = () => {
    setNewPasswordTouched(true);
    };
    const onBlurConfirmNewPassword = () => {
        setConfirmNewPasswordTouched(true);
    };
    
    // const onSaveChangesClick = () => {
    //     dispatch(
    //         saveChanges({
    //         data: { userData: name, email, password },
    //         callback: () => navigate(RoutesList.SignIn),
    //       })
    //     );
    //   };

  useEffect(() => {
    if (newPassword !== confirmNewPassword) {
      setPasswordError("Passwords must match");
    } else if (password.length === 0 || newPassword.length === 0) {
      setPasswordError("Password is required field");
    } else {
      setPasswordError("");
    }
  }, [newPassword, password]);

  const isValid = useMemo(() => {
    return passwordError.length === 0;
  }, [passwordError]);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.back}>
          <BackArrowIcon />
        </div>
        <Title title="Account" />
        <div className={styles.title}>{"profile"}</div>
        <div className={styles.inputContainer}>
          <Input
            value={name}
            onChange={onChangeName}
            type={"text"}
            title="Name"
            placeholder="Anton Markov"
          />
          <Input
            value={email}
            onChange={onChangeEmail}
            type={"email"}
            title="Email"
            placeholder="a.markov@gmail.com"
          />
        </div>
        <div className={styles.title}>{"password"}</div>
        <div className={styles.inputContainer}>
          <Input
            value={password}
            onChange={onChangePassword}
            type={"password"}
            title="Password"
            placeholder="Your password"
            // errorText={passwordError}
          />
        </div>

        <div className={styles.inputContainer}>
          <Input
            value={newPassword}
            onChange={onChangeNewPassword}
            type={"password"}
            title="New Password"
            placeholder="New password"
          />
          <Input
            value={confirmNewPassword}
            onChange={onChangeConfirmNewPassword}
            type={"password"}
            title="Confirm New Password"
            placeholder="Confirm your password"
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button
                  title={"Save changes"}
                //   onSaveChangesClick
          onClick={() => {}}
          type={ButtonType.Primary}
          className={styles.button}
        />
        <Button
          title={"cancel"}
          onClick={() => {}}
          type={ButtonType.Primary}
          className={styles.buttonWhite}
        />
      </div>
    </div>
  );
};

export default Account;
