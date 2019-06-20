export {
    Disorders,
    disorders,
}

interface Disorder {
    readonly name: string;
    readonly caption?: string;
    readonly description: string;
}

enum Disorders {
    Aichophobia = 'aichophobia',
    Anxiety = 'anxiety',
    Apathetic = 'apathetic',
    BingeEating = 'binge-eating',
}

function trim (string: string) {
    return string.replace(/^ +/mg, '')
        .replace(/\n/mg, ' ')
        .trim()
}

const disorders: { [key: string]: Disorder } = {
    [Disorders.Aichophobia]: {
        name: 'Aichophobia',
        caption: trim(`
            Sharp things make you uncomfortable. It's just a matter of time
            before someone cuts themselves.`
        ),
        description: trim(`
            You cannot activate or [depart] with axes, swords, spears, daggers,
            scythes, or katars in your gear grid.`,
        ),
    },
    [Disorders.Anxiety]: {
        name: 'Anxiety',
        caption: trim(`
            You are afrraid of being afraid. You're a nervous wreck, and
            monsters can smell this fear in your scent.`
        ),
        description: trim(`
            At the start of each showdown, gain the [priority target] token
            unless you have [stinky] gear in your gear grid.`,
        ),
    },
    [Disorders.Apathetic]: {
        name: 'Apathetic',
        caption: trim(`
            You've given up. Nothing seems to matter. You have no concern for
            your own wellbeing.`
        ),
        description: trim(`
            You cannot use or gain survival. You cannot gain courage.<br>
            <br>
            Cure this disorder if you have 8+ understanding.`,
        ),
    },
    [Disorders.BingeEating]: {
        name: 'Binge Eating',
        caption: trim(`
            Eating is the only thing that helps you escape your miserable life.`
        ),
        description: trim(`
            You cannot [depart] unless you have [consumable] gear in your gear
            grid.<br>
            <br>
            You must consume if a choice to consume arises.`,
        ),
    },
}
