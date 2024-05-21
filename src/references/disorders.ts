import { Expansions, Expansion, expansions } from './expansions'

export {
    Disorders,
    disorders,
}

interface Disorder {
    readonly name: string
    readonly expansion?: Expansion
    readonly caption?: string
    readonly description: string
}

enum Disorders {
    AbsentSeizures = 'absent-seizures',
    Aichophobia = 'aichophobia',
    Anxiety = 'anxiety',
    Apathetic = 'apathetic',
    BingeEating = 'binge-eating',
    Coprolalia = 'coprolalia',
    FearOfTheDark = 'fear-of-the-dark',
    FlowerAddiction = 'flower-addiction',
    GhostlyBeauty = 'ghostly-beauty',
    Hemophobia = 'hemophobia',
    Hoarder = 'hoarder',
    Honorable = 'honorable',
    Hyperactive = 'hyperactive',
    Immortal = 'immortal',
    Indecision = 'indecision',
    Megalophobia = 'megalophobia',
    MonsterPanic = 'monster-panic',
    MotionSickness = 'motion-sickness',
    Narcissistic = 'narcissistic',
    PostTraumaticStress = 'post-traumatic-stress',
    Prey = 'prey',
    Quixotic = 'quixotic',
    Rageholic = 'rageholic',
    Secretive = 'secretive',
    Seizures = 'seizures',
    Squeamish = 'squeamish',
    Traumatized = 'traumatized',
    VerminObsession = 'vermin-obsession',
    Vestiphobia = 'vestiphobia',
    WeakSpot = 'weak-spot',
}

function trim(string: string) {
    return string.replace(/^ +/mg, '')
        .replace(/([^\n])\n^([^\n])/mg, '$1 $2')
        .trim()
}

