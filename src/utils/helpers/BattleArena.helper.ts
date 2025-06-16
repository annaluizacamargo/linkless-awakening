import { IBattleResult, IBattleRound } from '@utils/types/arena.types'
import { IMonster } from '@utils/types/monster.types'
import { getLocalStorageMonsters } from './MonsterCost.helper'
import { mockMonstersApiReturn } from '@utils/mocks/MonstersApiReturn'

/**
 * Retrieves all monsters, combining mock data with user-defined monsters from localStorage.
 * @returns An array of all monsters.
 */
export function getAllMonsters(): IMonster[] {
  const userMonsters = getLocalStorageMonsters()
  return [...mockMonstersApiReturn, ...userMonsters]
}

/**
 * Calculates the result of a battle between two monsters.
 * The monster with higher speed attacks first, and if speeds are equal,
 * the one with higher attack goes first. If both speed and attack are equal,
 * the attacker is chosen randomly.
 * The battle continues until one monster's HP drops to 0 or below.
 * Damage is calculated as the attacker's attack minus the defender's defense,
 * with a minimum of 1 damage dealt if the calculated damage is less than or equal to the defender's defense.
 */
export function calculateBattle(monsterA: IMonster, monsterB: IMonster): IBattleResult {
  const a = { ...monsterA }
  const b = { ...monsterB }
  const rounds: IBattleRound[] = []

  let first = a
  let second = b

  if (b.speed > a.speed) {
    // The monster with higher speed attacks first
    first = b
    second = a
  } else if (a.speed === b.speed) {
    if (b.attack > a.attack) {
      // If speed is equal, the one with higher attack goes first
      first = b
      second = a
    }
  } else {
    const random = Math.random() // In case of equal speed and attack, randomly choose who attacks first

    if (random < 0.5) {
      first = a
      second = b
    } else {
      first = b
      second = a
    }
  }

  let attacker = first
  let defender = second
  let attackerHp = attacker.hp
  let defenderHp = defender.hp

  while (attackerHp > 0 && defenderHp > 0) {
    let damage = attacker.attack - defender.defense // Calculate damage based on attacker's attack and defender's defense

    if (damage <= defender.defense) {
      // If the damage is less than or equal to the defender's defense, it deals 1 damage
      damage = 1
    }

    defenderHp -= damage

    rounds.push({
      attacker: { ...attacker },
      defender: { ...defender },
      damage,
      defenderHpAfter: defenderHp > 0 ? defenderHp : 0,
    })

    if (defenderHp <= 0) {
      // If the defender's HP drops to 0 or below, the battle ends
      break
    }

    ;[attacker, defender] = [defender, attacker]
    ;[attackerHp, defenderHp] = [defenderHp, attackerHp]
  }

  const winner = defenderHp <= 0 ? attacker : defender
  const loser = defenderHp <= 0 ? defender : attacker

  return { winner, loser, rounds }
}

/**
 * Generates an array of objects representing the evolution of HP for each round in a battle.
 */
export function getHpEvolution(battle: IBattleResult) {
  const data: { round: number; [key: string]: number }[] = []
  const nameA = battle.rounds[0].attacker.name
  const nameB = battle.rounds[0].defender.name

  let hpA = battle.rounds[0].attacker.hp
  let hpB = battle.rounds[0].defender.hp

  data.push({
    round: 0,
    [nameA]: hpA,
    [nameB]: hpB,
  })

  battle.rounds.forEach((round, i) => {
    if (round.attacker.name === nameA) {
      hpB = round.defenderHpAfter
    } else {
      hpA = round.defenderHpAfter
    }

    data.push({
      round: i + 1,
      [nameA]: hpA,
      [nameB]: hpB,
    })
  })

  return data
}
