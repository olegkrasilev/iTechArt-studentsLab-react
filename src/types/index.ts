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

export type Response = {
  status: string;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  data: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
};

export type LoginResponse = {
  status: string;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  accessToken: string;
  refreshToken: string;
};

export type Store = {
  app: {
    user: {
      id: null;
      email: null;
      firstName: null;
      lastName: null;
      error: null;
      loading: boolean;
      isAuthorized: boolean;
    };
  };
};
