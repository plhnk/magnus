/** @jsx jsx */

import { jsx, Box } from 'theme-ui';
import Heart from '../components/Heart';
import Img from 'gatsby-image';

export default function Hero({ image, text, ...props }) {
  const randomImage = image[Math.floor(Math.random() * image.length)];

  const component = (
    <Box
      sx={{
        position: 'relative',
      }}
      {...props}
    >
      <Img
        sx={{
          backgroundColor: `${randomImage.color}`,
          height: '100%',
          maxHeight: ['50vh', null, '67vh'],
          boxShadow: '0 4em 8em -2em ' + `${randomImage.color}`,
        }}
        fluid={randomImage.image}
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
