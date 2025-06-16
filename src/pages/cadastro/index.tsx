import { Box } from '@mui/material'
import { DefaultMonster, MONSTERS_KEY } from '@utils/constants/Monsters'
import { mockMonstersApiReturn } from '@utils/mocks/MonstersApiReturn'
import { IMonster } from '@utils/types/monster.types'
import { getLocalStorageMonsters } from '@utils/helpers/MonsterCost.helper'
import React, { useEffect, useState } from 'react'
import MonsterGrid from '@components/Grid/AddMonsterPage'
import MonsterForm from '@components/Panels/MonsterForm'
import './styles.css'

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

  // Update form state based on selected index and editing state
  useEffect(() => {
    const isEditing = editingIndex !== null

    if (selectedIndex !== null) {
      const isMock = selectedIndex < mockMonstersApiReturn.length
      const userIdx = selectedIndex - mockMonstersApiReturn.length

      if (isEditing) {
        setForm(userMonsters[userIdx])
        return setReadOnly(false)
      } else if (isMock) {
        setForm(mockMonstersApiReturn[selectedIndex])
        return setReadOnly(true)
      } else {
        setForm(userMonsters[userIdx])
        return setReadOnly(true)
      }
    } else {
      setForm(DefaultMonster)
      setReadOnly(false)
      setEditingIndex(null)
    }
  }, [selectedIndex, userMonsters, editingIndex])

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

  const resetForm = () => {
    setForm(DefaultMonster)
  }

  const allMonsters = [...mockMonstersApiReturn, ...userMonsters]

  return (
    <Box className="monsters-form-page">
      <Box className="grid-monsters-form-page" sx={{ flex: 1 }}>
        <MonsterGrid
          allMonsters={allMonsters}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          readOnly={readOnly}
          setEditingIndex={setEditingIndex}
          handleAddNew={handleAddNew}
        />
      </Box>

      <ErrorBoundary>
        {form && (
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
            resetForm={resetForm}
          />
        )}
      </ErrorBoundary>
    </Box>
  )
}

interface ErrorBoundaryProps {
  children: React.ReactNode
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state = { hasError: false }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) {
      return (
        <Box className="monster-form">
          <h2>Ocorreu um erro ao exibir o formulário do monstro.</h2>
          <p>
            Por favor, tente novamente mais tarde ou tente limpar o cache do seu navegador. Se o problema persistir,
            entre em contato{' '}
            <a className="bold-text" href="https://www.linkedin.com/in/anna-luiza-camargo-fistarol/" target="_blank">
              comigo
            </a>{' '}
            :)
          </p>
        </Box>
      )
    }
    return this.props.children
  }
}
