/**
 *
 */
import {Observable, Subject} from "rxjs";

export interface Subscribers {
    abort(): Observable<any>

    bufferDetected: Subject<boolean>
    canPlay: Observable<any>
    canPlayThrough: Observable<any>
    durationChange: Observable<number>
    emptied: Observable<any>
    encryption: Observable<any>
    ended: Observable<any>
    error: Observable<any>
    loadedData: Observable<any>
    loadedMetadata: Observable<any>
    loadStart: Observable<any>
    pause: Observable<any>
    play: Observable<any>
    playing: Observable<any>
    progress: Observable<any>
    rateChange: Observable<number>
    seeked: Observable<any>
    seeking: Observable<any>
    stalled: Observable<any>
    suspend: Observable<any>
    timeUpdate: Observable<any>
    volumeChange: Observable<any>
    waiting: Observable<any>
    startAds: Observable<any>
    endAds: Observable<any>
}
