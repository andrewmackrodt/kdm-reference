import { Cores, cores } from './cores'
import { Expansions, expansions } from './expansions'

export interface Package {
    readonly name: string
}

export enum Packages {
    Core_1_0 = Cores.Core_1_0,
    Core_1_5 = Cores.Core_1_5,
    DragonKing = Expansions.DragonKing,
    DungBeetleKnight = Expansions.DungBeetleKnight,
    FlowerKnight = Expansions.FlowerKnight,
    Gorm = Expansions.Gorm,
    GreenKnightArmor = Expansions.GreenKnightArmor,
    LionGod = Expansions.LionGod,
    LionKnight = Expansions.LionKnight,
    LonelyTree = Expansions.LonelyTree,
    Manhunter = Expansions.Manhunter,
    Slenderman = Expansions.Slenderman,
    Spidicules = Expansions.Spidicules,
    Sunstalker = Expansions.Sunstalker,
}

export const packages: { [key: string]: Package } = Object.assign({}, cores, expansions)
