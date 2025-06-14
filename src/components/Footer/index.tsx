import { useState } from 'react'
import { Fullscreen, FullscreenExit } from '@mui/icons-material'
import { Divider, Typography } from '@mui/material'
import './index.css'

/**
 * Footer component
 * @returns {JSX.Element} Footer component
 */
export default function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear()
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <footer>
      <Divider className="divider" color="#212732" />

      <div className="footer-container">
        <Typography variant="body2" align="center">
          © {currentYear} - Feito por{' '}
          <a className="bold-text" href="https://www.linkedin.com/in/anna-luiza-camargo-fistarol/">
            Anna Luiza Fistarol
          </a>{' '}
        </Typography>

        <button
          className="fullscreen-button"
          onClick={() => {
            const elem = document.documentElement

            if (!document.fullscreenElement) {
              setIsFullscreen(true)
              elem.requestFullscreen().catch((err) => {
                console.error(`Failed to enter fullscreen: ${err.message}`)
              })
            } else {
              setIsFullscreen(false)
              document.exitFullscreen().catch((err) => {
                console.error(`Failed to exit fullscreen: ${err.message}`)
              })
            }
          }}
        >
          {isFullscreen ? <FullscreenExit /> : <Fullscreen />}
        </button>
      </div>
    </footer>
  )
}
