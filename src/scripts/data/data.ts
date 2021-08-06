// ENUMS

export enum Degree {
    BACHELOR = 'Bachelor',
    MASTER = 'Master',
    DOCTOR = 'Doctor'
}

export enum LangType {
    FRONTEND = 'Frontend',
    BACKEND = 'Backend',
    DATABASE = 'Database'
}

// INTERFACES

export interface University {
    Field: string,
    Spec: string,
    Degree: Degree | null,
    University: string,
    Year: number
    Place: string
}

export interface Work {
    Name: string,
    Position: string,
    HowLong: string,
    Color?: string
}

export interface LangItem {
    Name: string,
    Skill: number
    Native?: boolean // Only in human langs
}

export interface Interest {
    Name:string,
    Link?:string
}

export interface SingleLang {
    Name:string,
    Color:string
    Type: LangType
}

export interface Project {
    Name: string,
    Desc: string,
    Link: string,
    Code: string;
    Created: Date,
    Logo: string
    Langs: {
        Id: SingleLang
        Percentage: number
    }[]
    Screenshots: string[]
}

export interface City {
    Name: string,
    x: number,
    y: number,
    right?: number
}

// CLASSES

export class Home {
    city: string
    country: string

    constructor (city:string, country:string) {
      this.city = city
      this.country = country
    }

    format () {
      return `${this.city}, ${this.country}`
    }
}
