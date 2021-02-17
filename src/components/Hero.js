/** @jsx jsx */

import { jsx, Box } from 'theme-ui';
import { useState } from 'react';
import Heart from '../components/Heart';
import Img from 'gatsby-image';

export default function Hero({ image, text, ...props }) {
  const randomImage = image[Math.floor(Math.random() * image.length)];

  function useForceUpdate() {
    const [randomImage, setValue] = useState(0); // integer state
    return () => setValue((randomImage) => randomImage + 1); // update the state to force render
  }

  const refresh = useForceUpdate();

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
        onClick={refresh}
        sx={{
          position: 'absolute',
          right: '-3em',
          top: 'calc(50% - 3em)',
          height: '6em',
          width: '6em',
          zIndex: 99,
          cursor: 'pointer',
        }}
        content={text}
      />
    </Box>
  );
  return component;
}
