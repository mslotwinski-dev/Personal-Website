interface Project {
  Name: string,
  Desc: string,
  Link: string
}

export const projects: Project[] = [
  {
    Name: 'Analyse Me',
    Desc: 'AnalyseMe is a platform with many psychological, political and philosophical tests. Like in any other quiz, your answers will be compared to the maximum possible for each value at the end of the quiz, thus giving you a percentage. Some of the tests are renewed versions of the ones you already know, others are completely new tests. Answer honestly!',
    Link: 'Analyseme.github.io'
  },
  {
    Name: 'Unia Wolności',
    Desc: 'Unia Wolności (The Freedom Union) is a fictional political party whose program and assumptions were entirely written by me using the knowledge of economics, sociology and the right to improve the well-being of citizens. The program is available only in Polish.',
    Link: 'uniawolnosci.github.io'
  },
  {
    Name: 'Soulgraphy',
    Desc: 'Soulgraphy is a social project whose main task is to enable users to get to know themselves and other people. To this end, the web application offers all interested parties a platform for publishing articles, discussions and taking tests to help determine your worldview.',
    Link: 'Soulgraphy.me'
  }
]
