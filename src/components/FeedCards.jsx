import {
  Box,
  IconButton,
  Stack,
  Typography,
  keyframes,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { feedItems } from "../../data";
import styled from "@emotion/styled";
import { ArrowCircleDown, EnvelopeSimple } from "phosphor-react";
import _debounce from "lodash/debounce";
import { mobile } from "../utils/responsive";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Title = styled.h1`
  text-align: start;
  font-size: 3rem;
`;

const SubTitle = styled.p`
  position: absolute;
  /* top: 0; */
  color: white;
  bottom: 0;
  padding-left: 20px;
  padding-bottom: 10px;
  font-size: 24px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  ${mobile({ width: "100%", height: "100%" })}
`;

const StyledBox = styled(Box)`
  ${mobile({ height: "50vh" })}
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const FeedCards = () => {
  const [hovering, setHovering] = useState(false);
  const theme = useTheme();
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function toolTipMove(e) {
    var x = e.clientX;
    var y = e.clientY;
    document.getElementById("tooltip").style.left = x + "px";
    document.getElementById("tooltip").style.top = y + "px";
  }

  const cursorStyles = {
    cursor: "pointer",
    position: "relative",
  };

  const tooltipStyles = {
    position: "fixed",
    // top: mousePosition.y + "px",
    // left: mousePosition.x + "px",
    zIndex: 1,
    borderRadius: "50%",
    backgroundColor: "rgba(23, 32, 42, 0.1)",
    color: "white",
    display: hovering ? "flex" : "none", // Use flex display to center the content
    alignItems: "center", // Center vertically
    justifyContent: "center", // Center horizontally
    border: "2px solid white",
    transform: "rotate(-20deg)",
    fontSize: "24px",
    width: "100px",
    height: "100px",
  };

  return (
    <>
      <StyledBox
        sx={{
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        <Stack
          direction="row"
          sx={{
            width: "100%",
            height: "80vh",
            // ...mobile({ display: "flex", flexDirection: "column" }),
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
          }}
          justifyContent="center"
          spacing={1}
          marginTop={5}
        >
          <Box
            sx={{
              width: "50%",
              height: "100%",
              borderRadius: "20px",
              backgroundImage: `url(${feedItems.thirdCard.img})`,
              backgroundRepeat: "no-repeat", // Prevent image from repeating
              backgroundSize: "cover", // Adjust as needed
              ...cursorStyles,
              [theme.breakpoints.down("sm")]: {
                width: "90%",
              },
            }}
            onMouseMove={(event) => toolTipMove(event)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <div style={tooltipStyles} id="tooltip">
              Shop Now
            </div>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
              sx={{
                height: "100%",
                [theme.breakpoints.down("sm")]: {
                  width: "100%",
                },
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: "white",
                  borderRadius: "50px",
                  marginBottom: "20px",
                  color: "black",
                  marginLeft: "40px",
                  // ...mobile({width: "20vw", backgroundColor: "white"})
                  [theme.breakpoints.down("sm")]: {
                    width: "8rem",
                    height: "2rem",
                    marginLeft: "20px",
                  },
                }}
                onMouseEnter={() => {
                  setHovering(false); // Set hovering to false when entering IconButton
                }}
                onMouseLeave={() => {
                  setHovering(true); // Set hovering to true when leaving IconButton
                }}
              >
                <Stack
                  direction="row"
                  sx={{
                    width: "16rem",
                    [theme.breakpoints.down("sm")]: {
                      width: "100%",
                    },
                  }}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    paddingLeft={2}
                    sx={{
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "10px",
                      },
                    }}
                  >
                    Learn More
                  </Typography>
                  {/* <ArrowCircleDown color="black" size={40} weight="fill" /> */}
                  <ExpandCircleDownIcon
                    sx={{
                      fontSize: "40px",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "20px",
                      },
                    }}
                  />
                </Stack>
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: "transparent",
                  borderRadius: "50px",
                  marginBottom: "20px",
                  border: "1px solid white",
                  color: "white",
                  marginRight: "40px",
                  // ...mobile({width: "20vw"})
                  [theme.breakpoints.down("sm")]: {
                    width: "8rem",
                    height: "2rem",
                    marginRight: "20px",
                  },
                }}
                onMouseEnter={() => {
                  setHovering(false); // Set hovering to false when entering IconButton
                }}
                onMouseLeave={() => {
                  setHovering(true); // Set hovering to true when leaving IconButton
                }}
              >
                <Stack
                  direction="row"
                  sx={{
                    width: "16rem",
                    [theme.breakpoints.down("sm")]: {
                      width: "100%",
                    },
                  }}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    paddingLeft={2}
                    sx={{
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "10px",
                      },
                    }}
                  >
                    Contact Us
                  </Typography>
                  {/* <EnvelopeSimple
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50px",
                      padding: "10px",
                    }}
                    color="black"
                    size={20}
                  /> */}
                  <MailOutlineIcon
                    sx={{
                      color: "black",
                      backgroundColor: "white",
                      borderRadius: "50px",
                      padding: "8px",
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "12px",
                        padding: "4px",
                      },
                    }}
                  />
                </Stack>
              </IconButton>
            </Stack>
          </Box>

          <Stack direction="column" spacing={1} sx={{ height: "100%" }}>
            <Box
              sx={{
                //   backgroundImage: `url(${feedItems.secondCard.img})`,
                width: "40vw",
                height: "60%",
                borderRadius: "20px",
                backgroundColor: "#D4D3CF",
                padding: "20px",
                // ...mobile({ display: "none" }),
                [theme.breakpoints.down("sm")]: {
                  display: "none",
                },
              }}
            >
              <Stack direction="column" spacing={2} p={3}>
                <Title>
                  REAL{" "}
                  <span
                    style={{
                      border: "3px solid orange",
                      borderRadius: "50%", // Makes the border circular
                      padding: "2px 4px",
                      display: "inline-block", // Ensures proper alignment with other text
                    }}
                  >
                    DESIGNS
                  </span>
                  <br /> BY REAL ARTISTS <br /> FOR REAL PEOPLE
                </Title>
                <p>
                  We're challenging conventional retail, putting an end to{" "}
                  <br /> dead stock, unconventional waste and more funtastic.
                </p>
              </Stack>
            </Box>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                height: "40%",
                [theme.breakpoints.down("sm")]: {
                  paddingRight: "14px",
                  paddingLeft: "12px",
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  borderRadius: "20px",
                  // backgroundImage: `url(${feedItems.fourthCard.img})`,
                }}
              >
                <ImageContainer>
                  <Image src={`${feedItems.fourthCard.img}`} />
                  <SubTitle>#TRENDING 2023</SubTitle>
                </ImageContainer>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  borderRadius: "20px",
                }}
              >
                <ImageContainer>
                  <Image src={`${feedItems.secondCard.img}`} />
                  <SubTitle>#OLDBUTGOLD</SubTitle>
                </ImageContainer>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </StyledBox>
    </>
  );
};

export default FeedCards;
