enum Degree {
    BACHELOR = 'Bachelor',
    MASTER = 'Master',
    DOCTOR = 'Doctor'
}

interface University {
  Field: string,
  Spec: string,
  Degree: Degree | null,
  University: string,
  Year: number
  Place: string
}

export const degrees: University[] = [
  {
    Field: 'Test field',
    Spec: 'Specialization',
    Degree: Degree.MASTER,
    University: 'University name',
    Year: 2137,
    Place: 'Warsaw, Poland'
  },
  {
    Field: 'High School',
    Spec: 'Mathematics • Physics • IT',
    Degree: null,
    University: 'IV Liceum Ogólnokształcące w Rzeszowie',
    Year: 2023,
    Place: 'Rzeszow, Poland'
  }
]

// ---SWEET DREAMS---
// const economics: University = {
//   Field: 'Economics',
//   Spec: 'Global Economy',
//   Degree: Degree.MASTER,
//   University: 'University of Warsaw',
//   Year: 2028,
//   Place: 'Warsaw, Poland'
// }
// const math: University = {
//   Field: 'Mathematics',
//   Spec: 'Mathematical Analysis',
//   Degree: Degree.MASTER,
//   University: 'University of Warsaw',
//   Year: 2028,
//   Place: 'Warsaw, Poland'
// }
// const physics: University = {
//   Field: 'Physics',
//   Spec: 'Quantum physics',
//   Degree: Degree.MASTER,
//   University: 'University of Warsaw',
//   Year: 2028,
//   Place: 'Warsaw, Poland'
// }
// const it: University = {
//   Field: 'IT',
//   Spec: 'Web Debelopment',
//   Degree: Degree.MASTER,
//   University: 'University of Warsaw',
//   Year: 2028,
//   Place: 'Warsaw, Poland'
// }
// const mechatronics: University = {
//   Field: 'Mechatronics',
//   Spec: 'Idk',
//   Degree: Degree.MASTER,
//   University: 'University of Warsaw',
//   Year: 2028,
//   Place: 'Warsaw, Poland'
// }
// const biology: University = {
//   Field: 'Biology',
//   Spec: 'Idk',
//   Degree: Degree.MASTER,
//   University: 'University of Warsaw',
//   Year: 2028,
//   Place: 'Warsaw, Poland'
// }
