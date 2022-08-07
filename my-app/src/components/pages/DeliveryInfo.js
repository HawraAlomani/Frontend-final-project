import React from "react";
import styled from "styled-components";
import { MDBCard } from "mdb-react-ui-kit";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";

const DeliveryInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <MDBCard className="text-center">
        <AboutWrapper>
          <AboutUS>Delivery Information</AboutUS>
          <AboutP>
            There are several options for getting the goods exchanged.
            <br />
            <br />
            <ol>
              <li>
                Pick up: you can get the item exchanged by asking the other
                person to figure out a way of picking up at your own expense.
              </li>
              <br />
              <li>
                Delivery: small fees apply when our team connects you to the
                best price of shipping by selecting one of our contracted
                shipping companies.
              </li>
            </ol>
          </AboutP>
          <AboutRow>
            <motion.div
              transition={{ layout: { duration: 1, type: "spring" } }}
              layout
              onClick={toggle}
              className="Card"
              style={{
                width: "100%",
                borderRadius: "1rem",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
              }}
            >
              <motion.h2 layout="position">
                {" "}
                <TbTruckDelivery size={60} color={`#ff8087ff`} /> Our Shipping
                Companies{" "}
              </motion.h2>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="extend"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <ContainerInfo>
                    <p>
                      There are three companies that our website is contracted with. Special prices will be offered by these companies.
                    </p>
                    <ol>
                    <li> FedEx</li>
                    <li> DHL</li>
                    <li> SPL</li>
                    </ol>
                    </ContainerInfo>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AboutRow>
        </AboutWrapper>
      </MDBCard>
    </Container>
  );
};

export default DeliveryInfo;
const Container = styled.div`
  margin: auto;
  width: 75%;
  padding: 10px;
  padding-top: 50px;
`;

const AboutWrapper = styled.div`
  font-family: "Yeseva One", cursive;
  display: grid;
  z-index: 1;
  height: 900px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 15px;
  justify-content: center;
`;

const AboutRow = styled.div`
  display: grid;
  text-align: left;
  /* grid-auto-columns: minmax(auto, 1fr); */
  position: relative;
`;
const AboutUS = styled.p`
  margin-top: 120px;
  font-size: 50px;
  margin-bottom: 20px;
`;
const AboutP = styled.p`
  border-left: 5px solid lightgray;
  padding-left: 20px;
  /* max-width: 800px; */
  margin-bottom: 500px;
  font-size: 20px;
  line-height: 30px;
  color: black;
  text-align: left;
`;
const ContainerInfo = styled.div`
  width: 100%;
  margin: 0 auto;
`