import {Component, OnInit} from '@angular/core';
import {Video} from "../models/video";
import { VideoService } from '../services/video.service';
import {map} from "rxjs/operators";
// import {IMedia} from "../models/media";

import {IMediaElement} from "@videogular/ngx-videogular/core/lib/interfaces/i-media-element.interface";

@Component({
    selector: 'ng-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
    videos?: Video[]
    video: Video | undefined;
    currentVideo?: Video
    currentIndex = -1
    media: IMediaElement | undefined;
    constructor(private videoService: VideoService) {
    }

    // TODO: find out how to unsubscribe
    ngOnInit(): void {
        // this.videosService.unsubscribe()
        this.retrieveVideos();
    }

    refreshList(): void {
        this.currentVideo = undefined;
        this.currentIndex = -1;

        this.retrieveVideos();
    }

    retrieveVideos(): void {
        this.videoService.getAll().snapshotChanges().pipe(
            map(changes => {
                changes.map(c => ({id: c.payload.doc.id, ...c.payload.doc.data()}))
            }
        ))
    }
    setActiveVideo(video: Video, index: number): void {
        this.currentVideo = video
        this.currentIndex = index;
    }
}
