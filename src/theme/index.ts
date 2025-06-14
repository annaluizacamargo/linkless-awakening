import { createTheme } from '@mui/material'
import './theme.css'

declare module '@mui/material/styles' {
  interface TypeBackground {
    secondary?: string
  }
}

// Function to get CSS variable values
const getCssVariable = (variable: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(variable).trim()

/**
 * Linkless Awakening Theme
 * @description This theme is used for the Linkless Awakening  application to use the MUI design system.
 */
export const goLiveTheme = createTheme({
  palette: {
    primary: {
      main: getCssVariable(`--dark-primary-main`),
      light: getCssVariable(`--dark-primary-light`),
      dark: getCssVariable(`--dark-primary-dark`),
      contrastText: getCssVariable(`--dark-primary-contrast-text`),
    },
    secondary: {
      main: getCssVariable(`--dark-secondary-main`),
      light: getCssVariable(`--dark-secondary-light`),
      dark: getCssVariable(`--dark-secondary-dark`),
      contrastText: getCssVariable(`--dark-secondary-contrast-text`),
    },
    text: {
      primary: getCssVariable(`--dark-text-primary`),
      secondary: getCssVariable(`--dark-text-secondary`),
      disabled: getCssVariable(`--dark-text-disabled`),
    },
    background: {
      default: getCssVariable(`--dark-background-default`),
      paper: getCssVariable(`--dark-background-paper`),
      secondary: getCssVariable(`--dark-background-secondary`),
    },
    action: {
      active: getCssVariable(`--dark-action-active`),
      hover: getCssVariable(`--dark-action-hover`),
      selected: getCssVariable(`--dark-action-selected`),
    },
    error: { main: getCssVariable('--alert-color') },
    success: { main: getCssVariable('--dark-success-color') },
  },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
})
