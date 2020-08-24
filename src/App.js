import React, { Fragment } from "react";
import "./style.css";
import Invoice from './components/invoiceForm'
import GlobalStyle from './styled/globalStyle'


export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Invoice />
    </Fragment>    
  );
}
