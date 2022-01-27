export const getAccessJwtToken = () => sessionStorage.getItem('jwtAccessToken');

export const setAccessJwtToken = (jwtAccessToken: string) => sessionStorage.setItem('jwtAccessToken', jwtAccessToken);

export const getRefreshToken = () => sessionStorage.getItem('jwtRefreshToken');

export const setRefreshToken = (token: string) => sessionStorage.setItem('jwtRefreshToken', token);
