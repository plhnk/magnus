/** @jsx jsx */

import { useStaticQuery, graphql } from 'gatsby';
import { jsx, Grid } from 'theme-ui';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Typography from '../components/Typography';
import SEO from '../components/SEO';
import TimeSensitiveTheme from '../components/TimeSensitiveTheme';

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
      dark0: file(relativePath: { eq: "dark/DSCF0419.jpg" }) {
        ...BannerImage
      }
      dark1: file(relativePath: { eq: "dark/DSCF0534.jpg" }) {
        ...BannerImage
      }
      dark2: file(relativePath: { eq: "dark/DSCF0546.jpg" }) {
        ...BannerImage
      }
      dark3: file(relativePath: { eq: "dark/DSCF0556.jpg" }) {
        ...BannerImage
      }
      light0: file(relativePath: { eq: "light/DSCF0449.jpg" }) {
        ...BannerImage
      }
      light1: file(relativePath: { eq: "light/DSCF0457.jpg" }) {
        ...BannerImage
      }
      light2: file(relativePath: { eq: "light/DSCF0506.jpg" }) {
        ...BannerImage
      }
      light3: file(relativePath: { eq: "light/DSCF0565.jpg" }) {
        ...BannerImage
      }
      headshot: file(relativePath: { eq: "closeup.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200, quality: 96) {
            ...GatsbyImageSharpFluid_withWebp
          }
          gatsbyImageData(backgroundColor: "")
        }
      }
      ogImage: file(relativePath: { eq: "og-image.jpg" }) {
        childImageSharp {
          fixed(jpegQuality: 100, height: 630, width: 1200) {
            src
          }
        }
      }
    }
  `);

  const content = data.allContentYaml.edges[0].node;

  // TODO: need to source light and dark images
  const imageArray = [
    {
      dark: [
        {
          image: data.dark0.childImageSharp.fluid,
          color: data.dark0.childImageSharp.gatsbyImageData.backgroundColor,
        },
        {
          image: data.dark1.childImageSharp.fluid,
          color: data.dark1.childImageSharp.gatsbyImageData.backgroundColor,
        },
        {
          image: data.dark2.childImageSharp.fluid,
          color: data.dark2.childImageSharp.gatsbyImageData.backgroundColor,
        },
        {
          image: data.dark3.childImageSharp.fluid,
          color: data.dark3.childImageSharp.gatsbyImageData.backgroundColor,
        },
      ],
    },
    {
      light: [
        {
          image: data.light0.childImageSharp.fluid,
          color: data.light0.childImageSharp.gatsbyImageData.backgroundColor,
        },
        {
          image: data.light1.childImageSharp.fluid,
          color: data.light1.childImageSharp.gatsbyImageData.backgroundColor,
        },
        {
          image: data.light2.childImageSharp.fluid,
          color: data.light2.childImageSharp.gatsbyImageData.backgroundColor,
        },
        {
          image: data.light3.childImageSharp.fluid,
          color: data.light3.childImageSharp.gatsbyImageData.backgroundColor,
        },
      ],
    },
  ];

  return (
    <Grid
      as="main"
      sx={{
        minHeight: '100vh',
        gridGap: 0,
        gridTemplateRows: ['2fr 4fr 2fr', null, '1fr 4fr 1fr'],
        gridTemplateColumns: ['2rem 1fr 5rem', '1fr 2fr 1fr', '1fr 1fr'],
        gridTemplateAreas: [
          '"spaceTopL contentTop spaceTopR" "img img spaceMiddle" "spaceBottomL contentBottom spaceBottomR"',
          '"spaceTopL contentTop spaceTopR" "img img spaceMiddle" "spaceBottomL contentBottom spaceBottomR"',
          '"spaceTop spaceTop" "img content" "spaceBottom spaceBottom"',
        ],
        '::selection': {
          backgroundColor: 'primary',
        },
      }}
    >
      <SEO
        description="The hat trick is complete!"
        previewImage={data.ogImage.childImageSharp.fixed.src}
        previewImageAlt="A photo of Magnus with his name and birthday in a layout"
        keywords="Gatsby, SSR, static site, single page, modern, theme switcher, dark mode"
        pageTitle="Magnus Theodore | 14 Feb 2021"
      />
      <Typography />
      <TimeSensitiveTheme />
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
        imageArray={imageArray}
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
          mb: ['6rem', null, 'initial'],
          maxWidth: [null, null, 360],
        }}
      />
    </Grid>
  );
};

export default IndexPage;
