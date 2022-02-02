import {
  LoadUsersAction,
  LoadUsersActions,
  LoadUsersErrorAction,
  LoadUsersSuccessAction,
  User,
  UsersActions,
} from '../../types/users';

interface UsersInitialState {
  loading: boolean;
  error: null | string;
  users: User[];
}

const initialState: UsersInitialState = {
  error: null,
  loading: false,
  users: [],
};

export const usersReducer = (state = initialState, action: LoadUsersActions) => {
  switch (action.type) {
    case UsersActions.loadUsers:
      return {
        error: false,
        loading: true,
        users: state.users,
      };
    case UsersActions.loadUserSuccess:
      return {
        error: false,
        loading: false,
        users: action.payload,
      };
    case UsersActions.loadUsersError:
      return {
        error: action.payload,
        loading: false,
        users: state.users,
      };
    default:
      return state;
  }
};
