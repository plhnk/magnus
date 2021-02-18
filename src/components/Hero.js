/** @jsx jsx */

import { jsx, Box, useColorMode } from 'theme-ui';
import { useState, setState, useEffect } from 'react';
import Heart from '../components/Heart';
import Img from 'gatsby-image';

export default function Hero({ imageArray, text, ...props }) {
  const [mode, setMode] = useColorMode();

  const darkImages = imageArray[0].dark;

  const lightImages = imageArray[1].light;

  const currentImages = mode === 'light' ? lightImages : darkImages;

  // const randomImage =
  //   currentImages[Math.floor(Math.random() * currentImages.length)];

  const randomNo = Math.floor(Math.random() * currentImages.length);

  // //https://stackoverflow.com/questions/26944987/show-next-previous-item-of-an-array
  const [initialPic, setPic] = useState(randomNo);
  // const [initialPic, setPic] = useState(randomImage);

  function nextItem() {
    const i = currentImages.indexOf(initialPic) + 1;
    if (i === i % currentImages.length) {
      return 0;
    }
    return i; // output is an object
  }
  // function nextItem(currentItem, inputArray) {
  //   const i = inputArray.indexOf(currentItem) + 1;
  //   if (i === i % inputArray.length) {
  //     return inputArray[0];
  //   }
  //   return inputArray[i]; // output is an object
  // }
  const newPic = nextItem(initialPic, currentImages);

  // // if i'm updating an image — setPic should get me a new randomPic — but need to check if that randomPic === currentPic, if so, get a new randomPic

  // const isNextItem = nextItem(randomImage, currentImages);
  // console.log(isNextItem, 'is next?');

  // const newPic = setPic(
  //   initialPic === randomImage ? preventRedundancy(initialPic) : randomImage
  // );

  // const newPic = setPic(randomImage);

  // //https://stackoverflow.com/questions/26944987/show-next-previous-item-of-an-array
  //   const next = nextItem(randomImage, currentImages);

  // const x = setPic(nextItem(initialPic, currentImages));

  // const randomImage = imageArray[0].dark;

  // console.log(preventRedundancy(randomImage), 'refresh?');
  // console.log(preventRedundancy(initialPic), 'not redundant');
  // console.log(nextItem(randomImage, currentImages), 'next item?');
  // console.log(randomImage, 'current item');
  // console.log(next, 'next pic?');
  // console.log(setPic(next), 'set pic?');
  // console.log(x, 'next pic x?');
  // console.log(data,'image?')
  // console.log(setPic(newPic),'new pic?')

  // const refresh = useForceUpdate();
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
