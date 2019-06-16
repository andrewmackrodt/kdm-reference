import HitLocations from 'enums/hit-locations'

export {
    Injuries,
    injuries,
}

interface Injury {
    readonly location: string;
    readonly name: string;
    readonly caption?: string;
    readonly description: string;
}

enum Injuries {
    Blind = 'blind',
    BrokenArm = 'broken-arm',
    BrokenHip = 'broken-hip',
    BrokenLeg = 'broken-leg',
    BrokenRib = 'broken-rib',
    BruisedTailbone = 'bruised-tailbone',
    Contracture = 'contracture',
    Deaf = 'deaf',
    DestroyedBack = 'destroyed-back',
    DestroyedGenitals = 'destroyed-genitals',
    Disemboweled = 'disemboweled',
    DislocatedShoulder = 'dislocated-shoulder',
    DismemberedArm = 'dismembered-arm',
    DismemberedLeg = 'dismembered-leg',
    GapingChestWound = 'gaping-chest-wound',
    Hamstrung = 'hamstrung',
    IntracranialHemorrhage = 'intracranial-hemorrhage',
    IntestinalProlapse = 'intestinal-prolapse',
    RupturedMuscle = 'ruptured-muscle',
    RupturedSpleen = 'ruptured-spleen',
    ShatteredJaw = 'shattered-jaw',
    SlashedBack = 'slashed-back',
    SpiralFracture = 'spiral-fracture',
    TornAchillesTendon = 'torn-achilles-tendon',
    TornMuscle = 'torn-muscle',
    WarpedPelvis = 'warped-pelvis',
}

function trim (string: string) {
    return string.replace(/^ +/mg, '')
        .replace(/\n/mg, ' ')
        .trim()
}

