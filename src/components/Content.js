/** @jsx jsx */

import { jsx, Flex } from 'theme-ui';
import Stats from '../components/Stats';
import Img from 'gatsby-image';

export default function Content({ image, text, ...props }) {
  const component = (
    <Flex
      sx={{
        justifyContent: 'space-between',
      }}
      {...props}
    >
      <Stats sx={{ mr: ['auto', '2.5em'] }} stats={text} />
      <Img
        sx={{
          height: '6em',
          width: '6em',
          borderRadius: '50%',
          mr: '-3em',
        }}
        fluid={image}
      />
    </Flex>
  );
  return component;
}
