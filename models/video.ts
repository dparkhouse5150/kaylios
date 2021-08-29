import {User} from "./user";

export interface Video {
    id?: string;
    title?: string;
    user: User;
    describe?: string;
    uploadedDate?: Date;
}
