import React from "react";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";

const AboutContainer = styled.div`
  color: #fff;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

const AboutWrapper = styled.div`
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

const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
`;
const AboutBg = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const AboutUS =styled.p`
margin-top: 120px;
font-size: 50px;
`;
const AboutP =styled.p`
 border-left: 5px solid white;
  padding-left: 20px;
  max-width: 500px;
  margin-bottom: 500px;
  font-size: 20px;
  line-height: 24px;
  color: black;
  height: fit-content;
`
const AboutSection = () => {
  return (
    <AboutContainer id={"about"}>
      <AboutBg>
        <Spline scene="https://prod.spline.design/Zw537QG39AZpgD23/scene.splinecode" />
      </AboutBg>
      <AboutWrapper>
      <AboutUS>About Us</AboutUS>
      <AboutP>Our main goal is to enhance the idea of reusing by exchanging goods such as kids' toys or video games that will not only be helpful for the sustainable process of our planet but also benefit individuals to consume less and therefore become richer.</AboutP>
        <AboutRow>
        </AboutRow>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutSection;
