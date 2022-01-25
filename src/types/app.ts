export interface AppInitialState {
  app: {
    error: null | string;
    loading: boolean;
  };
  user: {
    userID: null | string;
    email: null | string;
    firstName: null | string;
    lastName: null | string;
    accessToken: null | string;
    refreshToken: null | string;
  };
}
