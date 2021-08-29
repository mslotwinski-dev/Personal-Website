import { SchoolsPlaned } from '../types/interfaces'

export const langs:string [] = [
  'English',
  'Spanish',
  'German',
  'Russian',
  'Italian',
  'Norwegian'
]

export const education:SchoolsPlaned = {
  Schools: [
    [
      {
        Name: 'Economics',
        Age: 28
      }
    ],
    [
      {
        Name: 'Mathematics',
        Age: 26,
        Classes: 'arrow'
      }
    ],
    [
      {
        Name: 'Physics',
        Age: 33,
        Classes: 'arrow a-left'
      },
      {
        Name: 'IT',
        Age: 37,
        Classes: 'arrow a-right'
      }
    ],
    [
      {
        Name: 'Biophysics',
        Age: 47,
        Classes: 'arrow a-left'
      },
      {
        Name: 'Electronics',
        Age: 42,
        Classes: 'arrow a-both'
      },
      {
        Name: 'Econometrics',
        Age: 44,
        Classes: 'arrow a-right'
      }
    ],
    [
      {
        Name: 'Biology',
        Age: 50,
        Classes: 'arrow'
      },
      {
        Name: '',
        Age: 0,
        Classes: 'null'
      },
      {
        Name: '',
        Age: 0,
        Classes: 'null'
      }
    ]
  ]
}
