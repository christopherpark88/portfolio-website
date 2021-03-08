import styled from "styled-components";
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import { MainHeader, HighlightSubHeader } from "../common";

const TitleBox = styled(Box)`
  max-width: 70vw;
`;

const HeaderCard = () => {
  return (
    <TitleBox id="title-box">
      <Fade in={true}>
        <MainHeader>Hello!</MainHeader>
      </Fade>
      <LightSpeed left delay={500}>
        <HighlightSubHeader>I'm Christopher Park</HighlightSubHeader>
      </LightSpeed>
      <Fade in={true}>
        <MainHeader>
          I'm a Full Stack Software Developer and a Student at the University of
          Waterloo
        </MainHeader>
      </Fade>
    </TitleBox>
  );
};

export default HeaderCard;
