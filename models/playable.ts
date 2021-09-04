export interface Playable {
    id: string
    elem: any
    time: any
    buffer: any
    track?: any
    canPlay: boolean
    canPlayThrough: boolean
    isMetadataLoaded: boolean
    isWaiting: boolean
    isCompleted: boolean
    isLive: boolean
    textContent: boolean
}
