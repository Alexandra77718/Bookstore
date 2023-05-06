import React, { useState } from "react";
import styles from "./SignUp.module.scss";
import Title from "src/components/Title";
import Input from "src/components/Input";
import classNames from "classnames";
import Button from "src/components/Button";
import { ButtonType } from "src/utils/@globalTypes";
import { NavLink } from "react-router-dom";
import { RoutesList } from "../Router";
import Tabs from "src/components/Tabs/Tabs";
enum TabsNames {
  Description,
  Authors,
  Reviews,
  SignIn,
  SignUp,
}

enum TabsBlock {
  Description,
  SignIn,
}

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };
  const onChangeName = (value: string) => {
    setName(value);
  };
  const onChangeConfirmPassword = (value: string) => {
    setConfirmPassword(value);
  };
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
//   const onSignUpClick = () => {
//     dispatch(
//       signUpUser({
//         data: { username: name, email, password },
//         callback: () => navigate(RoutesList.SignIn),
//       })
//     );
//   };
  return (
    <div className={styles.container}>
      <Tabs
        title="Sign In"
        key={TabsNames.SignIn}
        tabsBlock={TabsBlock.SignIn}
      />
      <div className={styles.inputContainer}>
        <Input
          value={name}
          onChange={onChangeEmail}
          type={"text"}
          title="Name"
          placeholder="Your name"
        />
        <Input
          value={email}
          onChange={onChangeEmail}
          type={"text"}
          title="Email"
          placeholder="Your email"
        />
        <Input
          value={password}
          onChange={onChangeEmail}
          type={"text"}
          title="Password"
          placeholder="Your password"
        />
        <Input
          value={password}
          onChange={onChangeEmail}
          type={"text"}
          title="Confirm password"
          placeholder="Confirm your password"
        />
        <div className={styles.button}>
          <Button
            title={"Sign Up"}
            onClick={() => {}}
            type={ButtonType.Primary}
          />
        </div>
      </div>
    </div>
  );
};

export default SingUp;
