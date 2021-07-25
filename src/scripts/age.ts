const today:number = Date.now()
const born:number = +(new Date('2004-04-11'))

const age:string | number = Math.floor((today - born) / 31557600000)
export default age
