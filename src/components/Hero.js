/** @jsx jsx */

import { jsx, Box, useColorMode } from 'theme-ui';
import { useState } from 'react';
import Heart from '../components/Heart';
import Img from 'gatsby-image';

export default function Hero({ imageArray, text, ...props }) {
  const [mode, setMode] = useColorMode();

  const darkImages = imageArray[0].dark;

  const lightImages = imageArray[1].light;

  const currentImages = mode === 'light' ? lightImages : darkImages;

  const randomNo = Math.floor(Math.random() * currentImages.length);

  // //https://stackoverflow.com/questions/26944987/show-next-previous-item-of-an-array
  const [initialPic, setPic] = useState(randomNo);

  const imagePlaceholder = currentImages[initialPic];

  const image = (
    <Img
      sx={{
        backgroundColor: `${imagePlaceholder.color}`,
        height: '100%',
        maxHeight: ['80vh', null, '67vh'],
        boxShadow: `${'0 4em 8em -2em ' + imagePlaceholder.color}`,
      }}
      fluid={imagePlaceholder.image}
    />
  );

  return (
    <Box
      sx={{
        position: 'relative',
      }}
      {...props}
    >
      {image}
      <Heart
        onClick={() =>
          setPic(initialPic + 1 > currentImages.length - 1 ? 0 : initialPic + 1)
        }
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
}
