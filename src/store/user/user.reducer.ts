import { UserData } from "./../../utils/firebase/firebase.utils";
import { AnyAction } from "redux";
import {
  signInSuccess,
  signOutSuccess,
  signOutFailed,
  signInFailed,
  signUpFailed,
} from "./user.action";
import { toast } from "react-toastify";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    toast.success("Sign in Success", {
      position: toast.POSITION.TOP_CENTER,
    });
    return {
      ...state,
      currentUser: action.payload,
    };
  }
  if (signOutSuccess.match(action)) {
    toast.success("Sign Out Success", {
      position: toast.POSITION.TOP_CENTER,
    });
    return {
      ...state,
      currentUser: null,
    };
  }
  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    toast.error(action.payload.message, {
      position: toast.POSITION.TOP_CENTER,
    });
    return { ...state, error: action.payload };
  }

  return state;
};
