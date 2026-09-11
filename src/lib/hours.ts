import { OPENING_HOURS } from '../config/site'

export function isOpenNow(date: Date = new Date()): boolean {
  const day = OPENING_HOURS[date.getDay()]
  if (!day.open || !day.close) return false

  const [openH, openM] = day.open.split(':').map(Number)
  const [closeH, closeM] = day.close.split(':').map(Number)

  const minutesNow = date.getHours() * 60 + date.getMinutes()
  const openMinutes = openH * 60 + openM
  const closeMinutes = closeH * 60 + closeM

  return minutesNow >= openMinutes && minutesNow < closeMinutes
}

export function todayLabel(date: Date = new Date()): string {
  return OPENING_HOURS[date.getDay()].label
}
