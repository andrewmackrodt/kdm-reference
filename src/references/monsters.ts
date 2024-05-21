import { Packages, Package, packages } from './packages'

export {
    Monsters,
    monsters,
}

interface Monster {
    readonly name: string
    readonly package: Package
}

enum Monsters {
    Butcher = 'butcher',
    DragonKing = 'dragon-king',
    DungBeetleKnight = 'dung-beetle-knight',
    FlowerKnight = 'flower-knight',
    GoldSmokeKnight = 'gold-smoke-knight',
    Gorm = 'gorm',
    KingsMan = 'kings-man',
    LionGod = 'lion-god',
    LionKnight = 'lion-knight',
    LonelyTree = 'lonely-tree',
    Manhunter = 'manhunter',
    Phoenix = 'phoenix',
    ScreamingAntelope = 'screaming-antelope',
    Slenderman = 'slenderman',
    Spidicules = 'spidicules',
    Sunstalker = 'sunstalker',
    TheHand = 'the-hand',
    Tyrant = 'tyrant',
    Watcher = 'watcher',
    WhiteLion = 'white-lion',
}

const monsters: { [key: string]: Monster } = {
    [Monsters.Butcher]: {
        name: 'Butcher',
        package: packages[Packages.Core_1_0],
    },
    [Monsters.DragonKing]: {
        name: 'Dragon King',
        package: packages[Packages.DragonKing],
    },
    [Monsters.DungBeetleKnight]: {
        name: 'The Dung Beetle Knight',
        package: packages[Packages.DungBeetleKnight],
    },
    [Monsters.FlowerKnight]: {
        name: 'The Flower Knight',
        package: packages[Packages.FlowerKnight],
    },
    [Monsters.GoldSmokeKnight]: {
        name: 'The Gold Smoke Knight',
        package: packages[Packages.Core_1_5],
    },
    [Monsters.Gorm]: {
        name: 'Gorm',
        package: packages[Packages.Gorm],
    },
    [Monsters.KingsMan]: {
        name: "King's Man",
        package: packages[Packages.Core_1_0],
    },
    [Monsters.LionGod]: {
        name: 'The Lion God',
        package: packages[Packages.LionGod],
    },
    [Monsters.LionKnight]: {
        name: 'The Lion Knight',
        package: packages[Packages.LionKnight],
    },
    [Monsters.LonelyTree]: {
        name: 'The Lonely Tree',
        package: packages[Packages.LonelyTree],
    },
    [Monsters.Manhunter]: {
        name: 'Manhunter',
        package: packages[Packages.Manhunter],
    },
    [Monsters.Phoenix]: {
        name: 'Phoenix',
        package: packages[Packages.Core_1_0],
    },
    [Monsters.ScreamingAntelope]: {
        name: 'Screaming Antelope',
        package: packages[Packages.Core_1_0],
    },
    [Monsters.Slenderman]: {
        name: 'Slenderman',
        package: packages[Packages.Slenderman],
    },
    [Monsters.Spidicules]: {
        name: 'Spidicules',
        package: packages[Packages.Spidicules],
    },
    [Monsters.Sunstalker]: {
        name: 'Sunstalker',
        package: packages[Packages.Sunstalker],
    },
    [Monsters.TheHand]: {
        name: 'The Hand',
        package: packages[Packages.Core_1_0],
    },
    [Monsters.Tyrant]: {
        name: 'The Tyrant',
        package: packages[Packages.DragonKing],
    },
    [Monsters.Watcher]: {
        name: 'Watcher',
        package: packages[Packages.Core_1_0],
    },
    [Monsters.WhiteLion]: {
        name: 'White Lion',
        package: packages[Packages.Core_1_0],
    },
}
