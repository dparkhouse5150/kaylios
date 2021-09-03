export interface VideoTrack {
    readonly id: string
    kind: string
    readonly label: string
    language: string
    selected: boolean
    readonly srcBuffer: SourceBuffer | null
}
