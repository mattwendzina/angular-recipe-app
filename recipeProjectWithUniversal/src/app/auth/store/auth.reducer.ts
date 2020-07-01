import * as AuthActions from "./auth.actions";
import { User } from "./../user.model";

export interface State {
  user: User;
  authError: string;
  isLoading: boolean;
}

const initialState = {
  user: null,
  authError: null,
  isLoading: false,
};

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.AUTHENTICATE_SUCCESS:
      const user = new User(
        action.payload.email,
        action.payload.userId,
        action.payload.token,
        action.payload.expirationDate
      );
      return {
        ...state,
        user: user,
        authError: null,
        isLoading: false,
        isLoggedIn: true,
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    case AuthActions.AUTHENTICATE_START:
    case AuthActions.SIGNUP_START:
      return {
        ...state,
        authError: null,
        isLoading: true,
      };
    case AuthActions.LOGIN_FAIL:
      return {
        ...state,
        user: null,
        isLoading: false,
        authError: action.payload,
      };
    case AuthActions.AUTO_LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
