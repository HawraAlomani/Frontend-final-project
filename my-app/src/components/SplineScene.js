import React from 'react';
import styled from "styled-components";
import Spline from '@splinetool/react-spline';

const SplineContainer= styled.div`
display: block;
`

function SplineScene(){
  return (
    <SplineContainer>
        <Spline scene="https://prod.spline.design/zLW0R4mPPVJpOcO9/scene.splinecode" />
    </SplineContainer>
  );
};

export default SplineScene