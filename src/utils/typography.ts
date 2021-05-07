import Typography, { TypographyOptions } from 'typography'
import theme from 'typography-theme-sutro'

const typography = new Typography(theme as TypographyOptions)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
