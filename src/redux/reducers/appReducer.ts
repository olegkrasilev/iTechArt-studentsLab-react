import { UserAction, UserActions } from 'src/types/user';
import { AppInitialState } from 'src/types/app';

const initialState: AppInitialState = {
  user: {
    userID: null,
    email: null,
    firstName: null,
    lastName: null,
  },
  app: {
    error: null,
    loading: false,
  },
};

export const appReducer = (state = initialState, action: UserAction): AppInitialState => {
  switch (action.type) {
    case UserActions.fetchUser:
      return {
        app: { loading: true, error: null },
        user: {
          userID: null,
          email: null,
          firstName: null,
          lastName: null,
        },
      };
    case UserActions.fetchUserSuccess:
      return {
        app: { loading: false, error: null },
        user: action.payload,
      };
    case UserActions.fetchUserError:
      return {
        app: { loading: false, error: action.payload },
        user: {
          userID: null,
          email: null,
          firstName: null,
          lastName: null,
        },
      };
    default:
      return state;
  }
};
