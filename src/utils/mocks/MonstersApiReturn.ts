import { IMonster } from '@utils/types/monster.types'
import octorokImg from '@assets/monsters/octorok.png'
import spinyImg from '@assets/monsters/spiny.png'
import blooperImg from '@assets/monsters/blooper.png'
import evilEagleImg from '@assets/monsters/evil_eagle.png'
import polsVoiceImg from '@assets/monsters/pols_voice.png'
import seaUrchinImg from '@assets/monsters/sea_urchin.png'

/**
 * This file provides a mock return value for the Monsters API, simulating a list of monsters.
 */
export const mockMonstersApiReturn: IMonster[] = [
  {
    name: 'Octorok',
    attack: 44,
    defense: 32,
    speed: 34,
    hp: 130,
    image_url: octorokImg,
  },
  {
    name: 'Spiny',
    attack: 30,
    defense: 54,
    speed: 20,
    hp: 150,
    image_url: spinyImg,
  },
  {
    name: 'Blooper',
    attack: 54,
    defense: 28,
    speed: 28,
    hp: 140,
    image_url: blooperImg,
  },
  {
    name: 'Evil Eagle',
    attack: 44,
    defense: 24,
    speed: 48,
    hp: 110,
    image_url: evilEagleImg,
  },
  {
    name: 'Pols Voice',
    attack: 38,
    defense: 26,
    speed: 56,
    hp: 92,
    image_url: polsVoiceImg,
  },
  {
    name: 'Sea Urchin',
    attack: 48,
    defense: 40,
    speed: 88,
    hp: 100,
    image_url: seaUrchinImg,
  },
]
