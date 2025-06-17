import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import GoldLogo from '@assets/logo/linkless-awakening-logo-gold.svg'

/**
 * HomePage component
 * @description This component serves as the landing page for the Linkless Awakening application.
 */
export default function HomePage() {
  const navigate = useNavigate()

  return (
    <Box className="home-page">
      <Box className="home-content">
        <img src={GoldLogo} alt="Linkless Awakening Logo" height={100} />

        <Typography variant="body1" className="home-description">
          Bem-vindo à <span className="emphasis">batalha de monstros!</span> <br />
          Cadastre suas criaturas ou desafie os monstros na arena.
        </Typography>

        <Box className="home-buttons">
          <Button
            variant="contained"
            sx={{ fontWeight: 700, mt: 1, borderRadius: 2 }}
            size="large"
            fullWidth
            onClick={() => navigate('/cadastro')}
          >
            📋 Cadastro de Criaturas
          </Button>

          <Button
            variant="contained"
            sx={{ fontWeight: 700, mt: 1, borderRadius: 2 }}
            size="large"
            fullWidth
            onClick={() => navigate('/batalhas')}
          >
            ⚔️ Arena de Batalha
          </Button>
        </Box>

        <Typography variant="body2">
          No canto inferior direito, você encontrará dois botões para tornar sua aventura ainda mais emocionante:{' '}
          <span className="emphasis">Música de Fundo</span> para uma trilha sonora épica e{' '}
          <span className="emphasis">Fullscreen</span> para uma experiência imersiva.
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: 'var(--neutral-400)',
            mt: 2,
            textAlign: 'center',
            letterSpacing: 1,
          }}
        >
          Desafio Técnico de Front-End - Linkless Awakening
          <br />
          Repositório:{' '}
          <a
            href="https://github.com/annaluizacamargo/linkless-awakening"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--neutral-400)', textDecoration: 'underline' }}
          >
            GitHub
          </a>
        </Typography>
      </Box>
    </Box>
  )
}
