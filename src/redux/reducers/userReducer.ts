import { UserAction, UserActions } from 'src/types/user';

const initialState = {
  user: {
    userID: null,
    email: null,
    firstName: null,
    lastName: null,
    accessToken: null,
    refreshToken: null,
    error: null,
    loading: false,
  },
};

export const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case UserActions.fetchUser:
      return {
        ...state,
        user: {
          userID: null,
          email: null,
          firstName: null,
          lastName: null,
          accessToken: null,
          refreshToken: null,
          loading: true,
          error: null,
        },
      };
    case UserActions.fetchUserSuccess:
      return {
        ...state,
        user: action.payload,
      };
    case UserActions.fetchUserError:
      return {
        ...state,
        user: {
          userID: null,
          email: null,
          firstName: null,
          lastName: null,
          accessToken: null,
          refreshToken: null,
          error: action.payload,
          loading: false,
        },
      };
    default:
      return state;
  }
};
