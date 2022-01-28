import { LoginUserActions, LoginActions, SignupActions, SignupUserActions } from 'src/types/user';

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

const initialUserState = initialState.user;

export const userReducer = (state = initialState, action: LoginUserActions | SignupUserActions) => {
  switch (action.type) {
    case LoginActions.loginUser:
    case SignupActions.signupUser:
      return {
        ...state,
        user: {
          id: null,
          email: null,
          firstName: null,
          lastName: null,
          loading: true,
          error: null,
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
        ...state,
        user: {
          id: null,
          email: null,
          firstName: null,
          lastName: null,
          error: action.payload,
          loading: false,
          isAuthorized: false,
        },
      };
    default:
      return state;
  }
};
