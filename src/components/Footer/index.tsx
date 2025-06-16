import { useRef, useState } from 'react'
import { Fullscreen, FullscreenExit, MusicNote, MusicOff } from '@mui/icons-material'
import { Divider, Typography, IconButton, Tooltip } from '@mui/material'
import './index.css'

/**
 * Footer component
 * @returns {JSX.Element} Footer component
 */
export default function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear()
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleMusic = () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    if (audio.paused) {
      audio.play()
      setIsPlaying(true)
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  return (
    <footer>
      <Divider className="divider" color="#212732" />

      <div className="footer-container">
        <Typography variant="body2" align="center">
          © {currentYear} - Feito por{' '}
          <a className="bold-text" href="https://www.linkedin.com/in/anna-luiza-camargo-fistarol/" target="_blank">
            Anna Luiza Fistarol
          </a>
        </Typography>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Tooltip title={isPlaying ? 'Desativar música' : 'Ativar música'}>
            <IconButton className="fullscreen-button" onClick={toggleMusic} aria-label="music-toggle">
              {isPlaying ? <MusicOff /> : <MusicNote />}
            </IconButton>
          </Tooltip>

          <IconButton
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
          </IconButton>
        </div>
      </div>

      <audio ref={audioRef} loop preload="auto">
        <source src="/overword-theme.mp3" type="audio/mpeg" />
        Seu navegador não suporta áudio.
      </audio>
    </footer>
  )
}
