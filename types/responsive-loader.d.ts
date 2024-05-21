declare module 'responsive-loader' {
    export interface ResponsiveImage {
        height?: number
        images: {
            height: number
            path: string
            width: number
        }[]
        src: string
        srcSet: string
        width?: number
    }
}

declare module '*.avif' {
    import type { ResponsiveImage } from 'responsive-loader'

    const value: ResponsiveImage
    export default value
}

declare module '*.jpg' {
    import type { ResponsiveImage } from 'responsive-loader'

    const value: ResponsiveImage
    export default value
}

declare module '*.jpeg' {
    import type { ResponsiveImage } from 'responsive-loader'

    const value: ResponsiveImage
    export default value
}

declare module '*.png' {
    import type { ResponsiveImage } from 'responsive-loader'

    const value: ResponsiveImage
    export default value
}

declare module '*.webp' {
    import type { ResponsiveImage } from 'responsive-loader'

    const value: ResponsiveImage
    export default value
}
