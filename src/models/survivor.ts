import { Impairment } from 'enums/impairments'

export class Survivor {
    protected name!: string
    protected sex!: string

    protected _isRetired: boolean = false
    protected huntExperience: number = 0
    protected courage: number = 0
    protected understanding: number = 0
    protected insanity: number = 0
    protected weaponMastery = []

    // survival
    protected _canUseSurvival: boolean = true
    protected survival: number = 0
    protected survivalLimit: number = 1

    // survival actions
    protected dodge: boolean = true
    protected encourage: boolean = false
    protected surge: boolean = false
    protected dash: boolean = false
    protected endure: boolean = false

    // attributes
    protected movement: number = 5
    protected speed: number = 0
    protected accuracy: number = 0
    protected strength: number = 0
    protected evasion: number = 0
    protected luck: number = 0

    // hit location armor points
    protected head: number = 0
    protected arms: number = 0
    protected body: number = 0
    protected waist: number = 0
    protected legs: number = 0

    // hit location severe injuries

    // fighting arts, disorders, abilities and impairments
    protected canUseFightingArts: boolean = true
    protected fightingArts = []
    protected disorders = []
    protected skipNextHunt: boolean = false
    protected abilities = []
    protected impairments: object[] = []

    // severe injuries head
    protected intracranialHemorrhage: boolean = false
    protected deaf: boolean = false
    protected blind: number = 0
    protected shatteredJaw: boolean = false

    // severe injuries body
    protected gapingChestWould: number = 0
    protected destroyedBack: boolean = false
    protected brokenRib: number = 0

    // severe injuries arms
    protected dismemberedArm: number = 0
    protected rupturedMuscle: boolean = false
    protected contracture: number = 0
    protected brokenArm: number = 0

    // severe injuries waist
    protected intestinalProlapse: boolean = false
    protected warpedPelvis: number = 0
    protected destroyedGenitals: boolean = false
    protected brokenHip: boolean = false

    // severe injuries legs
    protected dismemberedLeg: number = 0
    protected hamstrung: boolean = false
    protected brokenLeg: number = 0

    public isInsane (): boolean {
        return this.insanity >= 3
    }

    public canConsume (): boolean {
        return !this.shatteredJaw
    }

    // region severe injuries
    public setIntracranialHemorrhage () {
        this.intracranialHemorrhage = true
        this._canUseSurvival = false
    }

    public setDeaf () {
        this.deaf = true
        this.evasion--
    }

    // public setShatteredJaw() {
    //     this.shatteredJaw = true
    //     this.canConsume = false
    // }

    public addGapingChestWound () {
        this.gapingChestWould++
        this.strength--
    }

    public setDestroyedBack () {
        this.destroyedBack = true
        this.movement -= 2
        this.impairments.push({
            type: Impairment.GearRestriction,
            exclude: [
                {
                    attribute: 'strength',
                    comparison: '>=',
                    value: 2,
                },
            ],
        })
    }

    // endregion
}
