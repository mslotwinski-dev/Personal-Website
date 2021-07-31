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
    Field: 'High School',
    Spec: 'Mathematics • Physics • IT',
    Degree: null,
    University: 'IV Liceum Ogólnokształcące w Rzeszowie',
    Year: 2023,
    Place: 'Rzeszow, Poland'
  }
]
