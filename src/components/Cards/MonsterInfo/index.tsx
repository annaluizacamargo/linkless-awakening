import { Edit as EditIcon } from '@mui/icons-material'
import { Typography, Paper, IconButton, Box } from '@mui/material'
import './styles.css'

/**
 * MonsterInfoCard Component
 * @description This component displays a card with monster information, allowing selection and editing.
 */
export const MonsterInfoCard = ({
  monster,
  index,
  selectedIndex,
  setSelectedIndex,
  readOnly,
  setEditingIndex,
  mockMonsters = [],
  setReadOnly,
}: {
  monster: {
    name: string
    image_url?: string
  }
  index: number
  selectedIndex: number | null
  setSelectedIndex: (index: number | null) => void
  readOnly: boolean
  setEditingIndex: (index: number | null) => void
  mockMonsters?: { name: string; image_url?: string }[]
  setReadOnly: (readOnly: boolean) => void
}) => {
  return (
    <Paper
      className="monster-info-card"
      sx={{
        border: selectedIndex === index && readOnly ? '2px solid #bfa046' : '2px solid transparent',
      }}
      onClick={() => {
        setSelectedIndex(index)
        setEditingIndex(null)
      }}
    >
      <Box className="monster-image-container">
        <img
          src={monster.image_url || `https://placehold.co/80x80?text=${monster.name}`}
          alt={monster.name}
          className="smart-image"
        />
      </Box>

      <Typography variant="body2" className="monster-name">
        {monster.name}
      </Typography>

      {index >= mockMonsters.length && (
        <IconButton
          size="small"
          sx={{
            position: 'absolute',
            top: 4,
            right: 4,
            color: '#bfa046',
            background: '#181818',
            '&:hover': { background: '#bfa04622' },
          }}
          onClick={(e) => {
            e.stopPropagation()
            setEditingIndex(index - mockMonsters.length)
            setSelectedIndex(null)
            setReadOnly(false)
          }}
          aria-label="Editar"
        >
          <EditIcon sx={{ padding: '0.25rem', fontSize: '1rem' }} />
        </IconButton>
      )}
    </Paper>
  )
}
