export interface User {
    id?: string;

    name: {
        first: string,
        middle: string;
        family: string;
    };

    screenName: string;
    joinedDate: Date;

    social: {
        github: string,
        facebook: string,
        twitter: string,
    }

    isOnline: boolean
    loginTime: Date
    logoutTime: Date
    dateJoined: Date
    dateUpdated: Date

    blockedUsers: Array<any>
}
