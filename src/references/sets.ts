import { type Expansion, Expansions, expansions } from './expansions'

export interface Set {
    readonly name: string
    readonly expansions: Expansion[]
}

export enum Sets {
    ExpansionsOfDeath = 'expansions-of-death',
}

export const sets: { [key: string]: Set } = {
    [Sets.ExpansionsOfDeath]: {
        name: 'Expansions of Death',
        expansions: [
            expansions[Expansions.DragonKing],
            expansions[Expansions.DungBeetleKnight],
            expansions[Expansions.FlowerKnight],
            expansions[Expansions.Gorm],
            expansions[Expansions.LionGod],
            expansions[Expansions.LionKnight],
            expansions[Expansions.LonelyTree],
            expansions[Expansions.Manhunter],
            expansions[Expansions.Slenderman],
            expansions[Expansions.Spidicules],
            expansions[Expansions.Sunstalker],
        ],
    },
}
