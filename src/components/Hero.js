/** @jsx jsx */

import { jsx, Box } from 'theme-ui';
import Heart from '../components/Heart';
import Img from 'gatsby-image';

export default function Hero({ image, text, ...props }) {
  const component = (
    <Box
      sx={{
        // width: ['80vw', '60vw', '50vw'],
        position: 'relative',
      }}
      {...props}
    >
      <Img sx={{ height: '100%' }} fluid={image} />
      <Heart
        sx={{
          position: 'absolute',
          right: '-3em',
          top: 'calc(50% - 3em)',
          height: '6em',
          width: '6em',
        }}
        content={text}
      />
    </Box>
  );
  return component;
}
