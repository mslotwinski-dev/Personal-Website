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

const economics: University = {
  Field: 'Economics',
  Spec: 'Global Economy',
  Degree: Degree.MASTER,
  University: 'University of Warsaw',
  Year: 2028,
  Place: 'Warsaw, Poland'
}

const IVLO: University = {
  Field: 'High School',
  Spec: 'Mathematics • Physics • IT',
  Degree: null,
  University: 'IV Liceum Ogólnokształcące w Rzeszowie',
  Year: 2023,
  Place: 'Rzeszow, Poland'
}

export const degrees: University[] = [
  economics, IVLO
]
