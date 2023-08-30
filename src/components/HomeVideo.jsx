import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from "@emotion/styled";
import { Play } from "phosphor-react";
import { mobile } from "../utils/responsive";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  ${mobile({height: "40vh", padding: "10px"})}
`;

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-radius: 40px;
  ${mobile({maxWidth: "400px"})}
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid white;
  width: 6rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <Container>
      <VideoWrapper>
        <ReactPlayer
          url="fashionVideo.mp4"
          width="100%"
          height="100%"
          controls={false}
          playing={isPlaying}
          muted={true}
          loop={false}
          onEnded={handleVideoEnd}
        />

        {!isPlaying && (
          <PlayButton onClick={handlePlay}>
            <Play />
          </PlayButton>
        )}
      </VideoWrapper>
    </Container>
  );
};

export default HomeVideo;
