import Typography, { TypographyOptions } from 'typography'
import theme from 'typography-theme-grand-view'

theme.baseFontSize = '20px'
theme.googleFonts = [{ name: 'Raleway', styles: ['300', '800'] }]
theme.headerFontFamily = ['Raleway', 'sans-serif']
theme.bodyFontFamily = ['Raleway', 'sans-serif']
theme.headerColor = "rgba(255, 255, 255, 0.8)"
theme.bodyColor = "#fff"
theme.headerWeight = 700
theme.bodyWeight = 400
theme.boldWeight = 700

const typography = new Typography(theme as TypographyOptions)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
