import React from 'react';
import Spline from '@splinetool/react-spline';
import styled from "styled-components";


const NoPage = () => {
  return (
    <>
    
    <Spline scene="https://prod.spline.design/buXpsyEWo1XPFneU/scene.splinecode" />
    <Container>
        <h1>404</h1>
        <h2> Oops! That's an error </h2>
        <h4> Page Not Found </h4>
        </Container>
    </>
    
  )
}

export default NoPage;

const Container = styled.div`

position: absolute;
        z-index: 999;
       margin-left: 20%;
        left: 0;
        right: 0;
        top: 260px;
        text-align: center;
        width: 60%;
`