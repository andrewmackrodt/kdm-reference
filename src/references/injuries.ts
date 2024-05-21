import HitLocations from 'enums/hit-locations'
import { trim } from 'utils/strings'

export interface Injury {
    readonly location: string
    readonly roll: string
    readonly name: string
    readonly caption?: string
    readonly description: string
}

export enum Injuries {
    // head
    HeadExplosion = 'head-explosion',
    Decapitation = 'decapitation',
    IntracranialHemorrhage = 'intracranial-hemorrhage',
    Deaf = 'deaf',
    Blind = 'blind',
    Concussion = 'concussion',
    ShatteredJaw = 'shattered-jaw',
    DestroyedTooth = 'destroyed-tooth',

    // arms
    DieOfShock = 'die-of-shock',
    BleedingArms = 'bleeding-arms',
    DismemberedArm = 'dismembered-arm',
    RupturedMuscle = 'ruptured-muscle',
    Contracture = 'contracture',
    BrokenArm = 'broken-arm',
    SpiralFracture = 'spiral-fracture',
    DislocatedShoulder = 'dislocated-shoulder',
    HitTheDirt = 'hit-the-dirt',

    // body
    InstantDeath = 'instant-death',
    BleedingBody = 'bleeding-body',
    GapingChestWound = 'gaping-chest-wound',
    DestroyedBack = 'destroyed-back',
    Disemboweled = 'disemboweled',
    RupturedSpleen = 'ruptured-spleen',
    BrokenRib = 'broken-rib',
    CollapsedLung = 'collapsed-lung',
    BowledOver = 'bowled-over',

    // waist
    FinalBreath = 'final-breath',
    BleedingKidneys = 'bleeding-kidneys',
    IntestinalProlapse = 'intestinal-prolapse',
    WarpedPelvis = 'warped-pelvis',
    DestroyedGenitals = 'destroyed-genitals',
    BrokenHip = 'broken-hip',
    SlashedBack = 'slashed-back',
    BruisedTailbone = 'bruised-tailbone',
    BellyUp = 'belly-up',

    // legs
    BloodGeyser = 'blood-geyser',
    BleedingLegs = 'bleeding-legs',
    DismemberedLeg = 'dismembered-leg',
    Hamstrung = 'hamstrung',
    TornAchillesTendon = 'torn-achilles-tendon',
    TornMuscle = 'torn-muscle',
    BrokenLeg = 'broken-leg',
    BloodyThighs = 'bloody-thighs',
    LostBalance = 'lost-balance',
}

