/** @jsx jsx */

import { useStaticQuery, graphql } from 'gatsby';
import { jsx, Grid } from 'theme-ui';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Typography from '../components/Typography';

// styles

// data

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentYaml {
        edges {
          node {
            name
            stats
            data {
              dob
            }
          }
        }
      }
      bannerImage: file(relativePath: { eq: "maground.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      headshot: file(relativePath: { eq: "closeup.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const content = data.allContentYaml.edges[0].node;

  return (
    <Grid
      as="main"
      sx={{
        height: '100vh',
        gridGap: 0,
        gridTemplateRows: ['2fr 3fr 2fr', null, '1fr 4fr 1fr'],
        gridTemplateColumns: ['6em 1fr 6em', '1fr 1fr 1fr', '1fr 1fr'],
        gridTemplateAreas: [
          '"spaceTopL contentTop spaceTopR" "img img spaceMiddle" "spaceBottomL contentBottom spaceBottomR"',
          '"spaceTopL contentTop spaceTopR" "img img spaceMiddle" "spaceBottomL contentBottom spaceBottomR"',
          '"spaceTop spaceTop" "img content" "spaceBottom spaceBottom"',
        ],
      }}
    >
      <Typography />
      <title>Home Page</title>
      <Header
        content={content.name}
        sx={{
          alignSelf: 'center',
          gridArea: ['contentTop', null, 'content'],
          ml: [0, null, 'calc(10vw - .2ch)'],
          color: ['red', 'blue', 'green', 'yellow'],
          width: '1rem',
        }}
      />
      <Hero
        image={data.bannerImage.childImageSharp.fluid}
        text={content.data.dob}
        sx={{ gridArea: 'img' }}
      />
      <Content
        image={data.headshot.childImageSharp.fluid}
        text={content.stats}
        sx={{
          gridArea: ['contentBottom', null, 'content'],
          alignSelf: 'flex-end',
          ml: [0, null, '10vw'],
        }}
      />
    </Grid>
  );
};

export default IndexPage;
