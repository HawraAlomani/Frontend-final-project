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
import Img3 from './images/img3board.png';
import { BsPlusSquareDotted} from "react-icons/bs";
import styled from 'styled-components';

const BoardCat = () => {
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
            src={Img3}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Sequence Board Game</MDBCardTitle>
            <MDBCardText>
              This Sequence game is fun, but I am looking to exchange it with anything of a similar value.
            </MDBCardText>
          </MDBCardBody>
          <span class="badge badge-info">Condition: Average</span>
          <MDBCardFooter>
            <small className='text-muted'>Posted 1 day ago</small>
          </MDBCardFooter>
        </MDBCard>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default BoardCat;
const ContainerIcon = styled.div`
padding-top: 35%;
padding-bottom: 50%;
cursor: pointer;

`
