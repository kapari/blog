import Typography, { TypographyOptions } from 'typography';
import theme from 'typography-theme-grand-view';

theme.baseFontSize = '20px';
theme.googleFonts = [{ name: 'Poppins', styles: ['300', '700'] }];
theme.headerFontFamily = ['Poppins', 'sans-serif'];
theme.bodyFontFamily = ['Poppins', 'sans-serif'];
theme.headerColor = '#393a41';
theme.bodyColor = '#393a41';
theme.headerWeight = 700;
theme.bodyWeight = 400;
theme.boldWeight = 700;

const typography = new Typography(theme as TypographyOptions);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
