import React from "react";
import { Box, Divider, Stack, useTheme } from "@mui/material";
import styled from "@emotion/styled";
import { Globe, Planet } from "phosphor-react";
import { mobile } from "../utils/responsive";
import LanguageIcon from "@mui/icons-material/Language";
import PublicIcon from "@mui/icons-material/Public";

const Left = styled.div`
  background-color: #de6737;
  /* flex: 2; */
  width: 60vw;
  border-radius: 30px;
  height: 80vh;
  ${mobile({ height: "40vh", width: "90vw" })}
`;

const Right = styled.div`
  /* background-color: black; */
  /* flex: 1; */
  width: 30vw;
  height: 80vh;
  border-radius: 30px;
  ${mobile({width: "90vw", height: "40vh"})}
`;

const Title = styled.h1`
  font-size: 6rem;
  margin-left: 6rem;
  ${mobile({ fontSize: "2rem" })}
`;

const Image = styled.img`
  width: 30vw;
  height: 80vh;
  border-radius: 30px;
  ${mobile({width: "100%", height: "40vh"})}
`;

const PTag = styled.p`
  ${mobile({ fontSize: "12px" })}
`;

const Signature = () => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        marginTop: "6rem",
        // backgroundColor: "red",
        // [theme.breakpoints.down("sm")]: {
        //   backgroundColor: "green"
        // },
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{
          [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px"
          },
        }}
      >
        <Left>
          <Stack
            sx={{ width: "100%", height: "100%" }}
            justifyContent="space-evenly"
          >
            <Title>
              WE'RE CHANGING <br /> THE WAY THINGS <br /> GET MADE.
            </Title>
            <Divider
              sx={{
                backgroundColor: "black",
                padding: "0.4px",
              }}
            />
            <Stack
              direction="row"
              sx={{
                paddingLeft: "6rem",
                [theme.breakpoints.down("sm")]: {
                  display: "flex",
                  // alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: "1rem",
                },
              }}
            >
              <Stack direction="column" spacing={2}>
                <Stack direction="row" spacing={2} alignItems="center">
                  {/* <Globe
                    style={{
                      backgroundColor: "black",
                      borderRadius: "50%",
                      color: "white",
                      padding: "10px",
                    }}
                    size={24}
                  /> */}
                  <LanguageIcon
                    sx={{
                      backgroundColor: "black",
                      borderRadius: "50%",
                      color: "white",
                      padding: "10px",
                      [theme.breakpoints.down("sm")]: {
                        padding: "5px",
                        fontSize: "16px",
                      },
                    }}
                  />
                  <p>MISSION</p>
                </Stack>
                <PTag>
                  We're on a mission to empower creative independence in a
                  commercial world and incredible.
                </PTag>
              </Stack>

              <Stack direction="column" spacing={2}>
                <Stack direction="row" spacing={2} alignItems="center">
                  {/* <Planet
                    style={{
                      backgroundColor: "black",
                      borderRadius: "50%",
                      color: "white",
                      padding: "10px",
                    }}
                    size={24}
                  /> */}
                  <PublicIcon
                    sx={{
                      backgroundColor: "black",
                      borderRadius: "50%",
                      color: "white",
                      padding: "10px",
                      [theme.breakpoints.down("sm")]: {
                        padding: "5px",
                        fontSize: "16px",
                      },
                    }}
                  />
                  <p>SUSTAINBILITY</p>
                </Stack>
                <PTag>
                  We're challenging conventional retail, putting an end to dead
                  stock, unconventional waste and more funtastic.
                </PTag>
              </Stack>
            </Stack>
          </Stack>
        </Left>
        <Right>
          <Image src="BandW.jpg" />
        </Right>
      </Stack>
    </Stack>
  );
};

export default Signature;
