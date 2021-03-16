import styled from "styled-components";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Fade from "react-reveal/Fade";
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

const LanguagesSection = () => {
  return (
    <Grid container spacing={9}>
      <Grid item xs={12} sm={6}>
        <Fade left>
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
                avatar={<Avatar src={graphqlogo} />}
                label="GraphQL"
                color="primary"
              />
              <SmallIcon
                avatar={<Avatar src={reduxlogo} />}
                label="Redux"
                color="primary"
              />
            </InfoDetails>
          </InfoWindow>
        </Fade>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Fade right>
          <InfoWindow elevation={10}>
            <InfoTopic>
              <LargeIcon src={pythonlogo}></LargeIcon>
              <WindowHeader>Python</WindowHeader>
            </InfoTopic>
            <InfoDetails>
              <SmallIcon
                avatar={<Avatar src={numpylogo} />}
                label="Numpy"
                color="primary"
              />
              <SmallIcon
                avatar={<Avatar src={pandaslogo} />}
                label="Pandas"
                color="primary"
              />
              <SmallIcon
                avatar={<Avatar src={matplotliblogo} />}
                label="Matplotlib"
                color="primary"
              />
            </InfoDetails>
          </InfoWindow>
        </Fade>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Fade left>
          <InfoWindow elevation={10}>
            <InfoTopic>
              <LargeIcon src={htmlcsslogo}></LargeIcon>
              <WindowHeader>HTML & CSS</WindowHeader>
            </InfoTopic>
            <InfoDetails>
              <SmallIcon
                avatar={<Avatar src={materialuilogo} />}
                label="MaterialUI"
                color="primary"
              />
              <SmallIcon
                avatar={<Avatar src={styledcomponentslogo} />}
                label="Styled Components"
                color="primary"
              />
            </InfoDetails>
          </InfoWindow>
        </Fade>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Fade right>
          <InfoWindow elevation={10}>
            <InfoTopic>
              <LargeIcon src={databaselogo}></LargeIcon>
              <WindowHeader>Databases</WindowHeader>
            </InfoTopic>
            <InfoDetails>
              <SmallIcon
                avatar={<Avatar src={postgresqllogo} />}
                label="PostgreSQL"
                color="primary"
              />
              <SmallIcon
                avatar={<Avatar src={dynamodblogo} />}
                label="DynamoDB"
                color="primary"
              />
              <SmallIcon
                avatar={<Avatar src={sqllitelogo} />}
                label="SQL Lite"
                color="primary"
              />
            </InfoDetails>
          </InfoWindow>
        </Fade>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Fade left>
          <InfoWindow elevation={10}>
            <InfoTopic>
              <LargeIcon src={cloudlogo}></LargeIcon>
              <WindowHeader>Cloud Technology</WindowHeader>
            </InfoTopic>
            <InfoDetails>
              <SmallIcon
                avatar={<Avatar src={awslogo} />}
                label="AWS"
                color="primary"
              />
            </InfoDetails>
          </InfoWindow>
        </Fade>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Fade right>
          <InfoWindow elevation={10}>
            <InfoTopic>
              <LargeIcon src={qalogo}></LargeIcon>
              <WindowHeader>QA Tools</WindowHeader>
            </InfoTopic>
            <InfoDetails>
              <SmallIcon
                avatar={<Avatar src={cucumberlogo} />}
                label="Cucumber.js"
                color="primary"
              />
              <SmallIcon
                avatar={<Avatar src={mochalogo} />}
                label="Mocha"
                color="primary"
              />
              <SmallIcon
                avatar={<Avatar src={jestlogo} />}
                label="Jest"
                color="primary"
              />
              <SmallIcon
                avatar={<Avatar src={chailogo} />}
                label="Chai"
                color="primary"
              />
              <SmallIcon
                avatar={<Avatar src={webdriverlogo} />}
                label="WebdriverIO"
                color="primary"
              />
            </InfoDetails>
          </InfoWindow>
        </Fade>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Fade left>
          <InfoWindow elevation={10}>
            <InfoTopic>
              <LargeIcon src={devlogo}></LargeIcon>
              <WindowHeader>Other Developer Tools</WindowHeader>
            </InfoTopic>
            <InfoDetails>
              <SmallIcon
                avatar={<Avatar src={gitlogo} />}
                label="Git"
                color="primary"
              />
              <SmallIcon
                avatar={<Avatar src={dockerlogo} />}
                label="Docker"
                color="primary"
              />
              <SmallIcon
                avatar={<Avatar src={travislogo} />}
                label="TravisCI"
                color="primary"
              />
              <SmallIcon
                avatar={<Avatar src={jenkinslogo} />}
                label="Jenkins"
                color="primary"
              />
              <SmallIcon
                avatar={<Avatar src={sentrylogo} />}
                label="Sentry"
                color="primary"
              />
            </InfoDetails>
          </InfoWindow>
        </Fade>
      </Grid>
    </Grid>
  );
};

const SkillsSection = () => {
  return (
    <SectionWrapper>
      <SectionHeader>Skills</SectionHeader>
      <DetailsText>
        These are some skills I have for developing software, which can include
        languages, frameworks, libraries, and more. The list is always growing
        so check back later!
      </DetailsText>
      <LanguagesSection />
    </SectionWrapper>
  );
};

export default SkillsSection;
