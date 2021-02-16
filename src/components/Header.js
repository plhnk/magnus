/** @jsx jsx */

import { jsx, Heading } from 'theme-ui';

export default function Header({ content, ...props }) {
  const headline = content.map((i, index) => (
    <span
      sx={{ '&:nth-of-type(1)': { ml: '-.36ch' }, display: 'block' }}
      key={index}
    >
      {i}
    </span>
  ));
  return (
    <Heading as="h1" sx={{ variant: 'text.display' }} {...props}>
      {headline}
    </Heading>
  );
}
