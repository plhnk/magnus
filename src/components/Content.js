/** @jsx jsx */

import { jsx, Flex } from 'theme-ui';
import Stats from '../components/Stats';
import Img from 'gatsby-image';

export default function Content({ image, text, ...props }) {
  const component = (
    <Flex
      sx={{
        justifyContent: 'space-between',
        width: ['auto', 320],
      }}
      {...props}
    >
      <Stats sx={{ mr: ['auto', '2.5em'] }} stats={text} />
      <Img
        sx={{
          height: '5em',
          width: '5em',
          borderRadius: '50%',
          mr: '-2.5em',
        }}
        fluid={image}
      />
    </Flex>
  );
  return component;
}
