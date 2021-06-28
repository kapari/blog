import Typography from 'typography';
import colors from './colors';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  scaleRatio: 1.75,
  googleFonts: [{ name: 'Poppins', styles: ['300', '700'] }],
  headerFontFamily: ['Poppins', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Poppins', 'Arial', 'sans-serif'],
  headerColor: colors.light.fgAlt,
  bodyColor: colors.light.fg,
  headerWeight: 700,
  bodyWeight: 300,
  includeNormalize: true,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    blockquote: {
      ...adjustFontSizeTo('20px'),
      color: colors.light.fgAlt,
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
      borderLeft: `${rhythm(3 / 16)} solid ${colors.light.primary}`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
