import styled from "styled-components";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import {
  MainHeader,
  SectionHeader,
  WindowHeader,
  SectionWrapper,
  InfoWindow,
  InfoTopic,
  InfoDetails,
  LargeIcon,
  SmallIcon,
  DetailsText,
  AvatarText,
} from "../common";
import javascriptlogo from "../logos/javascriptlogo.png";
import pythonlogo from "../logos/pythonlogo.png";
import reactlogo from "../logos/reactlogo.png";
import nodelogo from "../logos/nodelogo.png";
import typescriptlogo from "../logos/typescriptlogo.png";
import reduxlogo from "../logos/reduxlogo.png";

const LanguagesSection = () => {
  return (
    <Grid container spacing={9}>
      <Grid item xs={12} sm={6}>
        <InfoWindow elevation={10}>
          <InfoTopic>
            <LargeIcon src={javascriptlogo}></LargeIcon>
            <WindowHeader>Javascript</WindowHeader>
          </InfoTopic>
          <InfoDetails>
            <SmallIcon
              avatar={<Avatar src={reactlogo} />}
              label="React"
              color="primary"
            />
            <SmallIcon
              avatar={<Avatar src={nodelogo} />}
              label="NodeJS"
              color="primary"
            />
            <SmallIcon
              avatar={<Avatar src={typescriptlogo} />}
              label="Typescript"
              color="primary"
            />
            <SmallIcon
              avatar={<Avatar src={reduxlogo} />}
              label="Redux"
              color="primary"
            />
          </InfoDetails>
        </InfoWindow>
      </Grid>
      <Grid item xs={12} sm={6}>
        <InfoWindow elevation={10}>
          <InfoTopic>
            <LargeIcon src={pythonlogo}></LargeIcon>
            <WindowHeader>Python</WindowHeader>
          </InfoTopic>
          <InfoDetails></InfoDetails>
        </InfoWindow>
      </Grid>
    </Grid>
  );
};

const DatabaseSection = () => {
  return (
    <Paper elevation={10}>
      <div>test</div>
    </Paper>
  );
};
const CloudSection = () => {
  return (
    <Paper elevation={10}>
      <div>test</div>
    </Paper>
  );
};

export const SkillsSection = () => {
  return (
    <SectionWrapper>
      <SectionHeader>Skills</SectionHeader>
      <LanguagesSection />
      <SectionHeader>Work Experiences</SectionHeader>
      <SectionHeader>Projects</SectionHeader>
    </SectionWrapper>
  );
};
