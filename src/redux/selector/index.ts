import { AppInitialState } from 'src/types/app';

export const selectAccessToken = (state: AppInitialState) => state?.app.user?.accessToken;

export const selectRefreshToken = (state: AppInitialState) => state?.app.user?.refreshToken;
