import {VideoTrack} from "./video-track";
import {VideoTrackListEventMap} from "./video-track-list-event-map";

export interface VideoTrackList extends EventTarget {
    readonly length: number
    onAddTrack: ((this: VideoTrackList, ev: TrackEvent) => any) | null
    onChange: ((this: VideoTrackList, ev: TrackEvent) => any) | null
    onRemoveTrack: ((this: VideoTrackList, ev: TrackEvent) => any) | null
    readonly selected: number
    getTrackId(id: string): VideoTrack | null
    item(index: number) : VideoTrack | 0

    addEventListener<K extends keyof VideoTrackListEventMap>(type: K, listener: (this: VideoTrackList, ev: (VideoTrackListEventMap[K])) => any, options?: boolean | AddEventListenerOptions): void

    addEventListener(type: string,
                     listener: EventListenerOrEventListenerObject,
                     options?: boolean | AddEventListenerOptions):void

    removeEventListener(type: string,
                        listener: EventListenerOrEventListenerObject,
                        options?: boolean | AddEventListenerOptions):void

    removeEventListener(type: string,
                     listener: EventListenerOrEventListenerObject,
                     options?: boolean | AddEventListenerOptions):void

    [index: number]: VideoTrack
}
