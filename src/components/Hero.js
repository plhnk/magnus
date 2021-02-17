/** @jsx jsx */

import { jsx, Box, useColorMode } from 'theme-ui';
import { useState } from 'react';
import Heart from '../components/Heart';
import Img from 'gatsby-image';
const [mode, setMode] = useColorMode();

export default function Hero({ image, text, ...props }) {
  const randomImage = image[Math.floor(Math.random() * image.length)];

  console.log(image, 'images');
  // need two arrays of images — if its light mode, pull from one set, else the other

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
          backgroundColor: `${randomImage.dark.color}`,
          height: '100%',
          maxHeight: ['50vh', null, '67vh'],
          boxShadow: '0 4em 8em -2em ' + `${randomImage.dark.color}`,
        }}
        fluid={randomImage.dark.image}
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
