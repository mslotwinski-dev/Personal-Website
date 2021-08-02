interface Item {
  Name: string,
  Skill: number
  Native?: boolean // Only in human langs
}

export const softwaresFront: Item[] = [
  {
    Name: 'HTML',
    Skill: 10
  },
  {
    Name: 'CSS',
    Skill: 8
  },
  {
    Name: 'JavaScript',
    Skill: 6
  },
  {
    Name: 'TypeScript',
    Skill: 5
  },
  {
    Name: 'Vue',
    Skill: 4
  },
  {
    Name: 'React',
    Skill: 2
  },
  {
    Name: 'Angular',
    Skill: 0
  }
]

export const softwaresBack: Item[] = [
  {
    Name: 'NodeJS',
    Skill: 3
  },
  {
    Name: 'MongoDB',
    Skill: 2
  },
  {
    Name: 'Go',
    Skill: 0
  }
  // {
  //   Name: 'Kotlin',
  //   Skill: 0
  // }
]

export const humanLangs: Item[] = [
  {
    Name: 'Polish',
    Skill: 10,
    Native: true
  },
  {
    Name: 'English',
    Skill: 6
  },
  {
    Name: 'German',
    Skill: 3
  }
]
