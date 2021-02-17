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
      banner0: file(relativePath: { eq: "DSCF0419.jpg" }) {
        ...BannerImage
      }
      banner1: file(relativePath: { eq: "DSCF0449.jpg" }) {
        ...BannerImage
      }
      banner2: file(relativePath: { eq: "DSCF0534.jpg" }) {
        ...BannerImage
      }
      banner3: file(relativePath: { eq: "DSCF0546.jpg" }) {
        ...BannerImage
      }
      headshot: file(relativePath: { eq: "closeup.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
          gatsbyImageData(backgroundColor: "")
        }
      }
    }
  `);

  const content = data.allContentYaml.edges[0].node;

  // TODO: need to source light and dark images
  const imageArray = [
    {
      image: data.banner0.childImageSharp.fluid,
      color: data.banner0.childImageSharp.gatsbyImageData.backgroundColor,
    },
    {
      image: data.banner1.childImageSharp.fluid,
      color: data.banner1.childImageSharp.gatsbyImageData.backgroundColor,
    },
    {
      image: data.banner2.childImageSharp.fluid,
      color: data.banner2.childImageSharp.gatsbyImageData.backgroundColor,
    },
    {
      image: data.banner3.childImageSharp.fluid,
      color: data.banner3.childImageSharp.gatsbyImageData.backgroundColor,
    },
  ];

  return (
    <Grid
      as="main"
      sx={{
        height: '100vh',
        minHeight: 980,
        gridGap: 0,
        gridTemplateRows: ['2fr 4fr 2fr', null, '1fr 4fr 1fr'],
        gridTemplateColumns: ['2rem 1fr 5rem', '1fr 2fr 1fr', '1fr 1fr'],
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
          alignSelf: ['flex-end', null, 'center'],
          mb: ['-.3em', null, 'initial'],
          zIndex: 10,
          gridArea: ['contentTop', null, 'content'],
          ml: [0, null, 'calc(10vw - .2ch)'],
        }}
      />
      <Hero
        image={imageArray}
        text={content.data.dob}
        sx={{ gridArea: 'img' }}
      />
      <Content
        image={data.headshot.childImageSharp.fluid}
        text={content.stats}
        sx={{
          gridArea: ['contentBottom', null, 'content'],
          alignSelf: ['flex-start', null, 'flex-end'],
          ml: [0, null, '10vw'],
          mt: ['3rem', null, 'initial'],
          maxWidth: [null, null, 360],
        }}
      />
    </Grid>
  );
};

export default IndexPage;
