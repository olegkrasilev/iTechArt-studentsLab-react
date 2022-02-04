import styled from 'styled-components';

import loginAvif from 'src/pages/login/assets/login-avif.avif';
import loginJpg from 'src/pages/login/assets/login-jpg.jpg';
import loginWebp from 'src/pages/login/assets/login-webp.webp';

export const Wrapper = styled.section`
  display: flex;
  height: 100vh;

  .form__left {
    background-image: url(${loginAvif}), url(${loginWebp}), url(${loginJpg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 50%;

    @media screen and (max-width: 1100px) {
      width: 40%;
    }

    @media screen and (max-width: 900px) {
      width: 30%;
    }

    @media screen and (max-width: 750px) {
      width: 0;
    }
  }

  .form__right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    color: #2d3748;

    @media screen and (max-width: 1100px) {
      width: 70%;
    }

    @media screen and (max-width: 900px) {
      width: 80%;
    }

    @media screen and (max-width: 750px) {
      width: 100%;
    }

    .wrapper__inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 500px;
      width: 100%;
      padding: 2rem;
      border-radius: 20px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      transition: padding 0.5s ease-in-out;
    }

    .wrapper__inner:focus-within {
      transition: padding 0.5s ease-in-out;
      box-shadow: rgba(50, 50, 93, 0.25) 25px 50px 100px 20px, rgba(0, 0, 0, 0.3) 25px 30px 60px 30px;
      padding: 3rem;
    }

    .title {
      align-self: baseline;
      color: #2d3748;
      margin-bottom: 2rem;
      .title__welcome,
      .title__registration {
        font-size: 3rem;
        line-height: 3.5rem;
      }
      span {
        display: block;
        font-weight: normal;
        font-size: 1.6rem;
        line-height: 1.9rem;
      }
    }

    .input {
      margin-bottom: 2.5rem;
      width: 100%;
      input,
      label {
        font-size: 1.6rem;
        background-color: white;
      }
      label {
        padding: 0 1rem;
      }
    }

    .loginBtn {
      padding: 1.5rem;
      margin-bottom: 1rem;
      width: 100%;
    }

    .button {
      font-size: 1.5rem;
    }
  }
`;
