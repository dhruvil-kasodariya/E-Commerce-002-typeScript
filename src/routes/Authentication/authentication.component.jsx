import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignIn from "../../components/sign-in/sign-in.component";
import { AuthenticationContainer } from "./authentication.style.jsx";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
