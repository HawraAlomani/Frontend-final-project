import React, { useState } from "react";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";
import { motion, AnimatePresence} from "framer-motion";

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
  position: relative;
`;
const AboutBg = styled.div`
  z-index: -10;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const AboutUS = styled.p`
  margin-top: 120px;
  font-size: 50px;
`;
const AboutP = styled.p`
  border-left: 5px solid white;
  padding-left: 20px;
  max-width: 500px;
  margin-bottom: 500px;
  font-size: 20px;
  line-height: 24px;
  color: black;
`;

const AboutSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <AboutContainer id={"about"}>
      <AboutBg>
        <Spline scene="https://prod.spline.design/Zw537QG39AZpgD23/scene.splinecode" />
      </AboutBg>
      <AboutWrapper>
        <AboutUS>About Us</AboutUS>
        <AboutP>
          Our main goal is to enhance the idea of reusing by exchanging goods
          such as kids' toys or video games that will not only be helpful for
          the sustainable process of our planet but also benefit individuals to
          consume less and therefore become richer.
        </AboutP>
        <AboutRow>
          <motion.div
            transition={{ layout: { duration: 1, type: "spring" } }}
            layout
            onClick={toggle}
            className="Card"
            style={{
              borderRadius: "1rem",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            <motion.h2 layout="position">What's next? ✨</motion.h2>
            <AnimatePresence>
            {isOpen && (
              <motion.div
                className="extend"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{duration: 1}}
              >
                <p>
                  {" "}
                  - Now you can explore the categories of available goods that
                  you may like and exchange it with some other goods you no
                  longer use.
                </p>
                <p>
                  {" "}
                  - Make sure to login or create an account in order to make an
                  exchange request.{" "}
                </p>
              </motion.div>
            )}
            </AnimatePresence>
          </motion.div>
        </AboutRow>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutSection;
