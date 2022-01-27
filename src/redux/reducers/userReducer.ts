import { UserAction, UserActions } from 'src/types/user';

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

export const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case UserActions.fetchUser:
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
    case UserActions.fetchUserSuccess:
      return {
        user: {
          ...action.payload,
          loading: false,
          error: null,
          isAuthorized: true,
        },
      };
    case UserActions.fetchUserError:
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
