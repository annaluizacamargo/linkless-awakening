import { IMonster } from './monster.types'

export interface IBattleRound {
  attacker: IMonster
  defender: IMonster
  damage: number
  defenderHpAfter: number
}

export interface IBattleResult {
  winner: IMonster
  loser: IMonster
  rounds: IBattleRound[]
}
