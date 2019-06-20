export {
    Expansions,
    expansions,
}

interface Expansion {
    readonly name: string
}

enum Expansions {
    DungBeetleKnight = 'dung-beetle-knight',
    FlowerKnight = 'flower-knight',
    Gorm = 'gorm',
    LionGod = 'lion-god',
    LionKnight = 'lion-knight',
    Slenderman = 'slenderman',
    Spidicules = 'spidicules',
    Sunstalker = 'sunstalker',
    Tyrant = 'tyrant',
}

const expansions: { [key: string]: Expansion } = {
    [Expansions.DungBeetleKnight]: {name: 'Dung Beetle Knight'},
    [Expansions.FlowerKnight]: {name: 'Flower Knight'},
    [Expansions.Gorm]: {name: 'Gorm'},
    [Expansions.LionGod]: {name: 'Lion God'},
    [Expansions.LionKnight]: {name: 'Lion Knight'},
    [Expansions.Slenderman]: {name: 'Slenderman'},
    [Expansions.Spidicules]: {name: 'Spidicules'},
    [Expansions.Sunstalker]: {name: 'Sunstalker'},
    [Expansions.Tyrant]: {name: 'Tyrant'},
}
