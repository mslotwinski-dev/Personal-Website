import { Project } from '../types/interfaces'
import { LangID } from './langs'

const descriptions: string[] = [
  'AnalyseMe is a platform with many psychological, political and philosophical tests. Like in any other quiz, your answers will be compared to the maximum possible for each value at the end of the quiz, thus giving you a percentage. Some of the tests are renewed versions of the ones you already know, others are completely new tests. Answer honestly!',
  'Something like google keep',
  'Soulgraphy is a social project whose main task is to enable users to get to know themselves and other people. To this end, the web application offers all interested parties a platform for publishing articles, discussions and taking tests to help determine your worldview.',
  'Unia Wolności (The Freedom Union) is a fictional political party whose program and assumptions were entirely written by me using the knowledge of economics, sociology and the right to improve the well-being of citizens. The program is available only in Polish',
  'You are here ;>',
]

export const projects: Project[] = [
  {
    Name: 'AnalyseMe',
    Desc: descriptions[0],
    Category: 'Quizzes',
    Link: {
      Content: 'analyseme',
      Absolute: false,
    },
    Code: 'Mateusz-Slotwinski/AnalyseMe',
    Created: 'VI 2020',
    Logo: 'analyseme.png',
    Langs: [
      {
        Id: LangID[5],
        Percentage: 85,
      },
      {
        Id: LangID[2],
        Percentage: 10,
      },
      {
        Id: LangID[1],
        Percentage: 5,
      },
    ],
    Screenshots: ['analyseme1.png', 'analyseme2.png', 'analyseme3.png'],
  },
  {
    Name: 'Soulgraphy',
    Desc: descriptions[2],
    Category: 'Quizzes',
    Link: {
      Content: 'soulgraphy.me',
      Absolute: true,
    },
    Code: '',
    Created: 'VI 2020',
    Logo: 'soulgraphy.png',
    Langs: [
      {
        Id: LangID[1],
        Percentage: 65,
      },
      {
        Id: LangID[2],
        Percentage: 20,
      },
      {
        Id: LangID[5],
        Percentage: 10,
      },
      {
        Id: LangID[18],
        Percentage: 5,
      },
    ],
    Screenshots: ['soulgraphy1.png', 'soulgraphy2.png', 'soulgraphy3.png'],
  },
  {
    Name: 'Personal Webpage',
    Desc: descriptions[4],
    Category: 'Personal',
    Link: {
      Content: 'mslotwinski.eu',
      Absolute: true,
    },
    Code: 'Mateusz-Slotwinski/Personal-Website',
    Created: 'VI 2020',
    Logo: 'personal.png',
    Langs: [
      {
        Id: LangID[7],
        Percentage: 75,
      },
      {
        Id: LangID[6],
        Percentage: 24,
      },
      {
        Id: LangID[0],
        Percentage: 1,
      },
    ],
    Screenshots: [],
  },
  {
    Name: 'Note Keeper',
    Desc: descriptions[1],
    Category: 'Minor',
    Link: {
      Content: '',
      Absolute: false,
    },
    Code: 'paprotka2137/NotepadAPP',
    Created: 'VI 2020',
    Logo: 'notekeeper.png',
    Langs: [
      {
        Id: LangID[11],
        Percentage: 50,
      },
      {
        Id: LangID[8],
        Percentage: 40,
      },
      {
        Id: LangID[21],
        Percentage: 10,
      },
    ],
    Screenshots: [],
  },
  {
    Name: 'CubeCalc',
    Desc: 'Simple program written in Go, which solves linear, square or even cube equalitions',
    Category: 'Minor',
    Link: {
      Content: '',
      Absolute: false,
    },
    Code: 'Mateusz-Slotwinski/CubeCalc',
    Created: 'VI 2020',
    Logo: 'cubecalc.png',
    Langs: [
      {
        Id: LangID[12],
        Percentage: 100,
      },
    ],
    Screenshots: [],
  },
  {
    Name: 'Calculator',
    Desc: 'Calculator, but with nice design c:',
    Category: 'Minor',
    Link: {
      Content: 'calc',
      Absolute: false,
    },
    Code: 'Mateusz-Slotwinski/Calculator',
    Created: 'VI 2020',
    Logo: 'calculator.png',
    Langs: [
      {
        Id: LangID[8],
        Percentage: 87,
      },
      {
        Id: LangID[3],
        Percentage: 12,
      },
      {
        Id: LangID[0],
        Percentage: 1,
      },
    ],
    Screenshots: [],
  },
  {
    Name: 'Unia Wolności',
    Desc: descriptions[3],
    Category: 'Minor',
    Link: {
      Content: 'uniawolnosci',
      Absolute: false,
    },
    Code: 'Mateusz-Slotwinski/Unia-Wolnosci',
    Created: 'VI 2020',
    Logo: 'uniawolnosci.png',
    Langs: [
      {
        Id: LangID[1],
        Percentage: 50,
      },
      {
        Id: LangID[2],
        Percentage: 50,
      },
    ],
    Screenshots: [],
  },
  {
    Name: 'eScience',
    Desc: 'Simple website with basic formulas and equalitons',
    Category: 'Non Profit',
    Link: {
      Content: 'escience',
      Absolute: false,
    },
    Code: 'Mateusz-Slotwinski/eScience',
    Created: 'VI 2020',
    Logo: 'escience.png',
    Langs: [
      {
        Id: LangID[7],
        Percentage: 85,
      },
      {
        Id: LangID[6],
        Percentage: 15,
      },
    ],
    Screenshots: [],
  },
  {
    Name: 'Cloudy',
    Desc: 'Simple file storage app',
    Category: 'Personal',
    Link: {
      Content: 'cloudy',
      Absolute: false,
    },
    Code: 'Mateusz-Slotwinski/Cloudy',
    Created: 'VI 2020',
    Logo: 'cloudy.png',
    Langs: [
      {
        Id: LangID[7],
        Percentage: 50,
      },
      {
        Id: LangID[6],
        Percentage: 20,
      },
      {
        Id: LangID[11],
        Percentage: 25,
      },
      {
        Id: LangID[3],
        Percentage: 4,
      },
      {
        Id: LangID[0],
        Percentage: 1,
      },
    ],
    Screenshots: [],
  },
]
