import { PostsActions, LoadPostsActions, Post } from 'src/types/posts';

interface PostsInitialState {
  loading: boolean;
  error: null | string;
  posts: Post[];
}

const initialState: PostsInitialState = { loading: false, error: null, posts: [] };

export const postsReducer = (state = initialState, action: LoadPostsActions) => {
  switch (action.type) {
    case PostsActions.loadPosts:
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
      return {
        error: action.payload,
        loading: false,
        posts: state.posts,
      };
    default:
      return state;
  }
};
