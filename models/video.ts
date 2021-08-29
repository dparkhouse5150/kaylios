import {User} from "./user";

export interface Video {
    id?: string;
    title?: string;
    describe?: string;
    uploadedDate?: Date;
    published: boolean
}
