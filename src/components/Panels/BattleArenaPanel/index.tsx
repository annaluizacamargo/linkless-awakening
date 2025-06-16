import { MonsterInfoCard } from '@components/Cards/MonsterInfo'
import { Box, Typography, Paper, Button } from '@mui/material'
import { mockMonstersApiReturn } from '@utils/mocks/MonstersApiReturn'
import { stringToMd5 } from '@utils/helpers/String.helper'
import { IMonster } from '@utils/types/monster.types'
import { IBattleRound } from '@utils/types/arena.types'
import BattleResults from './BattleResults'
import './styles.css'

/**
 * BattleArenaPanel Component
 * @description This component displays the battle arena panel where users can select monsters to battle and view results.
 */
export default function BattleArenaPanel({
  monsters,
  selected,
  battle,
  showResult,
  handleBattle,
}: {
  monsters: IMonster[]
  selected: (number | null)[]
  battle: {
    winner: IMonster
    loser: IMonster
    rounds: IBattleRound[]
  } | null
  showResult: boolean
  handleBattle: () => void
}): React.JSX.Element {
  return (
    <Box className="battle-arena-panel">
      <Typography variant="h5" className="bold-text" sx={{ color: '#ffe9b0' }}>
        Criaturas escollhidas
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, width: '100%', justifyContent: 'center' }}>
        {[0, 1].map((side, index) => (
          <Paper
            key={stringToMd5(side + index + 'selection')}
            className="monster-selection-card"
            elevation={selected[side] !== null ? 8 : 1}
            sx={{
              background:
                selected[side] !== null
                  ? side === 0
                    ? 'linear-gradient(135deg, #3a2323 60%, #f44336 100%)'
                    : 'linear-gradient(135deg, #23303a 60%, #2196f3 100%)'
                  : '#23272f',
            }}
          >
            {selected[side] !== null ? (
              <>
                <MonsterInfoCard
                  monster={monsters[selected[side]!]}
                  index={selected[side]!}
                  selectedIndex={selected[side]!}
                  readOnly={true}
                  setSelectedIndex={() => {}}
                  mockMonsters={mockMonstersApiReturn}
                  canEdit={false}
                />

                <Typography variant="subtitle1" sx={{ mt: 1, color: '#fff' }} className="bold-text">
                  {monsters[selected[side]!].name}
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="body2" sx={{ color: '#bfa046' }} className="bold-text">
                  Selecione o
                </Typography>

                <Typography variant="body2" sx={{ color: '#bfa046' }} className="bold-text">
                  {side === 0 ? 'participante 1' : 'participante 2'}
                </Typography>
              </>
            )}
          </Paper>
        ))}
      </Box>

      <Button
        variant="contained"
        color="warning"
        fullWidth
        sx={{ fontWeight: 700, mt: 1, borderRadius: 2 }}
        disabled={showResult || selected[0] === null || selected[1] === null || selected[0] === selected[1]}
        className="fight-button"
        onClick={handleBattle}
      >
        Batalhar!
      </Button>

      {showResult && battle && <BattleResults battle={battle} />}
    </Box>
  )
}
