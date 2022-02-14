import { RequestedPost } from 'src/redux/reducers/postsReducer';
import { User } from 'src/types/users';
import { Post } from 'src/types/posts';

export type LoginResponse = {
  data: {
    status: string;
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    accessToken: string;
    refreshToken: string;
  };
};

export type SignupResponse = LoginResponse;

export type Store = {
  user: {
    id: null | number;
    email: null | string;
    firstName: null | string;
    lastName: null | string;
    error: null | boolean;
    loading: boolean;
    isAuthorized: boolean;
    posts: { title: string; post: string; postCreationTime: Date; id: number }[];
    totalPostInDB: null | number;
  };
  posts: {
    error: null | string;
    loading: boolean;
    posts: Post[];
    totalPostInDB: null | number;
    requestedPost: RequestedPost;
  };
  users: {
    error: null | string;
    loading: boolean;
    users: User[];
  };
};
