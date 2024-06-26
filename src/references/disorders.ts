import { type Expansion, Expansions, expansions } from './expansions'
import { trim } from 'utils/strings'

export interface Disorder {
    readonly name: string
    readonly expansion?: Expansion
    readonly crest?: { name: string; image: string } | false
    readonly caption?: string
    readonly description: string
}

export enum Disorders {
    AbsentSeizures = 'absent-seizures',
    Aichophobia = 'aichophobia',
    Anxiety = 'anxiety',
    Apathetic = 'apathetic',
    Arithmophobia = 'arithmophobia',
    Atelophobia = 'atelophobia',
    BingeEating = 'binge-eating',
    Bloodlust = 'bloodlust',
    BrainSmog = 'brain-smog',
    Controlophobia = 'controlophobia',
    Coprolalia = 'coprolalia',
    Delicious = 'delicious',
    Destined = 'destined',
    DirectionalDyslexia = 'directional-dyslexia',
    Emotionless = 'emotionless',
    Enfeebled = 'enfeebled',
    Ergophobia = 'ergophobia',
    FearOfTheDark = 'fear-of-the-dark',
    FlowerAddiction = 'flower-addiction',
    GhostlyBeauty = 'ghostly-beauty',
    Hemophobia = 'hemophobia',
    Hoarder = 'hoarder',
    Honorable = 'honorable',
    Hyperactive = 'hyperactive',
    HyperSensitivity = 'hyper-sensitivity',
    Immortal = 'immortal',
    Indecision = 'indecision',
    Megalophobia = 'megalophobia',
    MonsterPanic = 'monster-panic',
    MotionSickness = 'motion-sickness',
    Narcissistic = 'narcissistic',
    Overprotective = 'overprotective',
    Pacifist = 'pacifist',
    PerformanceAnxiety = 'performance-anxiety',
    Phobophobia = 'phobophobia',
    Photophillia = 'photophillia',
    PostTraumaticStress = 'post-traumatic-stress',
    Prey = 'prey',
    PrimaDonna = 'prima-donna',
    Quixotic = 'quixotic',
    Rageholic = 'rageholic',
    Revenge = 'revenge',
    Schadenfreude = 'schadenfreude',
    Secretive = 'secretive',
    Seizures = 'seizures',
    ShallowLungs = 'shallow-lungs',
    Somniphobia = 'somniphobia',
    SpiralGanglia = 'spiral-ganglia',
    Squeamish = 'squeamish',
    StageFright = 'stage-fright',
    StarkRaving = 'stark-raving',
    Subjugated = 'subjugated',
    SunDrunk = 'sun-drunk',
    Superstitious = 'superstitious',
    TinyArachnophobia = 'tiny-arachnophobia',
    Traumatized = 'traumatized',
    TunnelVision = 'tunnel-vision',
    Unlucky = 'unlucky',
    VerminObsession = 'vermin-obsession',
    Vestiphobia = 'vestiphobia',
    WeakSpot = 'weak-spot',
    Weltschmerz = 'weltschmerz',
}

