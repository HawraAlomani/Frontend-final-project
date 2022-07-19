import React from "react";
import SplineScene from "./SplineScene";
import styled from "styled-components";

 const MainContainer = styled.div`
  color: #fff;
  background: white;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

 const MainWrapper = styled.div`
  font-family: "Yeseva One", cursive;
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  
`;

const MainRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;
const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 1px;
  grid-area: col1;
`;
const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  
  @media screen and (max-width: 768px){
  max-width: 555px;
  height: 100%;
  width: 100px;
  margin: 0 0 100px -40%;
  }
`;

const TextWrapper = styled.div`
  max-width: 700px;
  padding-top: 0;
  padding-bottom: 60px;
`;
const TopLine = styled.p`
  color: #000000;
  background-color: #ff8087ff;
  padding: 5px 10px;
  width: fit-content;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  transition: 0.3s;
  &:hover {
    color: #ff8087ff;
    background: none;
  }
`;

const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: black;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
const Subtitle = styled.p`
  border-left: 5px solid #c3c3c3;
  padding-left: 20px;
  max-width: 400px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: black;
`;



const MainSection = () => {
  return (
    <>
      <MainContainer id={'main'}>
        <MainWrapper>
          <MainRow>
            <Column1>
              <TextWrapper>
                <TopLine>Toys Exchange</TopLine>
                <Heading> Our dreams have become true. </Heading>
                <Subtitle> New toy, game, and adventure for every exchange. </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <SplineScene/>
            </Column2>
          </MainRow>
        </MainWrapper>
      </MainContainer>
    </>
  );
};

export default MainSection;