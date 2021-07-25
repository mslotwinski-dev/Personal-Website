interface Work {
  Name: string,
  Position: string,
  HowLong: string,
  Color: string | null
}

const Soulgraphy:Work = {
  Name: 'Soulgraphy',
  Position: 'Project Leader',
  HowLong: 'November 2020 - July 2021',
  Color: '#6d455e'
}

export const works: Work[] = [
  Soulgraphy
]
