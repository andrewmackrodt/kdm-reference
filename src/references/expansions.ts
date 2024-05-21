export interface Expansion {
    readonly name: string
    readonly crest?: string
    readonly color?: string
    readonly expansions: Expansion[]
}

export enum Expansions {
    DragonKing = 'dragon-king',
    DungBeetleKnight = 'dung-beetle-knight',
    FlowerKnight = 'flower-knight',
    GamblersChest = 'gamblers-chest',
    Gorm = 'gorm',
    GreenKnightArmor = 'green-knight-armor',
    LionGod = 'lion-god',
    LionKnight = 'lion-knight',
    LonelyTree = 'lonely-tree',
    Manhunter = 'manhunter',
    Slenderman = 'slenderman',
    Spidicules = 'spidicules',
    Sunstalker = 'sunstalker',
}

export const expansions: { [key: string]: Expansion } = {
    [Expansions.DragonKing]: {
        name: 'Dragon King',
        crest: require('images/crests/dragon-king.webp'),
        color: '#aa572b',
        expansions: [],
    },
    [Expansions.DungBeetleKnight]: {
        name: 'The Dung Beetle Knight',
        crest: require('images/crests/dung-beetle-knight.webp'),
        color: '#8c9664',
        expansions: [],
    },
    [Expansions.FlowerKnight]: {
        name: 'The Flower Knight',
        crest: require('images/crests/flower-knight.webp'),
        color: '#405830',
        expansions: [],
    },
    [Expansions.GamblersChest]: {
        name: "Gambler's Chest",
        crest: require('images/crests/gamblers-chest-crest-box-sq.webp'),
        expansions: [],
    },
    [Expansions.Gorm]: {
        name: 'Gorm',
        crest: require('images/crests/gorm.webp'),
        color: '#603820',
        expansions: [],
    },
    [Expansions.LionGod]: {
        name: 'The Lion God',
        crest: require('images/crests/lion-god.webp'),
        color: '#784024',
        expansions: [],
    },
    [Expansions.LionKnight]: {
        name: 'The Lion Knight',
        expansions: [],
    },
    [Expansions.LonelyTree]: {
        name: 'The Lonely Tree',
        expansions: [],
    },
    [Expansions.Manhunter]: {
        name: 'Manhunter',
        expansions: [],
    },
    [Expansions.Slenderman]: {
        name: 'Slenderman',
        crest: require('images/crests/slenderman.webp'),
        color: '#706070',
        expansions: [],
    },
    [Expansions.Spidicules]: {
        name: 'Spidicules',
        crest: require('images/crests/spidicules.webp'),
        color: '#808038',
        expansions: [],
    },
    [Expansions.Sunstalker]: {
        name: 'Sunstalker',
        crest: require('images/crests/sunstalker.webp'),
        color: '#e2dc90',
        expansions: [],
    },
}

expansions[Expansions.GreenKnightArmor] = {
    name: 'Green Knight Armor',
    expansions: [
        expansions[Expansions.DungBeetleKnight],
        expansions[Expansions.FlowerKnight],
        expansions[Expansions.Gorm],
        expansions[Expansions.LionKnight],
        expansions[Expansions.Manhunter],
    ],
}
