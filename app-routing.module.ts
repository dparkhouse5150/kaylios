import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VideoComponent} from './video/video.component';
import {VideoDetailsComponent} from "./video-details/video-details.component";
import {AddVideoComponent} from './add-video/add-video.component';
import {VideoPlaylistComponent} from './video-playlist/video-playlist.component';

const routes: Routes = [
    {
        path: '/video',
        component: VideoComponent
    },
    {
        path: '/video-detail/:id',
        component: VideoDetailsComponent
    },
    {
        path: '/video/add',
        component: AddVideoComponent
    },
    {
        path: '',
        component: VideoPlaylistComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
