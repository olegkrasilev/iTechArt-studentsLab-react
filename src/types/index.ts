import { Post } from 'src/types/posts';

export type Posts = {
  user: string;
  title: string;
  post: string;
  postCreationTime: string;
  id: number;
};

export type Users = {
  email: string;
  firstName: string;
  lastName: string;
  id: number;
};

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
  app: {
    user: {
      id: null | number;
      email: null | string;
      firstName: null | string;
      lastName: null | string;
      error: null;
      loading: boolean;
      isAuthorized: boolean;
    };
  };
  posts: {
    error: null;
    loading: boolean;
    posts: Post[];
  };
};
