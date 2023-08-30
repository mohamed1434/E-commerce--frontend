import React from "react";
import styled from "@emotion/styled";
import { mobile } from "../utils/responsive";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  /* background-color: red; */
  ${mobile({ height: "20vh", marginBottom: "4rem" })}
`;

const TextContainer = styled.div`
  width: 88vw;
`;

const Text = styled.h2`
  text-align: left;
  font-size: 50px;
  font-weight: lighter;
  ${mobile({ fontSize: "20px" })}
`;

const BlackSpan = styled.span`
  display: inline-flex;
  justify-content: center;
  width: 100px; /* Set the desired width */
  height: 60px; /* Set the desired height */
  background-color: black;
  color: white;
  border-radius: 50px;
  overflow: hidden;
  position: relative;
  ${mobile({ height: "20px", width: "50px" })}
`;

const Image = styled.img`
  width: 100%;
  height: 120px;
  position: absolute;
  ${mobile({ width: "100%", height: "60px" })}
`;

const BorderSpan = styled.span`
  border: 2px solid black;
  border-radius: 50px;
  padding-left: 10px;
  padding-right: 12px;
  padding-top: 5px;
  ${mobile({ paddingLeft: "5px", paddingRight: "6px", paddingTop: "2.5px", fontSize: "17px" })}
`;

const SiteDesc = () => {
  return (
    <>
      <Container>
        <TextContainer>
          <Text>
            KARMA makes clothes{" "}
            <BlackSpan>
              {" "}
              <Image src="shirt.png" />
            </BlackSpan>{" "}
            to elevate everyday life through lighthearted escapism. While styles
            vary by season, <BorderSpan>✹ all collections</BorderSpan> are
            guided by an ineffable sense of freedom that comes with travel.
          </Text>
        </TextContainer>
      </Container>
    </>
  );
};

export default SiteDesc;
