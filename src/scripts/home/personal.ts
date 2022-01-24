import { Home } from '../types/classes'

const today: number = Date.now()
const born: number = +new Date('2004-04-11')

export const age: number = Math.floor((today - born) / 31557600000)

export const home = new Home('Rzeszów', 'Poland')
