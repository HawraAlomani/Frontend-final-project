import React from 'react';
import styled from 'styled-components';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
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
import Img3 from '../images/img3board.png';
import { BiCommentAdd} from "react-icons/bi";
import {useEffect} from 'react';
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Requests = () => {
  useEffect( ()=> {
    toast.warning("You must Login in order to make a request!")}, []);
  const notify = () => toast.warning("Must login to add a request!");
  return (
    <Container>
      <ToastContainer position="top-center"/>
    <MDBCard className='text-center'>
      <ContainerMain>
    <Breadcrumb >
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/requests">
        Requests
      </Breadcrumb.Item>
      <Breadcrumb.Item active>My Requests</Breadcrumb.Item>
    </Breadcrumb>
{/* Start Card */}
    <MDBRow className="row-cols-1 row-cols-md-3 g-4">
      <MDBCol>
        <MDBCard className='h-100'>
            <ContainerIcon  onClick={notify} >
            <MDBCardTitle><BiCommentAdd size={100} color={`#ff8087ff`} /></MDBCardTitle>
            </ContainerIcon>
          <MDBCardFooter>
            <large className='text-muted'>Make Request</large>
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
          <MDBCardFooter>
            <large className='text-muted'>Status: </large> <span class="badge badge-warning">Pending</span>
          </MDBCardFooter>
        </MDBCard>
        </MDBCol>
      </MDBRow>
      {/* End Card */}
    </ContainerMain>
     </MDBCard>
    </Container>
  )
}

export default Requests;

const Container = styled.div`
margin: auto;
width: 75%;
padding: 10px;
padding-top: 50px;

`
const ContainerMain = styled.div`
padding: 20px;
padding-top: 20px;
`
const ContainerIcon = styled.div`
padding-top: 35%;
padding-bottom: 50%;
cursor: pointer;

`