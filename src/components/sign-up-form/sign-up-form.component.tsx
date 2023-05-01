import { useState, FormEvent, ChangeEvent } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { signUpStart } from "../../store/user/user.action";
import { SignUpContainer } from "./sign-up-form.style";
const initialUserData = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [userData, setUserData] = useState(initialUserData);
  const { displayName, email, password, confirmPassword } = userData;

  const dispatch = useDispatch();

  const resetUserData = () => {
    setUserData(initialUserData);
  };

  const handleFormFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetUserData();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Cannot create user,email already in use");
      } else {
        console.log("user creation encountered an error ", error);
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>Create new account</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleFormFieldChange}
          name="displayName"
          value={displayName}
          required
        />
        <FormInput
          label="E-mail"
          type="email"
          onChange={handleFormFieldChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleFormFieldChange}
          name="password"
          value={password}
          required
        />
        <FormInput
          label="Confirme Password"
          type="password"
          onChange={handleFormFieldChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <Button children="SIGN-UP" type="submit" />
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
