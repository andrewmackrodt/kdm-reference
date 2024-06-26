export interface CardItem {
    crest?: { image: string; name?: string; color?: string; hidden?: boolean }
    location: string
    name: string
    image: string
    caption?: string
    description: string
    roll?: string
}
