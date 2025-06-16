import { MonsterInfoCard } from '@components/Cards/MonsterInfo'
import { AddCircle } from '@mui/icons-material'
import { Paper, IconButton, Tooltip, Grid } from '@mui/material'
import { mockMonstersApiReturn } from '@utils/mocks/MonstersApiReturn'
import { stringToMd5 } from '@utils/helpers/String.helper'

/**
 * MonsterGrid Component
 * @description This component displays a grid of monster cards, allowing users to select and manage monsters.
 */
export default function MonsterGrid({
  allMonsters,
  selectedIndex,
  setSelectedIndex,
  readOnly,
  setEditingIndex,
  handleAddNew,
}: {
  allMonsters: { name: string; image_url?: string }[]
  selectedIndex: number | null
  setSelectedIndex: (index: number | null) => void
  readOnly: boolean
  setEditingIndex: (index: number | null) => void
  handleAddNew: () => void
}): React.JSX.Element {
  return (
    <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
      {allMonsters?.map((monster, index) => (
        <Grid key={stringToMd5(monster.name + index)}>
          <MonsterInfoCard
            monster={monster}
            index={index}
            selectedIndex={selectedIndex}
            readOnly={readOnly}
            setSelectedIndex={setSelectedIndex}
            setEditingIndex={setEditingIndex}
            mockMonsters={mockMonstersApiReturn}
            setReadOnly={(value: boolean) => {
              if (value) {
                setEditingIndex(null)
              }
            }}
          />
        </Grid>
      ))}

      <Grid>
        <Paper
          sx={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            background: '#222',
            width: '6.25rem',
            minHeight: '6.25rem',
          }}
          onClick={handleAddNew}
        >
          <Tooltip title="Adicionar nova criatura" placement="top">
            <IconButton aria-label="add" onClick={handleAddNew} sx={{ p: 0, m: 0 }}>
              <AddCircle
                fontSize="inherit"
                sx={{
                  color: '#bfa046',
                  bottom: 16,
                  right: 16,
                  height: '100%',
                  width: '3rem',
                }}
              />
            </IconButton>
          </Tooltip>
        </Paper>
      </Grid>
    </Grid>
  )
}
