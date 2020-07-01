import { Action } from "@ngrx/store";

export const SIGNUP_START = "[Auth] Signup Start";
export const AUTHENTICATE_START = "[Auth] Authenticate Start";
export const AUTHENTICATE_SUCCESS = "[Auth] Authenticate Success";
export const LOGIN_FAIL = "[Auth] Login Fail";
export const LOGOUT = "[Auth] Logout";
export const AUTO_LOGIN = "[Auth] Auto Login";
export const AUTO_LOGOUT = "[Auth] Auto Logout";

export class SignupStart implements Action {
  readonly type = SIGNUP_START;
  constructor(public payload: { email: string; password: string }) {}
}

export class AuthenticateStart implements Action {
  readonly type = AUTHENTICATE_START;
  constructor(public payload: { email: string; password: string }) {}
}

export class AuthenticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS;

  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
      redirect: boolean;
    }
  ) {}
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;

  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export class AutoLogout implements Action {
  readonly type = AUTO_LOGOUT;
  constructor(public payload: { expirationDuration: number }) {}
}

export type AuthActions =
  | SignupStart
  | AuthenticateStart
  | LoginFail
  | AuthenticateSuccess
  | Logout
  | AutoLogin
  | AutoLogout;
