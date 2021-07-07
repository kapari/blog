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
    'main a': {
      transition: 'all 0.25s ease-in-out',
      boxShadow: `0 2px ${colors.light.border}`,
      color: colors.light.fg,
      textDecoration: 'none'
    },
    'main a:hover, a:focus, a:active': {
      boxShadow: `0 3px ${colors.light.primary}`,
    },
    figure: {
      ...adjustFontSizeTo('20px'),
      color: colors.light.fgAlt,
      borderLeft: `${rhythm(1 / 2)} solid ${colors.light.border}`,
      backgroundColor: colors.light.bgAlt,
      paddingTop: rhythm(13 / 16),
      paddingBottom: rhythm(13 / 16),
      paddingLeft: rhythm(1),
      paddingRight: rhythm(1),
    },
    'figure blockquote': {
      fontStyle: 'italic',
      marginLeft: 0,
      marginRight: 0,
      marginBottom: rhythm(1 / 2)
    },
    'figure > :last-child': {
      marginBottom: 0,
    },
    hr: {
      margin: `${rhythm(2)} auto`,
      maxWidth: '50%',
      height: rhythm(2 / 16),
      background: colors.light.border
    },
    iframe: {
      maxWidth: '100%',
      width: '100%'
    }
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
