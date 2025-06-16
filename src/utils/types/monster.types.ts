/**
 * This file defines the IMonster interface, which represents the structure of a monster object.
 */
export interface IMonster {
  name: string
  attack: number
  defense: number
  speed: number
  hp: number
  image_url: string
}

/**
 * This file defines the IRatingFields interface, which represents the structure of rating fields for monster attributes.
 */
export interface IRatingFields {
  id: keyof IMonster
  label: string
  icon: React.JSX.Element
  emptyIcon: React.JSX.Element
  color: string
  colorHover: string
  article: 'o' | 'a'
}
