import {
  LoginUserActions,
  LoginActions,
  SignupActions,
  SignupUserActions,
  LogoutUserActions,
  LogoutActions,
} from 'src/types/user';

const initialState = {
  user: {
    id: null,
    email: null,
    firstName: null,
    lastName: null,
    error: null,
    loading: false,
    isAuthorized: false,
  },
};

export const userReducer = (state = initialState, action: LoginUserActions | SignupUserActions | LogoutUserActions) => {
  switch (action.type) {
    case LoginActions.loginUser:
    case SignupActions.signupUser:
    case LogoutActions.logoutUser:
      return {
        user: {
          ...state.user,
          loading: true,
        },
      };
    case LoginActions.loginUserSuccess:
    case SignupActions.signupUserSuccess:
      return {
        user: {
          ...action.payload,
          loading: false,
          error: null,
          isAuthorized: true,
        },
      };
    case LoginActions.loginUserError:
    case SignupActions.signupUserError:
      return {
        user: {
          ...state.user,
          error: action.payload,
        },
      };

    case LogoutActions.logoutUserSuccess:
      return {
        user: {
          ...state.user,
          id: null,
          email: null,
          firstName: null,
          lastName: null,
          error: null,
          loading: false,
          isAuthorized: false,
        },
      };
    case LogoutActions.logoutUserError: {
      return {
        user: {
          ...state.user,
          error: action.payload,
          loading: false,
        },
      };
    }
    default:
      return state;
  }
};
