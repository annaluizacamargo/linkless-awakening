import { Box } from '@mui/material'
import { IMonster } from '@utils/types/monster.types'
import { useEffect, useState } from 'react'
import { IBattleResult } from '@utils/types/arena.types'
import { calculateBattle, getAllMonsters } from '@utils/helpers/BattleArena.helper'
import BattleArenaGrid from '@components/Grid/BattleArenaPage'
import BattleArenaPanel from '@components/Panels/BattleArenaPanel'
import './styles.css'

/**
 * BattleArena Page Component
 * @description This component handles the battle arena where users can select monsters to battle.
 */
export default function BattleArena() {
  const [monsters, setMonsters] = useState<IMonster[]>([])
  const [selected, setSelected] = useState<(number | null)[]>([null, null])
  const [battle, setBattle] = useState<IBattleResult | null>(null)
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    setMonsters(getAllMonsters())
  }, [])

  // Load last battle from localStorage if available and monsters are loaded
  useEffect(() => {
    if (monsters.length > 0) {
      const last = localStorage.getItem('lastBattle')

      if (last) {
        try {
          const { monsterA, monsterB } = JSON.parse(last)
          const idxA = monsters.findIndex((m) => m.name === monsterA.name)
          const idxB = monsters.findIndex((m) => m.name === monsterB.name)

          if (idxA !== -1 && idxB !== -1 && idxA !== idxB) {
            setSelected([idxA, idxB])

            const mA = monsters[idxA]
            const mB = monsters[idxB]

            const result = calculateBattle(mA, mB)

            setBattle(result)
            setShowResult(true)
          }
        } catch {
          console.error('Failed to parse last battle data from localStorage:', last)
          localStorage.removeItem('lastBattle') // Clear invalid data
        }
      }
    }
  }, [monsters])

  const handleSelect = (index: number) => {
    setShowResult(false)
    setBattle(null)

    if (selected[0] === index) {
      setSelected([null, selected[1]])
    } else if (selected[1] === index) {
      setSelected([selected[0], null])
    } else if (selected[0] === null) {
      setSelected([index, selected[1]])
    } else if (selected[1] === null) {
      setSelected([selected[0], index])
    } else {
      setSelected([selected[1], index])
    }
  }

  const handleBattle = () => {
    if (selected[0] !== null && selected[1] !== null && selected[0] !== selected[1]) {
      const mA = monsters[selected[0]!]
      const mB = monsters[selected[1]!]
      const result = calculateBattle(mA, mB)

      setBattle(result)
      setShowResult(true)

      localStorage.setItem(
        'lastBattle',
        JSON.stringify({
          monsterA: mA,
          monsterB: mB,
        })
      )
    }
  }

  return (
    <Box className="battle-arena-page">
      <BattleArenaGrid monsters={monsters} selected={selected} handleSelect={handleSelect} />

      <BattleArenaPanel
        monsters={monsters}
        selected={selected}
        battle={battle}
        showResult={showResult}
        handleBattle={handleBattle}
      />
    </Box>
  )
}
