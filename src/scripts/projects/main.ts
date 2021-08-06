import { Project } from '../data/data'
import { LangID } from './langs'

const descriptions: string[] = [
  'Soulgraphy is a social project whose main task is to enable users to get to know themselves and other people. To this end, the web application offers all interested parties a platform for publishing articles, discussions and taking tests to help determine your worldview.',
  ''
]

export const projects: Project[] = [
  {
    Name: 'AnalyseMe',
    Desc: descriptions[1],
    Link: 's',
    Code: 'doce',
    Created: new Date(202220, 11, 7),
    Logo: 'soulgraphy.png',
    Langs: [
      {
        Id: LangID[7],
        Percentage: 100
      },
      {
        Id: LangID[9],
        Percentage: 100
      },
      {
        Id: LangID[13],
        Percentage: 100
      }
    ],
    Screenshots: ['a', 'b']
  },
  {
    Name: 'Note Keeper',
    Desc: descriptions[1],
    Link: 's',
    Code: 'doce',
    Created: new Date(202220, 11, 7),
    Logo: 'soulgraphy.png',
    Langs: [
      {
        Id: LangID[7],
        Percentage: 90
      },
      {
        Id: LangID[2],
        Percentage: 10
      },
      {
        Id: LangID[9],
        Percentage: 100
      },
      {
        Id: LangID[13],
        Percentage: 100
      }
    ],
    Screenshots: ['a', 'b']
  },
  {
    Name: 'Soulgraphy',
    Desc: descriptions[0],
    Link: 's',
    Code: 'doce',
    Created: new Date(202220, 11, 7),
    Logo: 'soulgraphy.png',
    Langs: [
      {
        Id: LangID[0],
        Percentage: 70
      },
      {
        Id: LangID[1],
        Percentage: 20
      },
      {
        Id: LangID[4],
        Percentage: 10
      }
    ],
    Screenshots: ['a', 'b']
  },
  {
    Name: 'Unia Wolności',
    Desc: descriptions[1],
    Link: 's',
    Code: 'doce',
    Created: new Date(202220, 11, 7),
    Logo: 'soulgraphy.png',
    Langs: [
      {
        Id: LangID[7],
        Percentage: 100
      }
    ],
    Screenshots: ['a', 'b']
  },
  {
    Name: 'Personal Webpage ;>',
    Desc: descriptions[1],
    Link: 's',
    Code: 'doce',
    Created: new Date(202220, 11, 7),
    Logo: 'soulgraphy.png',
    Langs: [
      {
        Id: LangID[6],
        Percentage: 80
      },
      {
        Id: LangID[5],
        Percentage: 20
      },
      {
        Id: LangID[9],
        Percentage: 100
      }
    ],
    Screenshots: ['a', 'b']
  }
]
