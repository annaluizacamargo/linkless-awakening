import { IMonster } from 'https://linkless-awakening-game.vercel.app/src/utils/types/monster.types'

/**
 * This file provides a mock return value for the Monsters API, simulating a list of monsters.
 */
export const mockMonstersApiReturn: IMonster[] = [
  {
    name: 'Octorok',
    attack: 22,
    defense: 18,
    speed: 17,
    hp: 61,
    image_url: 'https://linkless-awakening-game.vercel.app/assets/monsters/octorok.png',
  },
  {
    name: 'Spiny',
    attack: 15,
    defense: 27,
    speed: 10,
    hp: 75,
    image_url: 'https://linkless-awakening-game.vercel.app/assets/monsters/spiny.png',
  },
  {
    name: 'Blooper',
    attack: 27,
    defense: 14,
    speed: 14,
    hp: 70,
    image_url: 'https://linkless-awakening-game.vercel.app/assets/monsters/blooper.png',
  },
  {
    name: 'Evil Eagle',
    attack: 22,
    defense: 12,
    speed: 24,
    hp: 55,
    image_url: 'https://linkless-awakening-game.vercel.app/assets/monsters/evil_eagle.png',
  },
  {
    name: 'Pols Voice',
    attack: 19,
    defense: 13,
    speed: 28,
    hp: 46,
    image_url: 'https://linkless-awakening-game.vercel.app/assets/monsters/pols_voice.png',
  },
  {
    name: 'Sea Urchin',
    attack: 12,
    defense: 20,
    speed: 22,
    hp: 62,
    image_url: 'https://linkless-awakening-game.vercel.app/assets/monsters/sea_urchin.png',
  },
]
