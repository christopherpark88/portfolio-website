import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import styled from "styled-components";
import LightSpeed from "react-reveal/LightSpeed";
import { SubHeader, HighlightSubheader } from "../common";

const TitleBox = styled(Box)`
  max-width: 70vw;
`;

const HeaderCard = () => {
  return (
    <TitleBox id="title-box">
      <Fade in={true}>
        <SubHeader>Hello!</SubHeader>
      </Fade>
      <LightSpeed left delay={500}>
        <HighlightSubheader>I'm Christopher Park</HighlightSubheader>
      </LightSpeed>
      <Fade in={true}>
        <SubHeader>
          I'm a Full Stack Software Developer and a Student at the University of
          Waterloo
        </SubHeader>
      </Fade>
    </TitleBox>
  );
};

export default HeaderCard;
