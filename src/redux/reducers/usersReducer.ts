import {
  LoadUsersActions,
  User,
  UsersActions,
  GetRequestedUserInfoActions,
  GetRequestedUserInfoType,
} from 'src/types/users';

interface UsersInitialState {
  loading: boolean;
  error: null | string;
  users: User[];
  totalUsersInDB: number | null;
  requestedUserID: null | number;
}

const initialState: UsersInitialState = {
  error: null,
  loading: false,
  users: [],
  totalUsersInDB: null,
  requestedUserID: null,
};

export const usersReducer = (state = initialState, action: LoadUsersActions | GetRequestedUserInfoActions) => {
  switch (action.type) {
    case UsersActions.loadUsers:
    case GetRequestedUserInfoType.pending:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case UsersActions.loadUserSuccess:
      return {
        ...state,
        error: false,
        loading: false,
        ...action.payload,
      };

    case GetRequestedUserInfoType.fulfilled:
      return {
        ...state,
        error: false,
        loading: false,
        requestedUserID: action.payload,
      };

    case UsersActions.loadUsersError:
    case GetRequestedUserInfoType.rejected:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
