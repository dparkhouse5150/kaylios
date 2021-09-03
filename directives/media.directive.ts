// import {ChangeDetectorRef, Directive, OnDestroy, OnInit} from '@angular/core';
// import {IMediaElement} from "@videogular/ngx-videogular/core/lib/interfaces/i-media-element.interface";
// import {IMediaSubscriptions, IPlayable} from "@videogular/ngx-videogular/core/lib/interfaces/vg-media-api.interface";
// import {Subject, Subscription} from "rxjs";
// import {VgApiService} from "@videogular/ngx-videogular/core/lib/services/vg-api/vg-api.service";
//
// import
// import { IMedia } from '../models/media';

// @Directive({
//   selector: '[appMedia]'
// })
//export class MediaDirective implements OnInit, OnDestroy, IPlayable {
  //  media: IMedia | undefined;
    // private api;
    // private ref;
    // elem: any;
    // vgMedia: IMediaElement | undefined;
    // vgMaster: boolean;
    // state: string;
    // time: any;
    // buffer: any;
    // track: any;
    // subscriptions: IMediaSubscriptions | any;
    // canPlay: boolean;
    // canPlayThrough: boolean;
    // isMetadataLoaded: boolean;
    // isWaiting: boolean;
    // isCompleted: boolean;
    // isLive: boolean;
    // isBufferDetected: boolean;
    // checkInterval: number;
    // currentPlayPos: number;
    // lastPlayPos: number;
    // specifiedDuration: number;
    // checkBufferSubscription: any;
    // syncSubscription: Subscription;
    // canPlayAllSubscription: any;
    // playAfterSync: boolean;
    // mutationObs: Subscription;
    // canPlayObs: Subscription;
    // canPlayThroughObs: Subscription;
    // loadedMetadataObs: Subscription;
    // waitingObs: Subscription;
    // progressObs: Subscription;
    // endedObs: Subscription;
    // playingObs: Subscription;
    // playObs: Subscription;
    // pauseObs: Subscription;
    // timeUpdateObs: Subscription;
    // volumeChangeObs: Subscription;
    // errorObs: Subscription;
    // bufferDetected: Subject<boolean>;
    // playPromise: Promise<any>;
    // constructor(api: VgApiService, ref: ChangeDetectorRef);
    // ngOnInit(): void;
    // prepareSync(): void;
    // startSync(): void;
    // onMutation(mutations: Array<MutationRecord>): void;
    // loadMedia(): void;
    // play(): Promise<any>;
    // pause(): void;
    // get id(): any;
    // get duration(): number;
    // set currentTime(seconds: number);
    // get currentTime(): number;
    // set volume(volume: number);
    // get volume(): number;
    // set playbackRate(rate: number);
    // get playbackRate(): number;
    // get buffered(): TimeRanges;
    // get textTracks(): TextTrackList;
    // onCanPlay(event: any): void;
    // onCanPlayThrough(event: any): void;
    // onLoadMetadata(event: any): void;
    // onWait(event: any): void;
    // onComplete(event: any): void;
    // onStartPlaying(event: any): void;
    // onPlay(event: any): void;
    // onPause(event: any): void;
    // onTimeUpdate(event: any): void;
    // onProgress(event: any): void;
    // onVolumeChange(event: any): void;
    // onError(event: any): void;
    // bufferCheck(): void;
    // startBufferCheck(): void;
    // stopBufferCheck(): void;
    // seekTime(value: number, byPercent?: boolean): void;
    // addTextTrack(type: string, label?: string, language?: string, mode?: 'disabled' | 'hidden' | 'showing'): TextTrack;
    // ngOnDestroy(): void;
    // static ɵfactory: ɵngcc0.ɵɵFactoryDeclaration<VgMediaDirective, never>;
    // static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<VgMediaDirective, "[vgMedia]", never, { "vgMedia": "vgMedia"; "vgMaster": "vgMaster"; }, {}, never>;

// }
