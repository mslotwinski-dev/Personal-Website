import { Project } from '../data/data'
import { LangID } from './langs'

const descriptions: string[] = [
  'AnalyseMe is a platform with many psychological, political and philosophical tests. Like in any other quiz, your answers will be compared to the maximum possible for each value at the end of the quiz, thus giving you a percentage. Some of the tests are renewed versions of the ones you already know, others are completely new tests. Answer honestly!',
  'Something like google keep',
  'Soulgraphy is a social project whose main task is to enable users to get to know themselves and other people. To this end, the web application offers all interested parties a platform for publishing articles, discussions and taking tests to help determine your worldview.',
  'Unia Wolności (The Freedom Union) is a fictional political party whose program and assumptions were entirely written by me using the knowledge of economics, sociology and the right to improve the well-being of citizens. The program is available only in Polish',
  'You are here ;>'
]

export const projects: Project[] = [
  {
    Name: 'AnalyseMe',
    Desc: descriptions[0],
    Link: 's',
    Code: 'doce',
    Created: new Date(202220, 11, 7),
    Logo: 'analyseme.png',
    Langs: [
      {
        Id: LangID[4],
        Percentage: 85
      },
      {
        Id: LangID[1],
        Percentage: 10
      },
      {
        Id: LangID[0],
        Percentage: 5
      }
    ],
    Screenshots: ['analyseme1.png', 'analyseme2.png', 'analyseme3.png']
  },
  {
    Name: 'Note Keeper',
    Desc: descriptions[1],
    Link: 's',
    Code: 'doce',
    Created: new Date(202220, 11, 7),
    Logo: 'notekeeper.png',
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
    Screenshots: ['analyseme1.png', 'analyseme2.png', 'analyseme3.png']
  },
  {
    Name: 'Soulgraphy',
    Desc: descriptions[2],
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
    Screenshots: ['soulgraphy1.png', 'soulgraphy2.png', 'soulgraphy3.png']
  },
  {
    Name: 'Unia Wolności',
    Desc: descriptions[3],
    Link: 's',
    Code: 'doce',
    Created: new Date(202220, 11, 7),
    Logo: 'uniawolnosci.png',
    Langs: [
      {
        Id: LangID[7],
        Percentage: 70
      },
      {
        Id: LangID[2],
        Percentage: 30
      }
    ],
    Screenshots: ['analyseme1.png', 'analyseme2.png', 'analyseme3.png']
  },
  {
    Name: 'Personal Webpage',
    Desc: descriptions[4],
    Link: 's',
    Code: 'doce',
    Created: new Date(202220, 11, 7),
    Logo: 'personal.png',
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
    Screenshots: []
  }
]
