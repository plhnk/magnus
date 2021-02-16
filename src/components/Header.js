/** @jsx jsx */

import { jsx, Heading } from 'theme-ui';

export default function Header({ content, ...props }) {
  const headline = content.map((i, index) => (
    <span
      sx={{ '&:nth-of-type(1)': { ml: '-.5ch' }, display: 'block' }}
      key={index}
    >
      {i}
    </span>
  ));
  return (
    <Heading as="h1" sx={{fontFamily:'display'}} {...props}>
      {headline}
    </Heading>
  );
}
