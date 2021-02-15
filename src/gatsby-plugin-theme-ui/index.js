export default {
  colors: {
    // Basic Theme Colors
    text: '#F9F0CA',
    background: '#1C0E04',
    primary: '#E86202',
    secondary: '#0084ff',
    accent: '#FC3BBA',
    muted: '#7b736e',
    modes: {
      light: {
        text: '#020200',
        background: '#F9F0CA',
        muted: '#878382',
      },
    },
  },
  fonts: {},
  fontSizes: [
    '.8rem',
    '.9rem',
    '1rem',
    '1.2rem',
    '1.8rem',
    '2.2rem',
    '3rem',
    '5rem',
  ],
  sizes: [
    '.8rem',
    '.9rem',
    '1rem',
    '1.2rem',
    '1.8rem',
    '2.2rem',
    '3rem',
    '5rem',
  ],
  lineHeights: {
    body: 1.4,
    heading: 1.1,
  },
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  letterSpacings: {
    heading: '-0.05em',
    caps: '0.1em',
  },
  text: {
    heading: {
      color: 'text',
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'heading',
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      fontSize: [5, 6, 7],
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: 'caps',
    },
    hotkey: {
      variant: 'styles.codeBase',
      lineHeight: '1.5',
      textTransform: 'capitalize',
      fontWeight: 'bold',
      color: 'mainL4',
      py: 0,
      mx: '.2ch',
      bg: 'white',
    },
    code: {},
  },
  space: [0, '.4rem', '1rem', '2rem', '3rem', '8rem', '16rem', '32rem'],
  alignments: {
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      color: 'main',
    },
  },
};
