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
import Img1 from './images/img1PS.png';
import { BsPlusSquareDotted} from "react-icons/bs";
import styled from 'styled-components';

const VideoCat = () => {
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
            src={Img1}
            alt='...'
            position='top'
            
          />
          <MDBCardBody>
            <MDBCardTitle>Used Playstation 1</MDBCardTitle>
            <MDBCardText>
                I have this PS 1 ready for exchange with another gaming console.
            </MDBCardText>
          </MDBCardBody>
          <span class="badge badge-success">Condition: Good</span>
          <MDBCardFooter>
            <small className='text-muted'>Posted 3 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default VideoCat;
const ContainerIcon = styled.div`
padding-top: 35%;
padding-bottom: 50%;
cursor: pointer;

`
