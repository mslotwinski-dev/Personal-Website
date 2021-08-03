const today:number = Date.now()
const born:number = +(new Date('2004-04-11'))

export const age: number = Math.floor((today - born) / 31557600000)

class Home {
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

export const home = new Home('Rzeszów', 'Poland')
