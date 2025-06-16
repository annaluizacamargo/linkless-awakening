import { Box } from '@mui/material'
import { DefaultMonster, MONSTERS_KEY } from '@utils/constants/Monsters'
import { mockMonstersApiReturn } from '@utils/mocks/MonstersApiReturn'
import { IMonster } from '@utils/types/monster.types'
import { useEffect, useState } from 'react'
import MonsterGrid from '@components/Grid/AddMonsterPage'
import MonsterForm from '@components/Panels/MonsterForm'
import './styles.css'
import { getLocalStorageMonsters } from '@utils/helpers/MonsterCost.helper'

/**
 * MonstersForm Page Component
 * @description This component handles the registration and management of monsters.
 */
export default function MonstersForm(): React.JSX.Element {
  const [userMonsters, setUserMonsters] = useState<IMonster[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0)
  const [form, setForm] = useState<IMonster>(DefaultMonster)
  const [loaded, setLoaded] = useState(false)
  const [readOnly, setReadOnly] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  // Initial load from localStorage
  useEffect(() => {
    setUserMonsters(getLocalStorageMonsters())
    setLoaded(true)
  }, [])

  // Save user monsters to localStorage whenever they change
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(MONSTERS_KEY, JSON.stringify(userMonsters))
    }
  }, [userMonsters, loaded])

  // Update form when selectedIndex changes
  useEffect(() => {
    if (selectedIndex !== null) {
      if (selectedIndex < mockMonstersApiReturn.length) {
        setForm(mockMonstersApiReturn[selectedIndex])
        setReadOnly(true)
        setEditingIndex(null)
      } else {
        const userIdx = selectedIndex - mockMonstersApiReturn.length
        setForm(userMonsters[userIdx])
        setReadOnly(true)
        setEditingIndex(null)
      }
    } else {
      setForm(DefaultMonster)
      setReadOnly(false)
      setEditingIndex(null)
    }
  }, [selectedIndex, userMonsters])

  // Update form when editingIndex changes
  useEffect(() => {
    if (editingIndex !== null) {
      setForm(userMonsters[editingIndex])
      setReadOnly(false)
    }
  }, [editingIndex, userMonsters])

  const handleFormChange = (field: keyof IMonster, value: string | number) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleAddNew = () => {
    setSelectedIndex(null)
    setForm(DefaultMonster)
    setReadOnly(false)
    setEditingIndex(null)
  }

  const allMonsters = [...mockMonstersApiReturn, ...userMonsters]

  return (
    <Box className="monsters-form-page">
      <Box sx={{ flex: 1, padding: '2rem' }}>
        <MonsterGrid
          allMonsters={allMonsters}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          readOnly={readOnly}
          setEditingIndex={setEditingIndex}
          handleAddNew={handleAddNew}
        />
      </Box>

      <MonsterForm
        form={form}
        handleFormChange={handleFormChange}
        editingIndex={editingIndex}
        readOnly={readOnly}
        userMonsters={userMonsters}
        setUserMonsters={setUserMonsters}
        setEditingIndex={setEditingIndex}
        setReadOnly={setReadOnly}
        setSelectedIndex={setSelectedIndex}
      />
    </Box>
  )
}
