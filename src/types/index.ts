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
    error: null;
    loading: boolean;
    isAuthorized: boolean;
    posts: { title: string; post: string; postCreationTime: Date; id: number }[];
  };
  posts: {
    error: null | string;
    loading: boolean;
    posts: Post[];
  };
  users: {
    error: null | string;
    loading: boolean;
    users: User[];
  };
};
