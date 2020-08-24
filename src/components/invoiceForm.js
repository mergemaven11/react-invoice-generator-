import React from 'react';
import { useFormState } from 'react-use-form-state';
import styled  from 'styled-components';
import { Container, FormTitle, MainTitle, Button } from '../styled/styledForm';

function Invoice({ onSubmit }) {

  const [companyForm, {company, billTo, billFrom, yourName}] = useFormState();
  const [billForm, {text, item, desc, qty, up, disc, total}] = useFormState();

  function handleSubmit(e){
    console.log('Something')
  }

  function calculateTotal({ up,  qty, disc}){
    console.log('something')
  }

  return(
    <Container >
    <header>
      <MainTitle> Invoice Form </MainTitle>
    </header>

      <form onSubmit={handleSubmit}>
        <FormTitle>Billing Details: </FormTitle> 

          <label>Company Name</label>
          <input {...text('company')} placeholder="Company Name" required/>
          <input {...text('billTo')} placeholder="Company Address" required />
          <label>Your info</label>
          <input {...text('yourName')} placeholder="Your Name" reaquired />
          <input {...text('billFrom')} placeholder=" Your Billing Address" required />
          
          <FormTitle>Invoice Details: </FormTitle> 
          <label>Item #</label>
          <input {...text('item')} placeholder="Item Number"  required />
          <label>Description</label>
          <input {...text('desc')} placeholder="Your Name"  required />
          <label>Qty</label>
          <input {...text('qty')} placeholder="Quantity"  required />
          <label>Unit Price</label>
          <input {...text('up')} placeholder="Unit Price"  required />
          <label>Discount</label>
          <input {...text('disc')} placeholder="Discount"  required />
          <label>Total</label>
          <input {...text('total')} placeholder="Total amount due"  required />

        <Button>Submit</Button>
    </form>
    </ Container>
  )
}


export default Invoice;

// Testing out this cool form state library I found on GitHub https://github.com/wsmd/react-use-form-state



