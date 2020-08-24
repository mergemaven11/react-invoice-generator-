import  styled  from  'styled-components';



export const Container = styled.div`
    background-color: #fff;
    padding: 30px 50px;
    margin-top: 30px;
    margin-bottom: 30px;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
`;

export const FormTitle = styled.h4`
    margin: 50px 0 30px 0;
    font-size: 28px;
    font-weight: 200;

`;

export const MainTitle = styled.h1`
    text-align: center;
    margin-bottom: 30px;

`;


// .form-container {
//     background-color: #fff;
// }

export const Button = styled.button` 
  margin-top: 45px;
  width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #91C9FF;
  outline: none;
  transition: 1s ease-in-out;
  color: green;

`

// .submit-button:hover {
//     background-color: #bc8f8d;
//     border-color: #9c7472;
//     color: #fff;
// }

// .submit-button:focus {
//   border-color: #9c7472;
//   box-shadow: none;
// }

// .validate-warning {
//     border-bottom: 1px solid #a8534e;
// }

// .validate-text {
//     display: none;
//     color: #a8534e !important;
// }

// .visible {
//     display: block;
// }

export default {Container, FormTitle, MainTitle, Button};