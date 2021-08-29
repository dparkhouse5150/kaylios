import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Video} from '../models/video'
import {VideoService} from '../services/video.service'

@Component({
    selector: 'ng-video-details',
    templateUrl: './video-details.component.html',
    styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {
    @Input() video?: Video
    @Output() refreshList: EventEmitter<any> = new EventEmitter()


    currentVideo: Video = {
        title: '',
        description: '',
        uploadedDate: '',
        published: false
    }

    message: string = ''
    constructor(private videoService: VideoService) {
    }

    ngOnInit(): void {
        this.message = ''
    }


    ngOnChanges(): void {
        this.message = ''
        // @ts-ignore
        this.currentVideo = { ...this.video}
    }

    updatePublished(status: boolean): void {
        if (this.currentVideo.id) {
            this.videoService.update(this.currentVideo.id, { published: status })
                .then(() => {
                    this.currentVideo.published = status
                    this.message = 'the status was update successfully';
                }).catch(err => console.log(err))
        }
    }

    updateVideo(): void {
        const data = {
            title: this.currentVideo.title,
            description: this.currentVideo.description,
        }

        if (this.currentVideo.id) {
            this.videoService.update(this.currentVideo.id, data)
                .then(() => this.message = 'the video was updated successfully')
                .catch(err => console.log(err))
        }
    }

    deleteVideo(): void {
        if (this.currentVideo.id) {
            this.videoService.delete(this.currentVideo.id)
                .then(() => {
                    this.refreshList.emit()
                    this.message = 'the video was deleted successfully'
                }).catch(err => console.log(err))
        }
    }
}
