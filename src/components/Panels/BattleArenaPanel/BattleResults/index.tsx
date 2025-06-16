import { Box, Typography, Paper } from '@mui/material'
import { getHpEvolution } from '@utils/helpers/BattleArena.helper'
import { IBattleResult } from '@utils/types/arena.types'
import { LineChart, Line, XAxis, YAxis, Tooltip as ChartTooltip, Legend, ResponsiveContainer } from 'recharts'

export default function BattleResults({ battle }: { battle: IBattleResult | null }): React.JSX.Element | null {
  if (!battle) {
    return null
  }

  return (
    <Box sx={{ width: '100%', mt: 3 }}>
      <Paper sx={{}} className="battle-results-panel">
        <Typography variant="h6" align="center" sx={{ color: 'var(--golden-color-light)', fontWeight: 700, mb: 2 }}>
          Resultado da Batalha
        </Typography>

        <Box className="battle-results">
          <Box className="battle-result">
            <Typography variant="subtitle1" sx={{ color: 'var(--green-color-main)', fontWeight: 700 }}>
              🏆 Vencedor:
            </Typography>

            <Typography variant="subtitle2" sx={{ color: 'var(--neutral-100)', fontWeight: 700 }}>
              {battle.winner.name}
            </Typography>
          </Box>

          <Box className="battle-result">
            <Typography variant="subtitle1" sx={{ color: 'var(--red-color-main)', fontWeight: 700 }}>
              🚫 Perdedor:
            </Typography>

            <Typography variant="subtitle2" sx={{ color: 'var(--neutral-100)', fontWeight: 700 }}>
              {battle.loser.name}
            </Typography>
          </Box>
        </Box>

        <Box className="battle-results-stats">
          <Typography variant="subtitle1" sx={{ color: 'var(--neutral-100)', fontWeight: 700 }}>
            Evolução dos HPs vs Rounds
          </Typography>

          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={getHpEvolution(battle)}>
              <XAxis dataKey="round" stroke="var(--neutral-100)" />
              <YAxis stroke="var(--neutral-100)" />

              <ChartTooltip
                contentStyle={{
                  background: 'var(--neutral-900)',
                  boxShadow: 'var(--box-shadow-default)',
                  color: 'var(--golden-color-main)',
                  fontWeight: 700,
                }}
              />

              <Legend />

              <Line
                type="monotone"
                dataKey={battle.rounds[0].attacker.name}
                stroke={
                  battle.winner.name === battle.rounds[0].attacker.name
                    ? 'var(--green-color-main)'
                    : 'var(--red-color-main)'
                }
                strokeWidth={3}
                dot={false}
              />

              <Line
                type="monotone"
                dataKey={battle.rounds[0].defender.name}
                stroke={
                  battle.winner.name === battle.rounds[0].defender.name
                    ? 'var(--green-color-main)'
                    : 'var(--red-color-main)'
                }
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        <Box className="battle-results-stats">
          <Typography variant="subtitle1" sx={{ color: 'var(--neutral-100)', fontWeight: 700, mb: 1 }}>
            Logs:
          </Typography>

          <Box
            sx={{
              maxHeight: 220,
              overflowY: 'auto',
              background: 'var(--background-quinary)',
              borderRadius: 2,
              p: 2,
              fontFamily: 'Fira Mono, monospace',
              color: 'var(--green-color-lighter)',
              fontSize: 15,
              border: '1.5px solid var(--blue-color-darker)',
              boxShadow: '0 2px 8px var(--neutral-1000)',
            }}
          >
            {battle.rounds.map((round, i) => (
              <Box
                key={i}
                component="pre"
                sx={{
                  m: 0,
                  mb: 0.5,
                  whiteSpace: 'pre-wrap',
                  fontFamily: 'inherit',
                  color: 'var(--neutral-400)',
                  background: 'transparent',
                  textAlign: 'left',
                  fontSize: '0.9rem',
                }}
              >
                <span style={{ color: 'var(--green-color-light)' }}>{`>`} </span>
                <b>Round {i + 1}:</b> {round.attacker.name} atacou {round.defender.name} causando <b>{round.damage}</b>{' '}
                de dano. HP de {round.defender.name}: <b>{round.defenderHpAfter}</b>
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}
