import {
  ChangeUserInfoActionType,
  ChangeUserInfoActions,
  LoginUserActions,
  LoginActions,
  SignupActions,
  SignupUserActions,
  LogoutUserActions,
  LogoutActions,
  LoadUserPostsAction,
  LoadUserPostsActions,
  DeleteUserPostActionType,
  DeleteUserPostActions,
} from 'src/types/user';

const initialState = {
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  error: null,
  loading: false,
  isAuthorized: false,
  posts: [],
  totalPostInDB: null,
};

type Action =
  | LoginUserActions
  | SignupUserActions
  | LogoutUserActions
  | LoadUserPostsActions
  | ChangeUserInfoActions
  | DeleteUserPostActions;

export const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LoginActions.loginUser:
    case SignupActions.signupUser:
    case LogoutActions.logoutUser:
    case LoadUserPostsAction.loadUserPost:
    case ChangeUserInfoActionType.pending:
    case DeleteUserPostActionType.pending:
      return {
        ...state,
        loading: true,
      };
    case LoginActions.loginUserSuccess:
    case SignupActions.signupUserSuccess:
      return {
        ...state,
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
    case LogoutActions.logoutUserError:
    case LoadUserPostsAction.loadUserPostError:
    case ChangeUserInfoActionType.rejected:
    case DeleteUserPostActionType.rejected: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case LoadUserPostsAction.loadUserPostSuccess: {
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    }

    case ChangeUserInfoActionType.fulfilled: {
      return {
        ...action.payload,
        ...state,
        loading: false,
      };
    }

    case DeleteUserPostActionType.fulfilled: {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
};
