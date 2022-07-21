import React from "react";

import styled from 'styled-components';

import {
  MDBCard,
 
} from "mdb-react-ui-kit";
import { RiAccountPinCircleLine} from "react-icons/ri";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  return (
    <Container>
      <MDBCard className="text-center">
        <MDBCard className="h-100">
          <ContainerIcon>
            <p>
              <RiAccountPinCircleLine size={100} color={`#ff8087ff`} /> Login
            </p>
          </ContainerIcon>
          <FormContainer>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <BtnContainer>
      <Button variant="warning" type="submit">
        Login
      </Button>
      </BtnContainer>
    </Form>
    </FormContainer>
        </MDBCard>
      </MDBCard>
    </Container>
  );
};

export default Login;

const Container = styled.div`
 font-family: "Yeseva One", cursive;
  margin: auto;
  width: 75%;
  padding: 10px;
  padding-top: 50px;
`;

const ContainerIcon = styled.div`
  padding-top: 5%;
  padding-bottom: 5%;
  font-size: 50px;
`;
const FormContainer = styled.div`
text-align: left;
  padding-bottom: 10%;
  padding-left: 35%;
  padding-right: 35%;
`;
const BtnContainer= styled.div`
text-align: center;

`