const disorders: { [key: string]: Disorder } = {
    [Disorders.AbsentSeizures]: {
        name: 'Absent Seizures',
        expansion: expansions[Expansions.Gorm],
        caption: trim(`
            No one knows where your mind goes when you're gone, not even you.
        `),
        description: trim(`
            The first time you would suffer a brain trauma each showdown, you
            are instead knocked down and forget a fighting art (erase it).
        `),
    },
    [Disorders.Aichophobia]: {
        name: 'Aichophobia',
        caption: trim(`
            Sharp things make you uncomfortable. It's just a matter of time
            before someone cuts themselves.
        `),
        description: trim(`
            You cannot activate or [depart] with axes, swords, spears, daggers,
            scythes, or katars in your gear grid.
        `),
    },
    [Disorders.Anxiety]: {
        name: 'Anxiety',
        caption: trim(`
            You are afrraid of being afraid. You're a nervous wreck, and
            monsters can smell this fear in your scent.
        `),
        description: trim(`
            At the start of each showdown, gain the [priority target] token
            unless you have [stinky] gear in your gear grid.
        `),
    },
    [Disorders.Apathetic]: {
        name: 'Apathetic',
        caption: trim(`
            You've given up. Nothing seems to matter. You have no concern for
            your own wellbeing.
        `),
        description: trim(`
            You cannot use or gain survival. You cannot gain courage.

            Cure this disorder if you have 8+ understanding.
        `),
    },
    [Disorders.BingeEating]: {
        name: 'Binge Eating',
        caption: trim(`
            Eating is the only thing that helps you escape your miserable life.
        `),
        description: trim(`
            You cannot [depart] unless you have [consumable] gear in your gear
            grid.

            You must consume if a choice to consume arises.
        `),
    },
    [Disorders.Coprolalia]: {
        name: 'Coprolalia',
        caption: trim(`
            You have compulsive tics in the form of sporadic muttering, cursing,
            whimpering, and screaming.
        `),
        description: trim(`
        All your gear is [noisy].

        You are always a threat unless you are knocked down, even if an effect
        says otherwise.
        `),
    },
    [Disorders.FearOfTheDark]: {
        name: 'Fear of the Dark',
        description: trim(`
            You cannot bear the oppressive darkness any longer.

            You retire.

            If you gain this disorder during a hunt or showdown, you put on a
            brave face until you return to the settlement, vowing never to leave
            the Lantern Hoard again.
        `),
    },
    [Disorders.FlowerAddiction]: {
        name: 'Flower Addiction',
        expansion: expansions[Expansions.FlowerKnight],
        caption: trim(`
            An insatiable hunger has bloomed in you, delicate and sickeningly
            sweet.
        `),
        description: trim(`
            You may only [depart] to hunt the Flower Knight.

            After you [depart], cure this disorder.
        `),
    },
    [Disorders.GhostlyBeauty]: {
        name: 'Ghostly Beauty',
        expansion: expansions[Expansions.FlowerKnight],
        caption: trim(`
            You cannot experience fear if you do not exist.
        `),
        description: trim(`
            Double all insanity you gain.

            Double all survival you spend.
        `),
    },
    [Disorders.Hemophobia]: {
        name: 'Hemophobia',
        description: trim(`
            The mere sight of blood makes you lightheaded, and serious gore can
            knock you out!

            During the showdown, whenever a survivor (including you) gains a
            bleeding token, you are knocked down.
        `),
    },
    [Disorders.Hoarder]: {
        name: 'Hoarder',
        caption: trim(`
            You compulsively collect and stash anything you can get your hands
            on. Every little bit you add to your secret hoard makes your
            existence feel more real.        
        `),
        description: trim(`
            Whenever you are a [returning survivor], archive 1 resource and
            gain + 1 courage.
        `),
    },
    [Disorders.Honorable]: {
        name: 'Honorable',
        caption: trim(`
            You believe in honor and fairness when conducting yourself on the
            battlefield. It is these strong principles that have kept you alive,
            and you will not abandon them under any circumstances.        
        `),
        description: trim(`
            You cannot attack a monster from its blind spot or if it is knocked
            down.
        `),
    },
    [Disorders.Hyperactive]: {
        name: 'Hyperactive',
        caption: trim(`
            Whether you are running, fiddling with your gear, or pacing, you are
            always moving.
        `),
        description: trim(`
            During the showdown, you must move at least 1 space every round.
        `),
    },
    [Disorders.Immortal]: {
        name: 'Immortal',
        caption: trim(`
            You are immortal! You will live forever and cannot be killed.
        `),
        description: trim(`
            While you are insane, convert all damage dealt to your hit locations
            to brain damage.

            You are so busy reveling in your own glory that you cannot spend
            survival while insane.
        `),
    },
    [Disorders.Indecision]: {
        name: 'Indecision',
        caption: trim(`
            Past decisions haunt you ceaselessly. You are crippled by
            indecision, and even the most trivial choices grip you with terror.

        `),
        description: trim(`
            If you are the event revealer of hunt events that call on you to
            make a roll, roll twice and use the lower result.
        `),
    },
    [Disorders.Megalophobia]: {
        name: 'Megalophobia',
        expansion: expansions[Expansions.Gorm],
        caption: trim(`
            Even large, looming shadows make you jumpy.
        `),
        description: trim(`
            You may not depart for hunts or showdowns with monsters that occupy
            more than 4 spaces on the showdown board.
        `),
    },
    [Disorders.MonsterPanic]: {
        name: 'Monster Panic',
        caption: trim(`
            Monsters make you feel bad. Really, really bad.
        `),
        description: trim(`
            Whenever you suffer brain damage from an [Intimidate] action, suffer
            1 additional brain damage.        
        `),
    },
    [Disorders.MotionSickness]: {
        name: 'Motion Sickness',
        expansion: expansions[Expansions.DungBeetleKnight],
        caption: trim(`
            Moving quickly makes you vomit.
        `),
        description: trim(`
            Whenever you suffer [knockback], gain 1 bleeding token.
        `),
    },
    [Disorders.Narcissistic]: {
        name: 'Narcissistic',
        expansion: expansions[Expansions.FlowerKnight],
        caption: trim(`
            There is nothing in the world more beautiful than yourself.
        `),
        description: trim(`
            You may not wear armor at the head location. If you are wearing
            armor at the head location when you gain this disorder, archive it.
        `),
    },
    [Disorders.PostTraumaticStress]: {
        name: 'Post-Traumatic Stress',
        caption: trim(`
            The last hunt was harrowing. All you can do is cower and relive the
            trauma. Only time can heal your wounds.
        `),
        description: trim(`
            Next settlement phase, you do not contribute or participate in any
            endeavors.

            Skip the next hunt to recover        
        `),
    },
    [Disorders.Prey]: {
        name: 'Prey',
        caption: trim(`
            You are prey. All there is for you is death.
        `),
        description: trim(`      
            You may not spend survival unless you are insane.
        `),
    },
    [Disorders.Quixotic]: {
        name: 'Quixotic',
        caption: trim(`
            You carry the weight of your settlement on your shoulders. Everyone
            is counting on you to save them, and you will rise to the challenge.
        `),
        description: trim(`
            If you are insane when you [depart], gain +1 survival and +1
            strength token.
        `),
    },
    [Disorders.Rageholic]: {
        name: 'Rageholic',
        caption: trim(`
            Your rage boils out of control, causing you to see red at the
            slightest provocation.
        `),
        description: trim(`
            Whenever you suffer a severe injury, also suffer the [frenzy] brain
            trauma.        
        `),
    },
    [Disorders.Secretive]: {
        name: 'Secretive',
        caption: trim(`
            You love secrets. So much, in fact, that you pretend to have many.
        `),
        description: trim(`
            When you are a [returning survivor], you quickly become preoccupied
            with your own affairs. You must skip your next hunt to deal with
            them.        
        `),
    },
    [Disorders.Seizures]: {
        name: 'Seizures',
        caption: trim(`
            Lingering damage from your head injuries has caused you to
            experience periods of uncontrollable shaking and absence of thought.
        `),
        description: trim(`
            During the showdown, whever you suffer damage to your head location,
            you are knocked down.        
        `),
    },
    [Disorders.Squeamish]: {
        name: 'Squeamish',
        caption: trim(`
            You can't handle bad smells.
        `),
        description: trim(`
            You cannot [depart] with any [stinky] gear in your gear grid. If a
            status or effect would cause you to become [stinky], lose all your
            survival.        
        `),
    },
    [Disorders.Traumatized]: {
        name: 'Traumatized',
        caption: trim(`
            Your experiences have left you shaken and paralyzed by fear.

        `),
        description: trim(`
            Whenever you end your act adjacent to a monster, you are knocked
            down.
        `),
    },
    [Disorders.VerminObsession]: {
        name: 'Vermin Obsession',
        expansion: expansions[Expansions.DungBeetleKnight],
        caption: trim(`
            You love insects.
        `),
        description: trim(`
            While there is a [Bug Spot] terrain tile on the showdown board, you
            are so overwhelmed that you are [doomed].
        `),
    },
    [Disorders.Vestiphobia]: {
        name: 'Vestiphobia',
        caption: trim(`
            Even the lightest armor rubs harshly against your skin and
            constricts your ability to move.
        `),
        description: trim(`
            You cannot wear armor at the body location. If you are wearing
            armor at the body location when you gain this disorder, archive it
            as you tear it off your person!        
        `),
    },
    [Disorders.WeakSpot]: {
        name: 'Weak Spot',
        caption: trim(`
            You have an imaginary infirmity.
        `),
        description: trim(`
            When you gain this disorder, roll a random hit location and record
            it. You cannot [depart] unless you have armor at this hit location.        
        `),
    },
}
