import { Box, Button, Typography } from '@mui/material'
import { Explore } from '@mui/icons-material'
import './styles.css'

/**
 * Not Found Page
 * @returns {JSX.Element} Not Found component
 */
export default function NotFoundPage(): React.JSX.Element {
  return (
    <Box className="dashboard-container-error" sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h2" className="error-title" sx={{ fontWeight: 700, mb: 2 }}>
        🏰 404 🏰
      </Typography>

      <Box>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Opa! Você caiu numa <span className="emphasis">dungeon</span> secreta...
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          Parece que o caminho escolhido não existe no mapa. Que tal usar a bússola e voltar para a aventura?
        </Typography>
      </Box>

      <Button
        variant="contained"
        onClick={() => (window.location.href = '/')}
        className="button-back"
        startIcon={<Explore />}
        sx={{ fontWeight: 700, px: 3, py: 1 }}
      >
        Voltar para a vila
      </Button>
    </Box>
  )
}