const injuries: { [key: string]: Injury } = {
    [Injuries.Blind]: {
        location: HitLocations.Head,
        name: 'Blind',
        caption: 'Lose an eye.',
        description: trim(`
            Suffer -1 permanent accuracy. This injury is permanent and can be
            recorded twice. A survivor with two blind severe head injuries
            suffers -4 permanent accuracy and retires at the end of the next
            showdown or settlement phase, having lost all sight.`,
        ),
    },
    [Injuries.BrokenArm]: {
        location: HitLocations.Arms,
        name: 'Broken Arm',
        caption: 'An ear-shattering crunch.',
        description: trim(`
            Suffer -1 permanent accuracy and -1 permanent strength. This injury
            is permanent, and can be recorded twice.`,
        ),
    },
    [Injuries.BrokenHip]: {
        location: HitLocations.Waist,
        name: 'Broken Hip',
        caption: 'Your hip is dislocated.',
        description: trim(`
            You can no longer dodge. Suffer -1 permanent movement. This injury
            is permanent, and can be recorded once.`,
        ),
    },
    [Injuries.BrokenLeg]: {
        location: HitLocations.Legs,
        name: 'Broken Leg',
        caption: 'An ear-shattering crunch.',
        description: trim(`
            Suffer -1 permanent movement. This injury is permanent and can be
            recorded twice.`,
        ),
    },
    [Injuries.BrokenRib]: {
        location: HitLocations.Body,
        name: 'Broken Rib',
        caption: 'It even hurts to breath.',
        description: trim(`
            Suffer -1 permanent speed. This injury is permanent, and can be
            recorded multiple times.`,
        ),
    },
    [Injuries.BruisedTailbone]: {
        location: HitLocations.Waist,
        name: 'Bruised Tailbone',
        caption: 'The base of your spine is in agony.',
        description: `You cannot dash until the showdown ends.`,
    },
    [Injuries.Contracture]: {
        location: HitLocations.Arms,
        name: 'Contracture',
        caption: 'The arm will never be the same.',
        description: trim(`
            Suffer -1 permanent accuracy. This injury is permanent, and can be
            recorded multiple times.`,
        ),
    },
    [Injuries.Deaf]: {
        location: HitLocations.Head,
        name: 'Deaf',
        caption: "You won't hear it coming.",
        description: trim(`
            Suffer -1 permanent evasion. This injury is permanent, and can be
            recorded once.`,
        ),
    },
    [Injuries.DestroyedBack]: {
        location: HitLocations.Body,
        name: 'Destroyed Back',
        caption: 'A sharp cracking noise.',
        description: trim(`
            Suffer -2 permanent movement. You can no longer activate any gear
            that has 2+ strength. This injury is permanent, and can be recorded
            once.`,
        ),
    },
    [Injuries.DestroyedGenitals]: {
        location: HitLocations.Waist,
        name: 'Destroyed Genitals',
        caption: "You'll never have intimacy again.",
        description: trim(`
            You cannot be nominated for the Intimacy story event. This injury is
            permanent and can be recorded once.`,
        ),
    },
    [Injuries.Disemboweled]: {
        location: HitLocations.Body,
        name: 'Disemboweled',
        description: trim(`
            Your movement is reduced to 1 until the showdown ends. Skip the next
            hunt. If you suffer disemboweled during a showdown, at least one
            other survivor must live to the end of that showdown to carry you
            back to the settlement. Otherwise, at the end of the showdown, you
            are lost. Dead.`,
        ),
    },
    [Injuries.DislocatedShoulder]: {
        location: HitLocations.Arms,
        name: 'Dislocated Shoulder',
        description: trim(`
            You cannot activate two-handed or paired weapons or use block until
            the showdown ends.`,
        ),
    },
    [Injuries.DismemberedArm]: {
        location: HitLocations.Arms,
        name: 'Dismembered Arm',
        caption: 'Lose an arm.',
        description: trim(`
            You can no longer activate two-handed weapons. This injury is
            permanent, and can be recorded twice. A survivor with two
            dismembered arm severe injuries cannot activate any weapons.`,
        ),
    },
    [Injuries.DismemberedLeg]: {
        location: HitLocations.Legs,
        name: 'Dismembered Leg',
        caption: 'Lose a leg.',
        description: trim(`
            You suffer -2 permanent movement, and can no longer dash. This
            injury is permanent, and can be recorded twice. A survivor with two
            dismembered leg severe injuries has lost both of their legs and must
            retire at the end of the next showdown or settlement phase.`,
        ),
    },
    [Injuries.GapingChestWound]: {
        location: HitLocations.Body,
        name: 'Gaping Chest Wound',
        caption: 'It hurts to move.',
        description: trim(`
            Suffer -1 permanent strength. This injury is permanent, and can be
            recorded multiple times.`,
        ),
    },
    [Injuries.Hamstrung]: {
        location: HitLocations.Legs,
        name: 'Hamstrung',
        caption: 'A painful rip. The leg is unusable.',
        description: trim(`
            You can no longer use any fighting arts or abilities. This injury is
            permanent, and can be recorded once.`,
        ),
    },
    [Injuries.IntracranialHemorrhage]: {
        location: HitLocations.Head,
        name: 'Intracranial Hemorrhage',
        caption: "Severe brain trauma.",
        description: trim(`
            You can no longer use or gain any survival. This injury is
            permanent, and can be recorded once.`,
        ),
    },
    [Injuries.IntestinalProlapse]: {
        location: HitLocations.Waist,
        name: 'Intestinal Prolapse',
        caption: 'Your gut is gravely injured.',
        description: trim(`
            You can no longer equip any gear on your waist, as it is too painful
            to wear. This injury is permanent, and can be recorded once.`,
        ),
    },
    [Injuries.RupturedMuscle]: {
        location: HitLocations.Arms,
        name: 'Ruptured Muscle',
        caption: 'A painful rip. The arm hangs limp.',
        description: trim(`
            You can no longer activate fighting arts. This injury is permanent,
            and can be recorded once.`,
        ),
    },
    [Injuries.RupturedSpleen]: {
        location: HitLocations.Body,
        name: 'Ruptured Spleen',
        caption: 'A vicious body blow.',
        description: `Skip the next hunt.`,
    },
    [Injuries.ShatteredJaw]: {
        location: HitLocations.Head,
        name: 'Shattered Jaw',
        caption: 'You drink your meat through a straw.',
        description: trim(`
            You can no longer consume or be affected by events requiring you to
            consume. You can no longer encourage. This injury is permanent, and
            can be recorded once.`,
        ),
    },
    [Injuries.SlashedBack]: {
        location: HitLocations.Waist,
        name: 'Slashed Back',
        caption: 'Movement is excruciatingly painful.',
        description: `You cannot surge until the showdown ends.`,
    },
    [Injuries.SpiralFracture]: {
        location: HitLocations.Arms,
        name: 'Spiral Fracture',
        caption: 'Your arm twists unnaturally.',
        description: `Skip the next hunt.`,
    },
    [Injuries.TornAchillesTendon]: {
        location: HitLocations.Legs,
        name: 'Torn Achilles Tendon',
        caption: 'Your leg cannot bear your weight.',
        description: trim(`
            Until the end of the showdown, whenever you suffer a light, heavy or
            severe injury, you are also knocked down.`,
        ),
    },
    [Injuries.TornMuscle]: {
        location: HitLocations.Legs,
        name: 'Torn Muscle',
        caption: 'Your quadriceps is ripped to shreds.',
        description: trim(`
            You cannot dash until the showdown ends. Skip the next hunt.`,
        ),
    },
    [Injuries.WarpedPelvis]: {
        location: HitLocations.Waist,
        name: 'Warped Pelvis',
        caption: 'Your pelvis is disfigured.',
        description: trim(`
            Suffer -1 permanent luck. This injury is permanent, and can be
            recorded multiple times.`,
        ),
    },
}
