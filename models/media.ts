import { IMediaElement, IMediaSubscriptions } from "@videogular/ngx-videogular/core";
import { Subscribers } from './subsribers'
export interface IMedia {
    api: string
    ref: string
    vgMedia: IMediaElement
    vgMaster: boolean
    state: string
    time: any
    buffer: any
    track: any
    subscriptions: Subscribers
    canPlay: boolean
    canPlayThrough: boolean
    isLive: boolean
    isBufferDetected: boolean
    checkInterval: number
    isMetadataLoaded: boolean
    isWaiting: boolean
    currentPlayPos: number
    lastPlayPos: number
    specificDuration: number;
    checkBufferSubscription: any
}
