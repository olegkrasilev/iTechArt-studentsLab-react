import { PostsActions, LoadPostsActions, Post, EditPostActions, EditPostActionType } from 'src/types/posts';

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

export const postsReducer = (state = initialState, action: LoadPostsActions | EditPostActions) => {
  switch (action.type) {
    case PostsActions.loadPosts:
    case EditPostActionType.pending:
      return {
        error: false,
        loading: true,
        posts: state.posts,
      };
    case PostsActions.loadPostsSuccess:
      return {
        error: false,
        loading: false,
        posts: action.payload,
      };
    case PostsActions.loadPostsError:
    case EditPostActionType.rejected:
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

    default:
      return state;
  }
};
