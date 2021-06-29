import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Chip from "@material-ui/core/Chip";

export const MainHeader = styled.h2`
  display: inline;
  font-family: "Noto Sans JP", sans-serif;
  color: #6b6b6b;
`;

export const HighlightHeader = styled.h2`
  display: inline;
  font-family: "Noto Sans JP", sans-serif;
  color: #ff2950;
`;

export const SectionHeader = styled.h1`
  font-family: "Noto Sans JP", sans-serif;
  font-style: italic;
  color: black;
  text-align: ;
`;

export const HighlightSectionHeader = styled.h1`
  font-family: "Noto Sans JP", sans serif;
  font-style: italic;
  color: #ff2950;
`;

export const WindowHeader = styled.h2`
  font-family: "Noto Sans JP", sans-serif;
  color: black;
`;

export const DetailsText = styled.h3`
  font-family: "Noto Sans JP", sans-serif;
  font-style: italic;
  color: #6b6b6b;
  display: inline;
`;

export const SectionWrapper = styled(Box)`
  margin-left: 5rem;
  margin-right: 5rem;
  max-height: 100vh;
`;

export const InfoSection = styled(Grid)``;

export const InfoWindow = styled(Paper)`
  && {
    border-radius: 25px;
  }
`;

export const InfoTopic = styled.div`
  background-color: #f5f5f5;
  padding: 0.5rem;
  && {
    border-radius: 25px;
  }
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const InfoDetails = styled.div``;

export const LargeIcon = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
`;

export const SmallIcon = styled(Chip)`
  margin: 1%;
`;

export const GridTextSection = styled(Grid)`
  text-align: left;
`;
