import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Box from "@material-ui/core/Box";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import { MainHeader, HighlightSubHeader } from "../common";

const TitleBox = styled(Box)`
  max-width: 70vw;
  text-align: left;
`;

const Blink = keyframes`
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const CursorSpan = styled.span`
  color: black;
  animation: 1s ${Blink} linear infinite;
`;

const HeaderCard = () => {
  return (
    <TitleBox id="title-box">
      <MainHeader>
        <Fade down cascade>
          Hello!
        </Fade>
      </MainHeader>
      <HighlightSubHeader>
        <Fade down cascade>
          I'm Christopher Park
        </Fade>
      </HighlightSubHeader>
      <MainHeader>
        <Fade down cascade>
          A Full Stack Software Developer
        </Fade>
      </MainHeader>
      <MainHeader>
        <Fade down cascade>
          & Student at the University of Waterloo
        </Fade>
      </MainHeader>
    </TitleBox>
  );
};

export default HeaderCard;
