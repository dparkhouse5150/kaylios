export interface User {
    id?: string;
    name: {
        first: string,
        middle: string;
        family: string;
    };
    screenName: string;
    joinedDate: Date;
}
