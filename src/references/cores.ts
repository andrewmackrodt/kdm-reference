export interface Core {
    readonly name: string
}

export enum Cores {
    Core_1_0 = 'core-1_0',
    Core_1_5 = 'core-1_5',
}

export const cores: { [key: string]: Core } = {
    [Cores.Core_1_0]: {
        name: 'Kingdom Death: Monster 1.0',
    },
    [Cores.Core_1_5]: {
        name: 'Kingdom Death: Monster 1.5',
    },
}