export const injuries: { [key: string]: Injury } = {
    /***************************************************************************
     * Head
     **************************************************************************/
    [Injuries.HeadExplosion]: {
        location: HitLocations.Head,
        roll: '1-2',
        name: 'Head Explosion!',
        description: trim(`
            Your head erupts in a shower of gore, killing you instantly. All
            other survivors are so disturbed that they lose 1 survival.
        `),
    },
    [Injuries.Decapitation]: {
        location: HitLocations.Head,
        roll: '3-4',
        name: 'Decapitation',
        description: trim(`
            You are dead.
        `),
    },
    [Injuries.IntracranialHemorrhage]: {
        location: HitLocations.Head,
        roll: '5',
        name: 'Intracranial Hemorrhage',
        description: trim(`
            You can no longer use or gain any survival. This injury is
            permanent, and can be recorded once. Gain 1 bleeding token.
        `),
    },
    [Injuries.Deaf]: {
        location: HitLocations.Head,
        roll: '6',
        name: 'Deaf',
        caption: "You won't hear it coming.",
        description: trim(`
            Suffer -1 permanent evasion. This injury is permanent, and can be
            recorded once. Gain 1 bleeding token.
        `),
    },
    [Injuries.Blind]: {
        location: HitLocations.Head,
        roll: '7',
        name: 'Blind',
        caption: 'Lose an eye.',
        description: trim(`
            Suffer -1 permanent accuracy. This injury is permanent and can be
            recorded twice. A survivor with two [blind] severe injuries suffers
            -4 permanent accuracy and retires at the end of the next showdown or
            settlement phase, having lost all sight. Gain 1 bleeding token.
        `),
    },
    [Injuries.Concussion]: {
        location: HitLocations.Head,
        roll: '8',
        name: 'Concussion',
        caption: 'Your brain is scrambled like an egg.',
        description: trim(`
            Gain a random disorder. Gain 1 bleeding token.
        `),
    },
    [Injuries.ShatteredJaw]: {
        location: HitLocations.Head,
        roll: '9',
        name: 'Shattered Jaw',
        caption: 'You drink your meat through a straw.',
        description: trim(`
            You can no longer [consume] or be affected by events requiring you
            to [consume]. You can no longer [encourage]. This injury is
            permanent, and can be recorded once. Gain 1 bleeding token.
        `),
    },
    [Injuries.DestroyedTooth]: {
        location: HitLocations.Head,
        roll: '10+',
        name: 'Destroyed Tooth',
        description: trim(`
            If you have 3+ courage, you boldly spit the tooth out and gain +2
            insanity! Otherwise, the blow sends you sprawling and you are
            knocked down.
        `),
    },

    /***************************************************************************
     * Arms
     **************************************************************************/
    [Injuries.DieOfShock]: {
        location: HitLocations.Arms,
        roll: '1-2',
        name: 'Die of Shock',
        description: trim(`
            Your vision fades, along with the sight of your mangled, armless
            torso.
        `),
    },
    [Injuries.BleedingArms]: {
        location: HitLocations.Arms,
        roll: '3',
        name: 'Bleeding',
        description: trim(`
            Gain 2 bleeding tokens.
        `),
    },
    [Injuries.DismemberedArm]: {
        location: HitLocations.Arms,
        roll: '4',
        name: 'Dismembered Arm',
        caption: 'Lose an arm.',
        description: trim(`
            You can no longer activate two-handed weapons. This injury is
            permanent, and can be recorded twice. A survivor with two
            [dismembered arm] severe injuries cannot activate any weapons. Gain
            1 bleeding token.
        `),
    },
    [Injuries.RupturedMuscle]: {
        location: HitLocations.Arms,
        roll: '5',
        name: 'Ruptured Muscle',
        caption: 'A painful rip. The arm hangs limp.',
        description: trim(`
            You can no longer activate fighting arts. This injury is permanent,
            and can be recorded once. Gain 1 bleeding token.
        `),
    },
    [Injuries.Contracture]: {
        location: HitLocations.Arms,
        roll: '6',
        name: 'Contracture',
        caption: 'The arm will never be the same.',
        description: trim(`
            Suffer -1 permanent accuracy. This injury is permanent, and can be
            recorded multiple times. Gain 1 bleeding token.
        `),
    },
    [Injuries.BrokenArm]: {
        location: HitLocations.Arms,
        roll: '7',
        name: 'Broken Arm',
        caption: 'An ear-shattering crunch.',
        description: trim(`
            Suffer -1 permanent accuracy and -1 permanent strength. This injury
            is permanent, and can be recorded twice. Gain 1 bleeding token.
        `),
    },
    [Injuries.SpiralFracture]: {
        location: HitLocations.Arms,
        roll: '8',
        name: 'Spiral Fracture',
        caption: 'Your arm twists unnaturally.',
        description: trim(`
            Gain -2 strength tokens. Skip the next hunt.  Gain 1 bleeding token.
        `),
    },
    [Injuries.DislocatedShoulder]: {
        location: HitLocations.Arms,
        roll: '9',
        name: 'Dislocated Shoulder',
        caption: 'Pop!',
        description: trim(`
            You cannot activate two-handed or [paired] weapons or use [block]
            until the showdown ends. Gain 1 bleeding token.
        `),
    },
    [Injuries.HitTheDirt]: {
        location: HitLocations.Arms,
        roll: '10+',
        name: 'Hit the Dirt',
        description: trim(`
            The blow sends you sprawling and you are knocked down.
        `),
    },

    /***************************************************************************
     * Body
     **************************************************************************/
    [Injuries.InstantDeath]: {
        location: HitLocations.Body,
        roll: '1-2',
        name: 'Instant Death',
        description: trim(`
            The blow sends a bone fragment directly into your heart, killing you
            instantly.
        `),
    },
    [Injuries.BleedingBody]: {
        location: HitLocations.Body,
        roll: '3',
        name: 'Bleeding',
        description: trim(`
            Gain 2 bleeding tokens.
        `),
    },
    [Injuries.GapingChestWound]: {
        location: HitLocations.Body,
        roll: '4',
        name: 'Gaping Chest Wound',
        description: trim(`
            Suffer -1 permanent strength. This injury is permanent, and can be
            recorded multiple times. Gain 1 bleeding token.
        `),
    },
    [Injuries.DestroyedBack]: {
        location: HitLocations.Body,
        roll: '5',
        name: 'Destroyed Back',
        caption: 'A sharp cracking noise.',
        description: trim(`
            Suffer -2 permanent movement. You can no longer activate any gear
            that has 2+ strength. This injury is permanent, and can be recorded
            once. Gain 1 bleeding token.
        `),
    },
    [Injuries.Disemboweled]: {
        location: HitLocations.Body,
        roll: '6',
        name: 'Disemboweled',
        description: trim(`
            Your movement is reduced to 1 until the showdown ends.  Gain 1
            bleeding token. Skip the next hunt. If you suffer [disemboweled]
            during a showdown, at least one other survivor must live to the end
            of that showdown to carry you back to the settlement. Otherwise, at
            the end of the showdown, you are lost. Dead.
        `),
    },
    [Injuries.RupturedSpleen]: {
        location: HitLocations.Body,
        roll: '7',
        name: 'Ruptured Spleen',
        caption: 'A vicious body blow.',
        description: `Skip the next hunt.  Gain 2 bleeding tokens.
    ` },
    [Injuries.BrokenRib]: {
        location: HitLocations.Body,
        roll: '8',
        name: 'Broken Rib',
        caption: 'It even hurts to breath.',
        description: trim(`
            Suffer -1 permanent speed. This injury is permanent, and can be
            recorded multiple times. Gain 1 bleeding token.
        `),
    },
    [Injuries.CollapsedLung]: {
        location: HitLocations.Body,
        roll: '9',
        name: 'Collapsed Lung',
        caption: "You can't catch a breath.",
        description: trim(`
            Gain -1 movement token. Gain 1 bleeding token.
        `),
    },
    [Injuries.BowledOver]: {
        location: HitLocations.Body,
        roll: '10+',
        name: 'Bowled Over',
        description: trim(`
            The blow sends you sprawling and you are knocked down.
        `),
    },

    /***************************************************************************
     * Waist
     **************************************************************************/
    [Injuries.FinalBreath]: {
        location: HitLocations.Waist,
        roll: '1-2',
        name: 'Final Breath',
        description: trim(`
            With your last gasp, you utter final words of bravery. Adjacent
            survivors gain +1 survival. You are dead.
        `),
    },
    [Injuries.BleedingKidneys]: {
        location: HitLocations.Waist,
        roll: '3',
        name: 'Bleeding Kidneys',
        description: trim(`
            Gain 2 bleeding tokens.
        `),
    },
    [Injuries.IntestinalProlapse]: {
        location: HitLocations.Waist,
        roll: '4',
        name: 'Intestinal Prolapse',
        caption: 'Your gut is gravely injured.',
        description: trim(`
            You can no longer equip any gear on your waist, as it is too painful
            to wear. This injury is permanent, and can be recorded once. Gain 1
            bleeding token.
        `),
    },
    [Injuries.WarpedPelvis]: {
        location: HitLocations.Waist,
        roll: '5',
        name: 'Warped Pelvis',
        caption: 'Your pelvis is disfigured.',
        description: trim(`
            Suffer -1 permanent luck. This injury is permanent, and can be
            recorded multiple times. Gain 1 bleeding token.
        `),
    },
    [Injuries.DestroyedGenitals]: {
        location: HitLocations.Waist,
        roll: '6',
        name: 'Destroyed Genitals',
        description: trim(`
            You cannot be nominated for the Intimacy story event. This injury is
            permanent and can be recorded once. Gain a random disorder. You are
            knocked down. Gazing upwards, you wonder at the futility of your
            struggle. Gain +3 insanity. Gain 1 bleeding token.
        `),
    },
    [Injuries.BrokenHip]: {
        location: HitLocations.Waist,
        roll: '7',
        name: 'Broken Hip',
        caption: 'Your hip is dislocated.',
        description: trim(`
            You can no longer dodge. Suffer -1 permanent movement. This injury
            is permanent, and can be recorded once. Gain 1 bleeding token.
        `),
    },
    [Injuries.SlashedBack]: {
        location: HitLocations.Waist,
        roll: '8',
        name: 'Slashed Back',
        caption: 'Making sudden movement is excruciatingly painful.',
        description: trim(`
            You cannot [surge] until the showdown ends. Gain 1 bleeding token.
        `),
    },
    [Injuries.BruisedTailbone]: {
        location: HitLocations.Waist,
        roll: '9',
        name: 'Bruised Tailbone',
        caption: 'The base of your spine is in agony.',
        description: trim(`
            You cannot [dash] until the showdown ends. Gain 1 bleeding token.
        `),
    },
    [Injuries.BellyUp]: {
        location: HitLocations.Waist,
        roll: '10+',
        name: 'Belly-up',
        description: trim(`
            The blow sends you sprawling and you are knocked down.
        `),
    },

    /***************************************************************************
     * Legs
     **************************************************************************/
    [Injuries.BloodGeyser]: {
        location: HitLocations.Legs,
        roll: '1-2',
        name: 'Blood Geyser',
        description: trim(`
            Blood shoots from your femoral artery at an alarming rate, killing
            you in seconds.
        `),
    },
    [Injuries.BleedingLegs]: {
        location: HitLocations.Legs,
        roll: '3',
        name: 'Bleeding',
        description: trim(`
            Gain 2 bleeding tokens.
        `),
    },
    [Injuries.DismemberedLeg]: {
        location: HitLocations.Legs,
        roll: '4',
        name: 'Dismembered Leg',
        caption: 'Lose a leg.',
        description: trim(`
            You suffer -2 permanent movement, and can no longer [dash]. This
            injury is permanent, and can be recorded twice. A survivor with two
            [dismembered leg] severe injuries has lost both of their legs and
            must retire at the end of the next showdown or settlement phase.
            Gain 1 bleeding token.
        `),
    },
    [Injuries.Hamstrung]: {
        location: HitLocations.Legs,
        roll: '5',
        name: 'Hamstrung',
        caption: 'A painful rip. The leg is unusable.',
        description: trim(`
            You can no longer use any fighting arts or abilities. This injury is
            permanent, and can be recorded once. Gain 1 bleeding token.
        `),
    },
    [Injuries.TornAchillesTendon]: {
        location: HitLocations.Legs,
        roll: '6',
        name: 'Torn Achilles Tendon',
        caption: 'Your leg cannot bear your weight.',
        description: trim(`
            Until the end of the showdown, whenever you suffer a light, heavy or
            severe injury, you are also knocked down. Skip the next hunt. Gain 1
            bleeding token.
        `),
    },
    [Injuries.TornMuscle]: {
        location: HitLocations.Legs,
        roll: '7',
        name: 'Torn Muscle',
        caption: 'Your quadriceps is ripped to shreds.',
        description: trim(`
            You cannot [dash] until the showdown ends. Skip the next hunt. Gain
            1 bleeding token.
        `),
    },
    [Injuries.BrokenLeg]: {
        location: HitLocations.Legs,
        roll: '8',
        name: 'Broken Leg',
        caption: 'An ear-shattering crunch.',
        description: trim(`
            Adjacent survivors suffer 1 brain damage. Suffer -1 permanent
            movement. This injury is permanent and can be recorded twice. Gain 1
            bleeding token.
        `),
    },
    [Injuries.BloodyThighs]: {
        location: HitLocations.Legs,
        roll: '9',
        name: 'Bloody Thighs',
        description: trim(`
            Gain 2 bleeding tokens.
        `),
    },
    [Injuries.LostBalance]: {
        location: HitLocations.Legs,
        roll: '10+',
        name: 'Lost Balance',
        description: trim(`
            The blow sends you sprawling and you are knocked down.
        `),
    },
}
