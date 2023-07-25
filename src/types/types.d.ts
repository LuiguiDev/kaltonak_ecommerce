export type theme_type = 'dark' | 'light'

export interface CourseImageType {
  src: string,
  alt: string
}

export interface AboutCourseTypes {
  image: CourseImageType,
  title: string,
  description: string
  teacher: string
  schedules: string
  startingDate: string
  sesions: number
  cost: number
}