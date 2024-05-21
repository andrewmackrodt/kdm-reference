import type { ResponsiveImage } from 'responsive-loader'

export interface Expansion {
    readonly name: string
    readonly crest?: ResponsiveImage
    readonly color?: string
    readonly expansions: Expansion[]
}

export enum Expansions {
    DragonKing = 'dragon-king',
    DungBeetleKnight = 'dung-beetle-knight',
    FlowerKnight = 'flower-knight',
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
        crest: require('images/crests/tyrant.webp'),
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
    [Expansions.Gorm]: {
        name: 'Gorm',
        crest: require('images/crests/gorm.webp'),
        color: '#603820',
        expansions: [],
    },
    [Expansions.LionGod]: {
        name: 'The Lion God',
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
        expansions: [],
    },
    [Expansions.Spidicules]: {
        name: 'Spidicules',
        expansions: [],
    },
    [Expansions.Sunstalker]: {
        name: 'Sunstalker',
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
