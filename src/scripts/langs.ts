interface Software {
  Name: string,
  Skill: number
  Native?: boolean // Only in human langs
}

export const softwaresFront: Software[] = [
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
    Skill: 1
  },
  {
    Name: 'Angular',
    Skill: 0
  }
]

export const softwaresBack: Software[] = [
  {
    Name: 'NodeJS',
    Skill: 2
  },
  {
    Name: 'MongoDB',
    Skill: 1
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

export const humanLangs: Software[] = [
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
