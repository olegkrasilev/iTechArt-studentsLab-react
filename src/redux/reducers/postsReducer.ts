import { PostsActions, LoadPostsActions } from '../../types/posts';

interface Post {
  postID: null | number;
  title: null | string;
  post: null | string;
  postCreationTime: null | Date;
  firstName: null | string;
  lastName: null | string;
}

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
        ...state.posts,
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
        ...state.posts,
      };
    default:
      return state;
  }
};
