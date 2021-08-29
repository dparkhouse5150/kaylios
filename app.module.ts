import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {VideoComponent} from './video/video.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {environment} from '../environments/environment';
import {VideoDetailsComponent} from './video-details/video-details.component';
import {FormsModule} from "@angular/forms";
import { VideoListComponent } from './video-list/video-list.component';
import { AddVideoComponent } from './add-video/add-video.component';

@NgModule({
    declarations: [
        AppComponent,
        VideoComponent,
        VideoDetailsComponent,
        VideoListComponent,
        AddVideoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule,
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
