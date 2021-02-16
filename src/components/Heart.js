/** @jsx jsx */

import { jsx } from 'theme-ui';

export default function Heart({ content, ...props }) {
  const circleText = content + ' • ';

  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 112 112"
      sx={{
        fill: 'none',
        color: 'text',
        overflow: 'visible',
      }}
      {...props}
    >
      <path
        id="heart"
        sx={{ transform: 'rotate(15deg)', transformOrigin: 'unset' }}
        fill="currentColor"
        d="M55.97 46.75c-9.03-10.05-24.08-.68-18.92 11.79 2.28 4.87 16.06 17.2 17.62 18.58.73.58 1.83.67 2.6.01 1.56-1.39 15.34-13.71 17.62-18.58 5.5-12.53-10.73-21.85-18.92-11.8z"
      />
      <path
        fill="transparent"
        id="textPath"
        d="M111.5 56a55.5 55.5 0 11-111 0 55.5 55.5 0 01111 0z"
      />
      <text
        sx={{
          fill: 'muted',
          fontSize: 12,
          letterSpacing: '.23em',
          textTransform: 'uppercase',
          transformOrigin: 'unset',
          animation: 'rotate 20s linear infinite',
          '@keyframes rotate': {
            to: { transform: 'rotate(360deg)' },
            from: { transform: 'rotate(0)' },
          },
        }}
      >
        <textPath alignmentBaseline="top" xlinkHref="#textPath">
          {circleText.repeat(2)}
        </textPath>
      </text>
    </svg>
  );

  return icon;
}
