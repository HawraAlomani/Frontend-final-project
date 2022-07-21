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
import Img2 from './images/img2toy.png';
import { BsPlusSquareDotted} from "react-icons/bs";
import styled from 'styled-components';

const OudoorCat = () => {
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
        <MDBCard className='h-100'>
          <MDBCardImage
            src={Img2}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Colorful Ride on Toy</MDBCardTitle>
            <MDBCardText>
              Hello everyone, I am looking to exchange this toddler toy because my son got older.
            </MDBCardText>
          </MDBCardBody>
          <span class="badge badge-success">Condition: Excellent</span>
          <MDBCardFooter>
            <small className='text-muted'>Posted 30 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default OudoorCat;
const ContainerIcon = styled.div`
padding-top: 35%;
padding-bottom: 50%;
cursor: pointer;

`
