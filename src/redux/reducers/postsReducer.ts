import { PostsActions, LoadPostsActions, Post, EditPostActions, EditPostActionType } from 'src/types/posts';

interface PostsInitialState {
  loading: boolean;
  error: null | string;
  posts: Post[];
}

const initialState: PostsInitialState = { loading: false, error: null, posts: [] };

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
