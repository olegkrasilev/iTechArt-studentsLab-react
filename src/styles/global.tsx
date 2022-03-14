import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
/* https://dev.to/hankchizljaw/a-modern-css-reset-6p3 */

/* Box sizing rules */
body {
  font-family: 'Roboto', sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove list styles on ul, ol elements with a class attribute */

.reset-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */

html {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  height: 100%;
  line-height: 1.5;
  text-rendering: optimizeSpeed;
}

/* Include a default scroll-margin-top value for any element with an id attribute. */
[id] {
  scroll-margin-top: 2ex;
}

/* Make images easier to work with */
img {
  max-width: 100%;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select,
address {
  font: inherit;
}

label {
  cursor: pointer;
}

a {
  text-decoration: none;
}

textarea {
  resize: vertical;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}

/* https://www.youtube.com/watch?v=kNGYuTelE3E reset styles */

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}

/* reset iOS styling your input fields */

input[type='text'],
input[type='button'],
input[type='submit'],
input[type='email'],
input[type='number'],
input[type='password'],
textarea {
  -webkit-appearance: none;
  border-radius: 0;
}

/* reset button styles */

.reset-btn {
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

html {
  font-size: 62.5%;
  /* 1 rem = 10px; 10px/16px = 62.5% */
}

@media only screen and (max-width: 900px) {
  html {
    font-size: 50%;
    /* 1 rem = 8px, 8/16 = 50% */
  }
}

@media only screen and (max-width: 1200px) {
  html {
    font-size: 56.25%;
    /* 1 rem = 9px, 9/16 = 50% */
  }
}

@media only screen and (min-width: 2000px) {
  html {
    font-size: 75%;
  }
  /* 1rem = 12px, 12/16 = 75% */
}

#root {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

main {
  flex: 1 1 auto;
}
`;
