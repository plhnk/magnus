/** @jsx jsx */

import { jsx, Flex, Button, useColorMode } from 'theme-ui';
import Stats from '../components/Stats';
import Img from 'gatsby-image';

export default function Content({ image, text, ...props }) {
  const [mode, setMode] = useColorMode();
  const component = (
    <Flex
      sx={{
        justifyContent: 'space-between',
      }}
      {...props}
    >
      <Stats
        sx={{
          mr: ['auto', '2.5em'],
          position: 'relative',
        }}
        stats={text}
      />
      <Button
        sx={{
          variant: 'buttons.invisible',
          borderRadius: '50%',
          height: '6em',
          width: '6em',
          mr: '-3em',
        }}
        onClick={(e) => {
          const next = mode === 'dark' ? 'light' : 'dark';
          setMode(next);
        }}
      >
        <Img
          sx={{
            height: 'inherit',
            width: 'inherit',
            borderRadius: 'inherit',
          }}
          fluid={image}
        />
      </Button>
    </Flex>
  );
  return component;
}
