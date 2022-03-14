import Cookies from 'js-cookie';
import { addMinutes, addDays } from 'date-fns';

export const getAccessJwtToken = () => Cookies.get('jwtAccessToken');

export const setAccessJwtToken = async (jwtAccessToken: string) => {
  // TODO add env file
  Cookies.set('jwtAccessToken', jwtAccessToken, {
    expires: addMinutes(new Date(), 10),
    sameSite: 'Strict',
    secure: true,
  });
};

export const getRefreshToken = () => Cookies.get('jwtRefreshToken');

export const setRefreshToken = (jwtRefreshToken: string) => {
  Cookies.set('jwtRefreshToken', jwtRefreshToken, {
    expires: addDays(new Date(), 30),
    sameSite: 'Strict',
    secure: true,
  });
};
