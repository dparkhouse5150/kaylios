import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {VideoComponent} from './video/video.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {environment} from '../environments/environment';
import {VideoDetailsComponent} from './video/video-details/video-details.component';
import {FormsModule} from "@angular/forms";
import {VideoListComponent} from './video/video-list/video-list.component';
import {AddVideoComponent} from './video/add-video/add-video.component';
import {VideoPlaylistComponent} from './video/video-playlist/video-playlist.component';
import {VideoPlaylistItemComponent} from './video/video-playlist-item/video-playlist-item.component';

import {ReactiveFormsModule} from '@angular/forms';

import {SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider} from 'angularx-social-login';

import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from "@videogular/ngx-videogular/controls";
import {VgOverlayPlayModule} from "@videogular/ngx-videogular/overlay-play";
import {VgBufferingModule} from "@videogular/ngx-videogular/buffering";
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
// import { MediaDirective } from './directives/media.directive'


@NgModule({
    declarations: [
        AppComponent,
        VideoComponent,
        VideoDetailsComponent,
        VideoListComponent,
        AddVideoComponent,
        VideoPlaylistComponent,
        VideoPlaylistItemComponent,
        LoginComponent,
        RegisterComponent,
        // MediaDirective

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule,
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        FormsModule,
        ReactiveFormsModule,
        VgCoreModule,
        SocialLoginModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule
    ],
    providers: [{
        provide: 'SocialAuthServiceConfig',
        useValue: {
            autoLogin: false,
            providers: [{
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider('your-client-id-here')
            }] 
        } as SocialAuthServiceConfig,
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
