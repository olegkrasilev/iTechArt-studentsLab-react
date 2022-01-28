import { LoginUserActions, LoginActions } from 'src/types/user';

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

export const userReducer = (state = initialState, action: LoginUserActions) => {
  switch (action.type) {
    case LoginActions.loginUser:
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
      return {
        user: {
          ...action.payload,
          loading: false,
          error: null,
          isAuthorized: true,
        },
      };
    case LoginActions.loginUserError:
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
