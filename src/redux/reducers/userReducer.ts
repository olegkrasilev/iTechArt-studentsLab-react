import {
  LoginUserActions,
  LoginActions,
  SignupActions,
  SignupUserActions,
  LogoutUserActions,
  LogoutActions,
} from 'src/types/user';

const initialState = {
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  error: null,
  loading: false,
  isAuthorized: false,
};

export const userReducer = (state = initialState, action: LoginUserActions | SignupUserActions | LogoutUserActions) => {
  switch (action.type) {
    case LoginActions.loginUser:
    case SignupActions.signupUser:
    case LogoutActions.logoutUser:
      return {
        ...state,
        loading: true,
      };
    case LoginActions.loginUserSuccess:
    case SignupActions.signupUserSuccess:
      return {
        ...action.payload,
        loading: false,
        error: null,
        isAuthorized: true,
      };
    case LoginActions.loginUserError:
    case SignupActions.signupUserError:
      return {
        ...state,
        error: action.payload,
      };

    case LogoutActions.logoutUserSuccess:
      return {
        ...state,
        id: null,
        email: null,
        firstName: null,
        lastName: null,
        error: null,
        loading: false,
        isAuthorized: false,
      };
    case LogoutActions.logoutUserError: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};
