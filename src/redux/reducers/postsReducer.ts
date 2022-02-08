import {
  PostsActions,
  LoadPostsActions,
  Post,
  EditPostActions,
  EditPostActionType,
  RequestPostActions,
  RequestPostActionType,
} from 'src/types/posts';

export interface RequestedPost {
  post: string | undefined;
  title: string | undefined;
  postCreationTime: Date | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
}

interface PostsInitialState {
  loading: boolean;
  error: null | string;
  posts: Post[];
  requestedPost: RequestedPost;
}

const initialState: PostsInitialState = {
  loading: false,
  error: null,
  posts: [],
  requestedPost: {
    post: undefined,
    title: undefined,
    postCreationTime: undefined,
    firstName: undefined,
    lastName: undefined,
    email: undefined,
  },
};

export const postsReducer = (state = initialState, action: LoadPostsActions | EditPostActions | RequestPostActions) => {
  switch (action.type) {
    case PostsActions.loadPosts:
    case EditPostActionType.pending:
    case RequestPostActionType.pending:
      return {
        ...state,
        error: false,
        loading: true,
        posts: state.posts,
      };
    case PostsActions.loadPostsSuccess:
      return {
        ...state,
        error: false,
        loading: false,
        posts: action.payload,
      };
    case PostsActions.loadPostsError:
    case EditPostActionType.rejected:
    case RequestPostActionType.rejected:
      return {
        error: action.payload,
        loading: false,
        posts: state.posts,
      };
    case EditPostActionType.fulfilled:
      return {
        error: false,
        loading: false,
        posts: state.posts,
      };

    case RequestPostActionType.fulfilled:
      return {
        ...state,
        error: false,
        loading: false,
        requestedPost: action.payload,
      };

    default:
      return state;
  }
};
