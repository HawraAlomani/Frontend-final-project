import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Img4 from "./images/img4toys.png";
import { BsPlusSquareDotted} from "react-icons/bs";
import styled from 'styled-components';

const ToysCat = () => {
  return (
    <>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
      <MDBCol>
        <MDBCard className='h-100'>
            <ContainerIcon>
            <MDBCardTitle><BsPlusSquareDotted size={100} color={`#ff8087ff`} /></MDBCardTitle>
            </ContainerIcon>
          <MDBCardFooter>
            <small className='text-muted'>Make exchange.</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage src={Img4} alt="..." position="top" />
            <MDBCardBody>
              <MDBCardTitle>Set of toys</MDBCardTitle>
              <MDBCardText>
                A nice set of kid's toys that I am looking to exchange it with
                another set of toys since my child is no longer playing with it.
              </MDBCardText>
            </MDBCardBody>
            <span class="badge badge-danger">Condition: Below Average</span>
            <MDBCardFooter>
              <small className="text-muted">Posted 2 days ago</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default ToysCat;
const ContainerIcon = styled.div`
padding-top: 35%;
padding-bottom: 50%;
cursor: pointer;

`
