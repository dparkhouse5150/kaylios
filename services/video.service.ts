import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Video} from '../models/video';

@Injectable({
    providedIn: 'root'
})
export class VideoService {
    private dbPath = 'videos'

    videoRef: AngularFirestoreCollection<Video>

    constructor(private db: AngularFirestore) {
        this.videoRef = db.collection(this.dbPath)
    }

    getAll(): AngularFirestoreCollection<Video> {
        return this.videoRef
    }

    create(video: Video): any {
        return this.videoRef.add({...video})
    }

    update(id: string, data:any):Promise<void> {
        return this.videoRef.doc(id).update(data)
    }
    delete(id: string):Promise<void> {
        return this.videoRef.doc(id).delete()
    }
}
