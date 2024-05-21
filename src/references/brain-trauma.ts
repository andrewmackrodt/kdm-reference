import { trim } from 'utils/strings'

export interface BrainTrauma {
    readonly roll: string
    readonly name: string
    readonly caption?: string
    readonly description: string
}

export enum BrainTraumas {
    MortalTerror = 'mortal-terror',
    MemoryLoss = 'memory-loss',
    Flee = 'flee',
    DangerSeizure = 'danger-seizure',
    Lunacy = 'lunacy',
    NewPerspective = 'new-perspective',
    Frenzy = 'frenzy',
    ManiacalLaughter = 'maniacal-laughter',
    Clarity = 'clarity',
    Impossible = 'impossible',
}

export const brainTraumas: { [key: string]: BrainTrauma } = {
    [BrainTraumas.MortalTerror]: {
        roll: '1-2',
        name: 'Mortal Terror',
        description: trim(`
            No ifs, ands, or buts, the survivor is dead.
        `),
    },
    [BrainTraumas.MemoryLoss]: {
        roll: '3',
        name: 'Memory Loss',
        description: trim(`
            Lose 2 levels of weapon proficiency.
        `),
    },
    [BrainTraumas.Flee]: {
        roll: '4',
        name: 'Flee',
        description: trim(`
            You are knocked down and suffer knockback equal to your movement
            towards the closest board edge. Gain 1d5 insanity.
        `),
    },
    [BrainTraumas.DangerSeizure]: {
        roll: '5-6',
        name: 'Danger Seizure',
        description: trim(`
            You thrash about wildly, dealing 1 damage to yourself and every
            adjacent survivor. Gain a random disorder and 1d5 insanity.
        `),
    },
    [BrainTraumas.Lunacy]: {
        roll: '7-8',
        name: 'Lunacy',
        description: trim(`
            Gain a random disorder and 1d5 insanity.
        `),
    },
    [BrainTraumas.NewPerspective]: {
        roll: '9',
        name: 'New Perspective',
        description: trim(`
            You are knocked down and gain 1d10 insanity.
        `),
    },
    [BrainTraumas.Frenzy]: {
        roll: '10',
        name: 'Frenzy',
        description: trim(`
            Gain 1d5 insanity, +1 speed token and +1 strength token. Ignore
            [slow] on melee weapons. You may not spend survival. You may not use
            fighting arts. You may not use weapon specialization or weapon
            mastery. Can be gained multiple times. Lasts until end of showdown.
        `),
    },
    [BrainTraumas.ManiacalLaughter]: {
        roll: '11',
        name: 'Maniacal Laughter',
        description: trim(`
            You are knocked down. Gain -1 speed token, the priority target
            token, and 1d5 insanity.
        `),
    },
    [BrainTraumas.Clarity]: {
        roll: '12',
        name: 'Clarity',
        description: trim(`
            You are knocked down. Add your current survival to insanity and
            reduce your survival to 0. Gain a random disorder. If you already
            have 3 disorders, you die.
        `),
    },
    [BrainTraumas.Impossible]: {
        roll: '13',
        name: 'Impossible!',
        description: trim(`
            How could this happen! Gain +1d10 survival, +1d10 insanity and +2
            luck tokens!
        `),
    },
}
