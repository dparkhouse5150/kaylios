import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VideoComponent} from './video/video.component';
import {VideoDetailsComponent} from "./video/video-details/video-details.component";
import {AddVideoComponent} from './video/add-video/add-video.component';
import {VideoPlaylistComponent} from './video/video-playlist/video-playlist.component';

const routes: Routes = [

    {
        path: '',
        component: VideoPlaylistComponent
    },
    {
        path: '/video',
        component: VideoComponent
    },
    {
        path: '/video/details/:id',
        component: VideoDetailsComponent
    },
    {
        path: '/video/add',
        component: AddVideoComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
