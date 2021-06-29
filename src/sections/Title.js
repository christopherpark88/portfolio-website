import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Box from "@material-ui/core/Box";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import { MainHeader, HighlightHeader } from "../common";

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
  const today = new Date();
  const weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";

  const currentDay = weekdays[today.getDay()];

  return (
    <TitleBox id="title-box">
      <MainHeader>
        <Fade down cascade>
          {`Hello! Happy ${currentDay}!`}
        </Fade>
      </MainHeader>
      <HighlightHeader>
        <Fade down cascade>
          I'm Christopher Park
        </Fade>
      </HighlightHeader>
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
