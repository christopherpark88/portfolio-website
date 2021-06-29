import styled from "styled-components";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Fade from "react-reveal/Fade";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  MainHeader,
  SectionHeader,
  HighlightSectionHeader,
  WindowHeader,
  SectionWrapper,
  InfoWindow,
  InfoTopic,
  InfoDetails,
  LargeIcon,
  SmallIcon,
  DetailsText,
  AvatarText,
  GridTextSection,
} from "../common";
import Sky from "react-sky";
import javascriptlogo from "../logos/javascriptlogo.png";
import pythonlogo from "../logos/pythonlogo.png";
import reactlogo from "../logos/reactlogo.png";
import nodelogo from "../logos/nodelogo.png";
import typescriptlogo from "../logos/typescriptlogo.png";
import graphqlogo from "../logos/graphqllogo.png";
import reduxlogo from "../logos/reduxlogo.png";
import numpylogo from "../logos/numpylogo.png";
import pandaslogo from "../logos/pandaslogo.png";
import matplotliblogo from "../logos/matplotlib.png";
import htmlcsslogo from "../logos/htmlcsslogo.png";
import materialuilogo from "../logos/materialuilogo.png";
import styledcomponentslogo from "../logos/styledcomponentslogo.png";
import databaselogo from "../logos/databaselogo.png";
import postgresqllogo from "../logos/postgresqllogo.png";
import dynamodblogo from "../logos/dynamodblogo.png";
import sqllitelogo from "../logos/sqllitelogo.png";
import cloudlogo from "../logos/cloudlogo.png";
import awslogo from "../logos/awslogo.png";
import qalogo from "../logos/qalogo.png";
import cucumberlogo from "../logos/cucumberlogo.png";
import mochalogo from "../logos/mochalogo.png";
import jestlogo from "../logos/jestlogo.png";
import chailogo from "../logos/chailogo.png";
import webdriverlogo from "../logos/webdriverlogo.png";
import devlogo from "../logos/devlogo.png";
import gitlogo from "../logos/gitlogo.png";
import dockerlogo from "../logos/dockerlogo.png";
import travislogo from "../logos/travislogo.png";
import jenkinslogo from "../logos/jenkinslogo.png";
import sentrylogo from "../logos/sentrylogo.png";

const SkillsAnimation = () => {
  const SkyDiv = styled.div`
    position: relative;
    height: 80vh;
  `;
  return (
    <SkyDiv>
      <Sky
        images={{
          0: javascriptlogo,
          1: pythonlogo,
          2: reactlogo,
          3: nodelogo,
          4: typescriptlogo,
          5: awslogo,
          6: chailogo,
          7: cucumberlogo,
          8: dockerlogo,
          9: dynamodblogo,
          10: graphqlogo,
          11: htmlcsslogo,
          12: jenkinslogo,
          13: jestlogo,
          14: materialuilogo,
          15: matplotliblogo,
          16: mochalogo,
          17: numpylogo,
          18: pandaslogo,
          19: postgresqllogo,
          20: reduxlogo,
          21: sentrylogo,
          22: sqllitelogo,
          23: styledcomponentslogo,
          24: travislogo,
          25: webdriverlogo,
          26: gitlogo,
        }}
        how={300}
        time={1000}
        size={"50px"}
        background={"white"}
      />
    </SkyDiv>
  );
};

const SkillsAccordion = styled(Accordion)`
  margin-bottom: 1rem;
  border-style: solid;
  border-width: thin;
`;

const SkillsSection = () => {
  return (
    <SectionWrapper>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <HighlightSectionHeader>Skills</HighlightSectionHeader>
          <DetailsText>As a</DetailsText>
          <DetailsText style={{ color: "Black" }}>
            &nbsp;Full Stack Developer&nbsp;
          </DetailsText>
          <DetailsText>
            I specialize in both the backend and frontend of applications. These
            are some of the skills I've developed over time. The list is always
            growing!
            <br />
            <br />
          </DetailsText>
          {/* <div style={{ margin: "auto", maxWidth: "60%" }}>
        <SkillsAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Click Me to See a List!
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>list</li>
            </ul>
          </AccordionDetails>
        </SkillsAccordion>
      </div> */}
          <Divider />
        </Grid>

        <Grid item xs={6}>
          <SkillsAnimation />
        </Grid>
        {/*  <SectionHeader>FRONT-END ENGINEERING</SectionHeader>
      <DetailsText></DetailsText>
      <SectionHeader>BACK-END ENGINEERING</SectionHeader> */}
      </Grid>
    </SectionWrapper>
  );
};

export default SkillsSection;
