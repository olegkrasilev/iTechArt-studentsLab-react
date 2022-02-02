import {
  LoginUserActions,
  LoginActions,
  SignupActions,
  SignupUserActions,
  LogoutUserActions,
  LogoutActions,
  LoadUserPostsAction,
  LoadUserPostsActions,
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
};

export const userReducer = (
  state = initialState,
  action: LoginUserActions | SignupUserActions | LogoutUserActions | LoadUserPostsActions,
) => {
  switch (action.type) {
    case LoginActions.loginUser:
    case SignupActions.signupUser:
    case LogoutActions.logoutUser:
    case LoadUserPostsAction.loadUserPost:
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
    case LoadUserPostsAction.loadUserPostError: {
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
        posts: action.payload,
      };
    }

    default:
      return state;
  }
};