export const disorders: { [key: string]: Disorder } = {
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
    [Disorders.Arithmophobia]: {
        name: 'Arithmophobia',
        expansion: expansions[Expansions.DragonKing],
        crest: { name: 'Tyrant', image: require('images/crests/tyrant.webp') },
        caption: trim(`
            You love numbers. Your life must exist in perfect arithmetical
            harmony.
        `),
        description: trim(`
            When you gain this disorder, roll 1d5. Your movement is that number.

            Ignore all other movement modifiers.
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
    [Disorders.Atelophobia]: {
        name: 'Atelophobia',
        expansion: expansions[Expansions.GamblersChest],
        crest: false,
        caption: trim(`
            You have an obsessive fear of imperfection.
        `),
        description: trim(`
            When there are no [Perfect hits] in your attack, suffer 1 brain
            damage.
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
    [Disorders.Bloodlust]: {
        name: 'Bloodlust',
        expansion: expansions[Expansions.GamblersChest],
        crest: { name: 'Crimson Crocodile', image: require('images/crests/crimson-crocodile.webp') },
        caption: trim(`
            A single glimpse of red and that is all you can see.
        `),
        description: trim(`
            Whenever a survivor gains a bleeding token, suffer the [frenzy]
            brain trauma. Limit once per round.
        `),
    },
    [Disorders.BrainSmog]: {
        name: 'Brain Smog',
        expansion: expansions[Expansions.GamblersChest],
        crest: { name: 'Smog Singers', image: require('images/crests/smog-singers.webp') },
        caption: trim(`
            You cannot focus.
        `),
        description: trim(`
            You cannot [surge] or [concentrate].
        `),
    },
    [Disorders.Controlophobia]: {
        name: 'Controlophobia',
        expansion: expansions[Expansions.Spidicules],
        caption: trim(`
            You are deeply afraid of being the monster controller.
        `),
        description: trim(`
            While you are the monster controller, double any damage you suffer.
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
    [Disorders.Delicious]: {
        name: 'Delicious',
        expansion: expansions[Expansions.LionGod],
        caption: trim(`
            Predators of all shapes and sizes find your scent irresistible.
        `),
        description: trim(`
            You are still considered a threat when you are knocked down (unless
            you use an effect that says otherwise).
        `),
    },
    [Disorders.Destined]: {
        name: '[Destined]',
        expansion: expansions[Expansions.DragonKing],
        crest: { name: 'Tyrant', image: require('images/crests/tyrant.webp') },
        caption: trim(`
            You have a grand destiny that you must fulfill.
        `),
        description: trim(`
            If you do not [depart], lose all survival and insanity.
        `),
    },
    [Disorders.DirectionalDyslexia]: {
        name: 'Directional Dyslexia',
        expansion: expansions[Expansions.GamblersChest],
        crest: { name: 'King', image: require('images/crests/king.webp') },
        caption: trim(`
            You have extreme difficulty distinguishing left from right and up
            from down.
        `),
        description: trim(`
            Your [movement] can only be spent to move in a single straight line.
        `),
    },
    [Disorders.Emotionless]: {
        name: 'Emotionless',
        expansion: expansions[Expansions.Sunstalker],
        caption: trim(`
            You don't have any emotions. You've hidden this from everyone by
            mimicking their social interactions.
        `),
        description: trim(`
            You cannot gain +1 strength tokens.
        `),
    },
    [Disorders.Enfeebled]: {
        name: 'Enfeebled',
        expansion: expansions[Expansions.LionGod],
        caption: trim(`
            You are a delicate flower, wilting in the darkness.
        `),
        description: trim(`
            It takes one less bleeding token to kill you.
        `),
    },
    [Disorders.Ergophobia]: {
        name: 'Ergophobia',
        expansion: expansions[Expansions.GamblersChest],
        crest: false,
        caption: trim(`
            You cannot bear the thought of working. You hide away whenever you
            might be needed.
        `),
        description: trim(`
            When you are a [returning survivor], you do not generate
            [endeavor].

            You cannot endeavor.
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
    [Disorders.HyperSensitivity]: {
        name: 'Hyper-Sensitivity',
        expansion: expansions[Expansions.Slenderman],
        caption: trim(`
            Your will to survive has become indefatigable.
        `),
        description: trim(`
            You may [dodge] one additional time per round.

            Whenever you are hit by an attack, you must [dodge] at least once,
            if possible.
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
    [Disorders.Overprotective]: {
        name: 'Overprotective',
        expansion: expansions[Expansions.Sunstalker],
        caption: trim(`
            You love the feeling of being needed.
        `),
        description: trim(`
            When an adjacent survivor is knocked down, you are also knocked down
            as you rush to their aid.
        `),
    },
    [Disorders.Pacifist]: {
        name: 'Pacifist',
        expansion: expansions[Expansions.GamblersChest],
        crest: { name: 'Smog Singers', image: require('images/crests/smog-singers.webp') },
        caption: trim(`
            You refuse to fight.
        `),
        description: trim(`
            You cannot activate a weapon to attack. Ignore this if you are
            [frenzied].
        `),
    },
    [Disorders.PerformanceAnxiety]: {
        name: 'Performance Anxiety',
        expansion: expansions[Expansions.DragonKing],
        crest: { name: 'Tyrant', image: require('images/crests/tyrant.webp') },
        caption: trim(`
            You're not ready to love.
        `),
        description: trim(`
            You cannot be nominated for [Intimacy].

            Cure this disorder if you have 8+ courage.
        `),
    },
    [Disorders.Phobophobia]: {
        name: 'Phobophobia',
        expansion: expansions[Expansions.GamblersChest],
        crest: { name: 'Crimson Crocodile', image: require('images/crests/crimson-crocodile.webp') },
        caption: trim(`
            You fear fear.
        `),
        description: trim(`
            At the start of your act, if you have 0 insanity, gain the
            [Terrified] survivor status card.
        `),
    },
    [Disorders.Photophillia]: {
        name: 'Photophillia',
        expansion: expansions[Expansions.GamblersChest],
        crest: false,
        caption: trim(`
            You cling to light.
        `),
        description: trim(`
            You cannot [depart] without a lantern in your gear grid.
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
    [Disorders.PrimaDonna]: {
        name: 'Prima Donna',
        expansion: expansions[Expansions.LionKnight],
        caption: trim(`
            The double-edged sword of game is the only weapon you require.
        `),
        description: trim(`
            Each survivor turn, you must take your act first (roll off each turn
            if multiple survivors have this disorder).
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
    [Disorders.Revenge]: {
        name: 'Revenge',
        expansion: expansions[Expansions.Spidicules],
        caption: trim(`
            When a fellow hunter perishes you lose control.
        `),
        description: trim(`
            When a survivor dies during the showdown, suffer the [Frenzy] brain
            trauma.
        `),
    },
    [Disorders.Schadenfreude]: {
        name: 'Schadenfreude',
        expansion: expansions[Expansions.GamblersChest],
        crest: { name: 'Atnas', image: require('images/crests/atnas.webp') },
        caption: trim(`
            You take pleasure in others' suffering.
        `),
        description: trim(`
            When another survivor suffers a severe injury, you are overcome with
            glee. You are knocked down and gain +1 insanity.
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
    [Disorders.ShallowLungs]: {
        name: 'Shallow Lungs',
        expansion: expansions[Expansions.LionKnight],
        caption: trim(`
            Yelling makes you feel light-headed.
        `),
        description: trim(`
            When you [encourage], you are knocked down.
        `),
    },
    [Disorders.SpiralGanglia]: {
        name: 'Spiral Ganglia',
        expansion: expansions[Expansions.Slenderman],
        caption: trim(`
            The roads in your mind cross and reveal a strange new path.
        `),
        description: trim(`
            At the start of the showdown, gain the [monster:Darkness Awareness]
            survivor status card.
        `),
    },
    [Disorders.Somniphobia]: {
        name: 'Somniphobia',
        expansion: expansions[Expansions.GamblersChest],
        crest: false,
        caption: trim(`
            You fear what might happen when you fall asleep away from home.
        `),
        description: trim(`
            On [Arrival], lose half your survival, rounded down.
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
    [Disorders.StageFright]: {
        name: 'Stage Fright',
        expansion: expansions[Expansions.LionKnight],
        caption: trim(`
            You hare being the center of attention.
        `),
        description: trim(`
            Whenever you become [doomed] or gain the [priority target] token,
            lose 1 survival.
        `),
    },
    [Disorders.StarkRaving]: {
        name: 'Stark Raving',
        expansion: expansions[Expansions.LionGod],
        caption: trim(`
            Freedom awaits those pushed this far beyond breaking point.
        `),
        description: trim(`
            You are always [insane], regardless of your insanity.
        `),
    },
    [Disorders.Subjugated]: {
        name: 'Subjugated',
        expansion: expansions[Expansions.GamblersChest],
        crest: { name: 'King', image: require('images/crests/king.webp') },
        caption: trim(`
            You are in awe of the majesty of monsters.
        `),
        description: trim(`
            When you are knocked down, you are [dominated].

            When you depart to hunt the King, remove this disorder.
        `),
    },
    [Disorders.SunDrunk]: {
        name: 'Sun-Drunk',
        expansion: expansions[Expansions.Sunstalker],
        caption: trim(`
            When your emotions rise, you can only think of violence.
        `),
        description: trim(`
            When you have any +1 strength tokens, you cannot [dash], [dodge] or
            [story:Run Away].
        `),
    },
    [Disorders.Superstitious]: {
        name: 'Superstitious',
        expansion: expansions[Expansions.DragonKing],
        crest: { name: 'Tyrant', image: require('images/crests/tyrant.webp') },
        caption: trim(`
            Evil magic will be your undoing. You do not believe in abusing the
            other.
        `),
        description: trim(`
            You cannot activate or [depart] with other gear in your gear grid.
        `),
    },
    [Disorders.TinyArachnophobia]: {
        name: 'Tiny Arachnophobia',
        expansion: expansions[Expansions.Spidicules],
        caption: trim(`
            You are irrationally scared by tiny spiders and the things they
            produce.
        `),
        description: trim(`
            You cannot carry any gear with the amber keyboard. You cannot gain
            any resources with the silk keyword.
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
    [Disorders.TunnelVision]: {
        name: 'Tunnel Vision',
        expansion: expansions[Expansions.LionGod],
        caption: trim(`
            If you're not killing something, you're wasting your time.
        `),
        description: trim(`
            When you spend [activation], you may only activate weapons.
        `),
    },
    [Disorders.Unlucky]: {
        name: 'Unlucky',
        expansion: expansions[Expansions.LionKnight],
        caption: trim(`
            Your mother always said you were born under a bad sign.
        `),
        description: trim(`
            You cannot critically wound.
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
    [Disorders.Weltschmerz]: {
        name: 'Weltschmerz',
        expansion: expansions[Expansions.GamblersChest],
        crest: { name: 'Atnas', image: require('images/crests/atnas.webp') },
        caption: trim(`
            Things cannot be the way you wish them to be, and only death can
            shake you from your wallowing.
        `),
        description: trim(`
            You cannot [depart] unless you have updated the death count this
            lantern year.
        `),
    },
}
