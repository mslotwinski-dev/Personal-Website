export class Home {
  city: string
  country: string

  constructor(city: string, country: string) {
    this.city = city
    this.country = country
  }

  format(): string {
    return `${this.city}, ${this.country}`
  }
}
