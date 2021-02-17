/** @jsx jsx */

import { jsx, Box } from 'theme-ui';
import Heart from '../components/Heart';
import Img from 'gatsby-image';

export default function Hero({ image, text, ...props }) {
  const component = (
    <Box
      sx={{
        position: 'relative',
      }}
      {...props}
    >
      <Img
        sx={{
          height: '100%',
          maxHeight: ['50vh', null, '67vh'],
          filter: 'blur(80px)',
          position: 'absolute !important',
          width: '80%',
          left: '10%',
          top: '10%',
          overflow: 'visible',
          opacity: 0.8,
        }}
        fluid={image}
      />
      <Img
        sx={{ height: '100%', maxHeight: ['50vh', null, '67vh'] }}
        fluid={image}
      />
      <Heart
        sx={{
          position: 'absolute',
          right: '-4em',
          top: 'calc(50% - 4em)',
          height: '8em',
          width: '8em',
          zIndex: 99,
        }}
        content={text}
      />
    </Box>
  );
  return component;
}
