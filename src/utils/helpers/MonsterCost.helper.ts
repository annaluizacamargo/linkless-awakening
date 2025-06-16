import { MONSTERS_KEY } from '@utils/constants/Monsters'
import { RatingFields } from '@utils/constants/RatingFields'
import { StatWeight } from '@utils/constants/StatWeight'
import { IMonster } from '@utils/types/monster.types'

/**
 * Retrieves the list of monsters from localStorage.
 * If the data is not in the correct format, it returns an empty array.
 * @returns {IMonster[]} - An array of monsters retrieved from localStorage.
 * @throws {Error} - Throws an error if the data cannot be parsed.
 */
export function getLocalStorageMonsters(): IMonster[] {
  const stored = localStorage.getItem(MONSTERS_KEY)

  try {
    const parsed = stored ? JSON.parse(stored) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

/**
 * Calculates the cost of a monster based on its attributes.
 * @param {IMonster} monster - The monster object containing its attributes.
 * @returns {number} - The calculated cost of the monster.
 */
export function getMonsterCost(monster: IMonster): number {
  return (
    monster.attack * StatWeight.attack +
    monster.defense * StatWeight.defense +
    monster.speed * StatWeight.speed +
    monster.hp * StatWeight.hp
  )
}

/**
 * Checks if the monster's cost is valid based on the maximum allowed cost.
 * @param {IMonster} monster - The monster object to check.
 * @returns {boolean} - Returns true if the monster's cost is valid, false otherwise.
 */
export function isMonsterCostValid(monster: IMonster): boolean {
  const cost = getMonsterCost(monster)
  return cost <= StatWeight.max
}

/**
 * Compares the monster's cost against a specified value.
 * @param cost - The cost to compare against.
 * @returns {boolean} - Returns true if the monster's cost is less than or equal to the specified cost.
 */
export function isMonsterCostValidAgainstCostValue(cost: number): boolean {
  return cost <= StatWeight.max
}

/**
 * Generates a text explaining the total cost calculation for monster attributes.
 * @param {number} maxCost - The maximum allowed cost for the monster attributes.
 * @returns {string} - A string explaining the cost calculation formula.
 */
export function getTotalCostText(maxCost: number): string {
  return `Cada atributo tem um peso diferente na fórmula visando balancear o jogo, e o custo total é calculado com base nesses pesos. A fórmula do custo total é: ${RatingFields.map(
    (field) => `(${field.label} x ${StatWeight[field.id as keyof typeof StatWeight]}) `
  ).join(' + ')}. O máximo permitido é ${maxCost}.`
}

/**
 * Generates a text explaining how increasing a specific monster attribute affects the total cost.
 * @param {Object} field - The field object containing the attribute details.
 * @param {keyof IMonster} field.id - The ID of the monster attribute.
 * @param {string} field.label - The label of the monster attribute.
 * @param {'o' | 'a'} field.article - The article to use in the text (either 'o' or 'a').
 * @param {number} maxCost - The maximum allowed cost for the monster attributes.
 * @returns {string} - A string explaining how increasing the attribute affects the total cost.
 */
export function getMonsterCostInfoText(
  field: { id: keyof IMonster; label: string; article: 'o' | 'a' },
  maxCost: number
): string {
  return `Aumentar ${
    field.article
  } ${field.label.toLowerCase()} aumenta o custo total permitido para o seu criatura (peso ${
    StatWeight[field.id as keyof typeof StatWeight]
  }x). O custo máximo de atributos totais permitido é ${maxCost}.`
}
