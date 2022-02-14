import { LoadUsersActions, User, UsersActions } from 'src/types/users';

interface UsersInitialState {
  loading: boolean;
  error: null | string;
  users: User[];
  totalUsersInDB: number | null;
}

const initialState: UsersInitialState = {
  error: null,
  loading: false,
  users: [],
  totalUsersInDB: null,
};

export const usersReducer = (state = initialState, action: LoadUsersActions) => {
  switch (action.type) {
    case UsersActions.loadUsers:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case UsersActions.loadUserSuccess:
      return {
        error: false,
        loading: false,
        ...action.payload,
      };
    case UsersActions.loadUsersError:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
