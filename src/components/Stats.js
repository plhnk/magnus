/** @jsx jsx */

import { jsx, Text, Box } from 'theme-ui';

export default function Stats({ stats, ...props }) {
  const newArray = stats.reduce(function (result, value, index, array) {
    if (index % 2 === 0) result.push(array.slice(index, index + 2));
    return result;
  }, []);
  const statArray = newArray.map((i, index) => (
    <Text as="p" sx={{ lineHeight: 1.5 }} key={index}>
      <Text as="strong" sx={{ fontWeight: 'body' }}>
        {i[0]}{' '}
      </Text>
      <Text as="span" sx={{ color: 'muted' }}>
        {i[1]}
      </Text>
    </Text>
  ));
  return <Box {...props}>{statArray}</Box>;
}
