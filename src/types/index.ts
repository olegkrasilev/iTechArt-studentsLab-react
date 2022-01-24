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
  accessToken: string;
  refreshToken: string;
  firstName: string;
  lastName: string;
  data: {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  };
};
