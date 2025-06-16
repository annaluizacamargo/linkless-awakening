import { MonsterInfoCard } from '@components/Cards/MonsterInfo'
import { Tooltip, Grid, Box, Typography } from '@mui/material'
import { mockMonstersApiReturn } from '@utils/mocks/MonstersApiReturn'
import { stringToMd5 } from '@utils/helpers/String.helper'

/**
 * BattleArenaGrid Component
 * @description This component displays a grid of monsters in the battle arena, allowing users to select two participants for a battle.
 */
export default function BattleArenaGrid({
  monsters,
  selected,
  handleSelect,
}: {
  monsters: { name: string; image_url?: string }[]
  selected: (number | null)[]
  handleSelect: (index: number) => void
}): React.JSX.Element {
  return (
    <Box className="arena-container">
      <Typography variant="h4" align="center">
        Arena de Batalha
      </Typography>

      <Typography align="center" sx={{ mb: 3, color: '#bfa046', fontWeight: 500 }}>
        Selecione dois participantes para batalhar!
      </Typography>

      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {monsters.map((monster, index) => {
          const borderColor = selected[0] === index ? '#f44336' : selected[1] === index ? '#2196f3' : 'transparent'
          const boxShadow = selected[0] === index || selected[1] === index ? `0 0 0 3px ${borderColor}88` : 'none'

          return (
            <Grid key={stringToMd5(monster.name + index)}>
              <Box
                sx={{
                  border: `2.5px solid ${borderColor}`,
                  borderRadius: '0.5rem',
                  boxShadow,
                  transition: 'border 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                }}
                onClick={() => handleSelect(index)}
              >
                <Tooltip title={monster.name}>
                  <MonsterInfoCard
                    monster={monster}
                    index={index}
                    selectedIndex={selected[0] === index ? index : selected[1] === index ? index : null}
                    readOnly={true}
                    mockMonsters={mockMonstersApiReturn}
                    canEdit={false}
                  />
                </Tooltip>
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
