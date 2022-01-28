import Cookies from 'js-cookie';

export const getAccessJwtToken = () => Cookies.get('jwtAccessToken');

export const setAccessJwtToken = async (jwtAccessToken: string) => {
  // TODO add env file
  Cookies.set('jwtAccessToken', jwtAccessToken, {
    expires: 7,
  });
};

export const getRefreshToken = () => Cookies.get('jwtRefreshToken');

export const setRefreshToken = (jwtRefreshToken: string) => {
  Cookies.set('jwtRefreshToken', jwtRefreshToken, {
    expires: 7,
  });
};
