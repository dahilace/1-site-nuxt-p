import type { NavItem } from "~/assets/types/types"
const aboutDropdown = [{ title: 'новости', path: '/news' }, { title: 'обучение боксу', path: '/training' }, { title: 'соревнования', path: '/competitions' }, { title: 'спортсмены', path: '/sportsmen' }, { title: 'отзывы', path: '/comments' }, { title: 'сборы', path: '/bootcamps' }, { title: 'интересное', path: '/wiki' }, { title: 'залы', path: '/gyms' }],
  scheduleDropdown = [{ title: 'тренировки', path: '/schedule' }, { title: 'календарь соревнований', path: '/competitions-calendar' }, { title: 'расписание тренеров', path: '/coach-calendar' }]


export const headerNavData: NavItem[] = [{ title: 'О НАС', path: '/about', dropdown: aboutDropdown }, { title: 'ЦЕНЫ', path: '/prices' }, { title: 'ТРЕНЕРЫ', path: '/coaches' }, { title: 'РАСПИСАНИЕ', path: '/schedule', dropdown: scheduleDropdown }, { title: 'КОНТАКТЫ', path: '/contacts' }]

