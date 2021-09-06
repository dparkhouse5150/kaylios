import { User } from "./user";

//! 
export interface Profile {
    id: string
    
    name: {
        first: string
        middle: string
        last: string
    }

    skill: {
        languages: string[]
        experience: string[]
    }

    education?: {
        fos?: string
        name: string
        yearStart: Date
        yearEnd: Date
        gpa: number
    }
   
    isEditing: boolean
    hasDegree: boolean
}

export interface SimpleUser extends User {
    hasDegree: boolean;
}