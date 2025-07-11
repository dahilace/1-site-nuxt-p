// src/types.ts

enum Weekday {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thusday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7
}

export type Marks = '1' | '2' | '3' | '4' | '5'

export type Theme = 'light' | 'dark' | 'system'

export type Img = {
  imgUrl: string
}
export type ImgInfo = Img & {
  title: string
}

export type CardInfo = {
  title: string
  desc?: string
  imgUrl: string
  router: string
}

export type PersonSocials = {
  vk: string
  inst: string
  fb: string
  ytb: string
  twttr: string
}

export type PersonContacts = {
  email: string
  phone: string
  wtsapp: string
  tg: string
}

export type PersonInfo = {
  id: string
  name: string
  desc: string[]
  imgUrl: string
  quote?: string
}

export type CoachInfo = PersonInfo & {
  gyms?: string[] // ids
  specs: string[]
  videoUrl?: string
  socials?: Partial<PersonSocials>
  contacts?: Partial<PersonContacts>
}

export type TrainingClass = {
  id: string
  name: string
  description: string
}

export type GymInfo = {
  id: string
  name: string
  phone: string
  address: string
  coordinates: number[]
  imgUrl: string
  time: string
  properties?: {
    desc: string[]
    schedule: string[]
    gallery: string[]
    coaches: string[]
  }
}

export type Schedule = {
  id: string
  gym: GymInfo
  coach: CoachInfo
  class: TrainingClass
  weekday: Weekday
  startTime: Date
  endTime: Date
}

export type NavItem = {
  title: string,
  path: string,
  complex?: boolean,
  dropdown?: NavItem[]
}

export type CardTicket = {
  title: string
  desc: string
  additional: { title: string } | null
  price: string
  time: string
  isMarked: boolean
}

export type CardNews = {
  tag: string
  title: string
  brief?: string
  desc: string
  date: {
    base: string
    formatIso: () => string
  },
  imgUrl: string
  id: number
}
