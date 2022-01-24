import { SchoolsPlaned } from '../types/interfaces'

export const langs: string[] = [
  'Polish',
  'English',
  'German',
  'Russian',
  'Italian',
  'Norwegian',
]

export const education: SchoolsPlaned = {
  Schools: [
    [
      {
        Name: 'Economics',
        Age: 28,
      },
      {
        Name: '',
        Age: 0,
        Classes: 'null half',
      },
    ],
    [
      {
        Name: 'Mathematics',
        Age: 26,
        Classes: 'arrow a-left',
      },
      {
        Name: 'Philosophy',
        Age: 44,
        Classes: 'arrow a-right',
      },
    ],
    [
      {
        Name: 'Physics',
        Age: 33,
        Classes: 'arrow a-left',
      },
      {
        Name: 'Informatics',
        Age: 37,
        Classes: 'arrow a-right',
      },
      {
        Name: '',
        Age: 0,
        Classes: 'null half',
      },
    ],
    [
      {
        Name: 'Biophysics',
        Age: 50,
        Classes: 'arrow a-left',
      },
      {
        Name: 'Electronics',
        Age: 42,
        Classes: 'arrow a-both',
      },
      {
        Name: 'Sociology',
        Age: 0,
        Classes: 'null',
      },
    ],
    [
      {
        Name: 'Quantum engineering',
        Age: 0,
        Classes: 'arrow big',
      },
      {
        Name: '',
        Age: 0,
        Classes: 'null',
      },
    ],
  ],
}
