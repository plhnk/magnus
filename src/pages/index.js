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
        gridTemplateRows: ['2fr 3fr 2fr', null, '1fr 4fr 1fr'],
        gridTemplateColumns: ['1fr', null, '1fr 1fr'],
        gridTemplateAreas: [
          null,
          null,
          '"spaceTop spaceTop" "img content" "spaceBottom spaceBottom"',
        ],
      }}
    >
      <Typography />
      <title>Home Page</title>
      <Header
        content={content.name}
        sx={{
          ml: ['10vw', 'calc(50vw - 320px)', '8rem'],
          alignSelf: 'flex-end',
          gridArea: [null, null, 'content'],
        }}
      />
      <Hero
        image={data.bannerImage.childImageSharp.fluid}
        text={content.data.dob}
        sx={{ gridArea: [null, null, 'img'] }}
      />
      <Content
        image={data.headshot.childImageSharp.fluid}
        text={content.stats}
        sx={{ gridArea: [null, null, 'content'] }}
      />
    </Grid>
  );
};

export default IndexPage;
