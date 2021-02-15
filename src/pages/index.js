/** @jsx jsx */

import { useStaticQuery, graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import Header from '../components/Header';
import Heart from '../components/Heart';
import Stats from '../components/Stats';

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
    }
  `);

  const content = data.allContentYaml.edges[0].node;

  return (
    <main>
      <title>Home Page</title>
      <Header content={content.name} />
      <Stats stats={content.stats} />
      <Heart content={content.data.dob} />
    </main>
  );
};

export default IndexPage;
