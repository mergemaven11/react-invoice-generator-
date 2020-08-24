import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');


  html {
    height: 100%;
    overflow: auto;
  };

  body {
    margin: 0;
    padding: 0;
    background: 
    #001f3f;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    overflow: auto;   
    font-family: 'Quicksand', sans-serif;
}

  input {
    display:block;
    width: 100%;
    margin:10px 0;
    padding:10px;
    background-color: #fafafa;
    border:0;
    box-shadow:0 0 4px rgba(0,0,0,0.3);
    transition: .3s box-shadow;
  }

`

export default GlobalStyle;