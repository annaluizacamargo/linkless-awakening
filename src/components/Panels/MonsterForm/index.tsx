import { Box, Button, InputLabel, Rating, styled, TextField, Tooltip, Typography } from '@mui/material'
import { RatingFields } from '@utils/constants/RatingFields'
import { StatWeight } from '@utils/constants/StatWeight'
import { stringToMd5 } from '@utils/helpers/String.helper'
import { IMonster } from '@utils/types/monster.types'
import './styles.css'
import {
  getMonsterCost,
  getMonsterCostInfoText,
  getTotalCostText,
  isMonsterCostValid,
  isMonsterCostValidAgainstCostValue,
} from '@utils/helpers/MonsterCost.helper'
import { mockMonstersApiReturn } from '@utils/mocks/MonstersApiReturn'

/**
 * MonsterForm component allows users to add, edit, or view monsters.
 * @param {Object} props - The component props.
 * @param {IMonster} props.form - The monster form data.
 * @param {Function} props.handleFormChange - Function to handle form field changes.
 * @param {Function} props.handleSubmit - Function to handle form submission.
 * @param {number | null} props.editingIndex - The index of the monster being edited, or null if adding a new one.
 * @param {boolean} props.readOnly - Flag indicating if the form is in read-only mode.
 * @returns {JSX.Element} The rendered MonsterForm component.
 */
export default function MonsterForm({
  form,
  handleFormChange,
  editingIndex,
  readOnly,
  userMonsters,
  setUserMonsters,
  setSelectedIndex,
  setEditingIndex,
  setReadOnly,
}: {
  form: IMonster
  handleFormChange: (field: keyof IMonster, value: string | number) => void
  editingIndex: number | null
  readOnly: boolean
  userMonsters: IMonster[]
  setUserMonsters: (monsters: IMonster[]) => void
  setSelectedIndex: (index: number | null) => void
  setEditingIndex: (index: number | null) => void
  setReadOnly: (readOnly: boolean) => void
}): React.JSX.Element {
  const cost = getMonsterCost(form)
  const costExceeded = !isMonsterCostValidAgainstCostValue(cost)
  const maxCost = StatWeight.max

  const sectionTitle = readOnly
    ? '👀 Visualizar Criatura'
    : editingIndex !== null
    ? '⚙️ Editar Criatura'
    : '🐦‍🔥 Adicionar Criatura'

  const getPlaceholder = (name: string) =>
    `https://placehold.co/120x120?text=${encodeURIComponent(name && name.trim() !== '' ? name : 'Imagem da Criatura')}`

  const imageSrc = form.image_url && form.image_url.trim() !== '' ? form.image_url : getPlaceholder(form.name)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim()) {
      alert('O nome da criatura é obrigatório.')
      throw new Error('O nome da criatura é obrigatório.')
    }

    if (!isMonsterCostValid(form)) {
      alert('O custo total da criatura excede o máximo permitido.')
      throw new Error('O custo total da criatura excede o máximo permitido.')
    }

    if (editingIndex === null) {
      setUserMonsters([...userMonsters, form])
      setSelectedIndex(null)
      setEditingIndex(null)
      setReadOnly(false)
    } else {
      const updated = userMonsters.slice()
      updated[editingIndex] = form
      setUserMonsters(updated)
      setSelectedIndex(mockMonstersApiReturn.length + editingIndex)
      setEditingIndex(null)
      setReadOnly(true)
    }
  }

  return (
    <Box className="monster-form">
      <Typography variant="h5" className="bold-text">
        {sectionTitle}
      </Typography>

      <Tooltip title={getTotalCostText(maxCost)}>
        <Typography
          sx={{
            color: costExceeded ? '#D50000' : '#bfa046',
            fontWeight: 700,
            mb: 2,
            textAlign: 'center',
            cursor: 'help',
          }}
          variant="body2"
        >
          Custo total: {cost.toFixed(0)} / {maxCost}
        </Typography>
      </Tooltip>

      <form onSubmit={handleSubmit} autoComplete="off" className="monster-form-fields">
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3, alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', width: '100%' }}>
            <TextField
              required
              label="Nome"
              value={form.name}
              onChange={(e) => handleFormChange('name', e.target.value)}
              fullWidth
              disabled={readOnly}
              slotProps={{ htmlInput: { maxLength: 32 } }}
            />

            <TextField
              label="URL da Imagem"
              value={form.image_url}
              onChange={(e) => handleFormChange('image_url', e.target.value)}
              fullWidth
              disabled={readOnly}
            />
          </Box>

          <img
            src={imageSrc}
            alt={`Imagem da criatura ${form.name ?? ''}`}
            style={{ maxWidth: 120, maxHeight: 120, borderRadius: 8 }}
            onError={(e) => {
              const target = e.currentTarget
              target.onerror = null
              target.src = getPlaceholder(form.name)
            }}
          />
        </Box>

        {RatingFields.map((field, index) => {
          const StyledRating = styled(Rating)({
            '& .MuiRating-iconFilled': { color: field.color },
            '& .MuiRating-iconHover': { color: field.colorHover },
            '& .MuiRating-iconEmpty': { color: 'gray' },
          })

          const tooltipTitle = getMonsterCostInfoText(field, maxCost)

          return (
            <Box key={stringToMd5(field.id + index)} className="monster-form-field">
              <Box className="monster-form-field-label">
                <Tooltip title={tooltipTitle}>
                  <InputLabel sx={{ minWidth: 110, cursor: 'help' }}>{field.label}:</InputLabel>
                </Tooltip>

                <TextField
                  type="number"
                  value={form[field.id]}
                  onChange={(e) => {
                    handleFormChange(field.id, Number(e.target.value) || 0)
                  }}
                  slotProps={{ htmlInput: { max: 100, min: 0, maxLength: 32 } }}
                  size="small"
                  disabled={readOnly}
                  color="primary"
                />
              </Box>

              <StyledRating
                value={Number(form[field.id]) / 10}
                max={10}
                precision={0.5}
                icon={field.icon}
                emptyIcon={field.emptyIcon}
                onChange={(_, newValue) => {
                  if (!readOnly && typeof newValue === 'number') {
                    handleFormChange(field.id, Math.round(newValue * 10))
                  }
                }}
                readOnly={readOnly}
                sx={{ width: '100%', justifyContent: 'space-between' }}
              />
            </Box>
          )
        })}

        {!readOnly && (
          <Tooltip
            title={
              costExceeded
                ? `O custo total não pode ultrapassar ${maxCost}. Ajuste os atributos.`
                : 'Clique para salvar a criatura.'
            }
          >
            <span>
              <Button
                type="submit"
                variant="contained"
                color="success"
                fullWidth
                sx={{ fontWeight: 700, mt: 1, borderRadius: 2 }}
                disabled={costExceeded}
                className="monster-form-submit-button"
              >
                {editingIndex !== null ? 'Salvar' : 'Adicionar'}
              </Button>
            </span>
          </Tooltip>
        )}
      </form>
    </Box>
  )
}
