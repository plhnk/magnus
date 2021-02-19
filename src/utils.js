export const markdownFrontmatterFragment = graphql`
  fragment BannerImage on File {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
      gatsbyImageData(backgroundColor: "")
    }
  }
`;
