interface Lang {
  Name: string,
  Skill: number,
  Native: boolean
}

export const langs: Lang[] = [
  {
    Name: 'Polish',
    Skill: 10,
    Native: true
  },
  {
    Name: 'English',
    Skill: 6,
    Native: false
  },
  {
    Name: 'German',
    Skill: 3,
    Native: false
  }
]
