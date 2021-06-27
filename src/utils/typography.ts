import Typography from 'typography';
import colors from './colors';
// import theme from 'typography-theme-grand-view';

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
    h1: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
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

// theme.baseFontSize = '20px';
// theme.googleFonts = [{ name: 'Poppins', styles: ['300', '700'] }];
// theme.headerFontFamily = ['Poppins', 'sans-serif'];
// theme.bodyFontFamily = ['Poppins', 'sans-serif'];
// theme.headerColor = '#393a41';
// theme.bodyColor = '#393a41';
// theme.headerWeight = 700;
// theme.bodyWeight = 400;
// theme.boldWeight = 700;

// const typography = new Typography(theme as TypographyOptions);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
