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
        <Typography variant="h6" align="center" sx={{ color: '#ffe9b0', fontWeight: 700, mb: 2 }}>
          Resultado da Batalha
        </Typography>

        <Box className="battle-results">
          <Box className="battle-result">
            <Typography variant="subtitle1" sx={{ color: '#4caf50', fontWeight: 700 }}>
              🏆 Vencedor:
            </Typography>

            <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 700 }}>
              {battle.winner.name}
            </Typography>
          </Box>

          <Box className="battle-result">
            <Typography variant="subtitle1" sx={{ color: '#f44336', fontWeight: 700 }}>
              🚫 Perdedor:
            </Typography>

            <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 700 }}>
              {battle.loser.name}
            </Typography>
          </Box>
        </Box>

        <Box className="battle-results-stats">
          <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700 }}>
            Evolução dos HPs vs Rounds
          </Typography>

          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={getHpEvolution(battle)}>
              <XAxis dataKey="round" stroke="#fff" />
              <YAxis stroke="#fff" />

              <ChartTooltip
                contentStyle={{
                  background: '#131313',
                  boxShadow: '0 0 0.5rem rgba(88, 88, 88, 0.473)',
                  color: '#bfa046',
                  fontWeight: 700,
                }}
              />

              <Legend />

              <Line
                type="monotone"
                dataKey={battle.rounds[0].attacker.name}
                stroke={battle.winner.name === battle.rounds[0].attacker.name ? '#4caf50' : '#f44336'}
                strokeWidth={3}
                dot={false}
              />

              <Line
                type="monotone"
                dataKey={battle.rounds[0].defender.name}
                stroke={battle.winner.name === battle.rounds[0].defender.name ? '#4caf50' : '#f44336'}
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        <Box className="battle-results-stats">
          <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>
            Logs:
          </Typography>

          <Box
            sx={{
              maxHeight: 220,
              overflowY: 'auto',
              background: '#181a22cc',
              borderRadius: 2,
              p: 2,
              fontFamily: 'Fira Mono, monospace',
              color: '#b9f5a7',
              fontSize: 15,
              border: '1.5px solid #23272f',
              boxShadow: '0 2px 8px #0006',
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
                  color: '#b9b9b9',
                  background: 'transparent',
                  textAlign: 'left',
                  fontSize: '0.9rem',
                }}
              >
                <span style={{ color: '#75bf81' }}>{`>`} </span>
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
