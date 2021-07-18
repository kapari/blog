const colors = {
  paleGreen: {
    hex: '#f9faf4',
    hsl: '70, 37%, 97%'
  },
  lightGreen: {
    hex: '#edf2e3',
    hsl: '80, 37%, 92%'
  },
  medGreen: {
    hex: '#c1cfa0',
    hsl: '78, 33%, 72%'
  },
  teal: '#50777c',
  darkTeal: '#404d53',
  blackish: '#393a41',
  black: '#111',
  white: '#fff',
  shadow: 'rgba(0, 0, 0, 0.3)'
}

const theme: {
  [key: string]: {
    [key: string]: string
  }
} = {
  light: {
    bg: colors.paleGreen.hex,
    bgHsl: colors.paleGreen.hsl,
    bgAlt: colors.lightGreen.hex,
    bgAltHsl: colors.lightGreen.hsl,
    bgAltStrong: colors.medGreen.hex,
    fg: colors.black,
    fgAlt: colors.blackish,
    primary: colors.teal,
    primaryAlt: colors.darkTeal,
    primaryContrast: colors.white,
    border: colors.medGreen.hex,
    gradient: `linear-gradient(120deg, ${colors.medGreen.hex} 0%,
      ${colors.teal} 100%)`,
    shadow: colors.shadow
  },
  dark: {
    bg: colors.blackish,
    bgAlt: colors.black,
    bgAltStrong: colors.darkTeal,
    fg: colors.white,
    fgAlt: colors.paleGreen.hex,
    primary: colors.medGreen.hex,
    primaryAlt: colors.teal,
    primaryContrast: colors.white,
    border: colors.teal,
    gradient: `linear-gradient(120deg, ${colors.medGreen.hex} 0%,
        ${colors.teal} 100%)`,
    shadow: colors.shadow
  }
}

export default theme
