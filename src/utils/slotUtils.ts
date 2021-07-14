import { AfternoonSlots, EveningSlots, MorningSlots } from "./constants"

export const isMorningSlot = (hr: number): boolean => {
  return MorningSlots.includes(hr)
}

export const isAfternoonSlot = (hr: number): boolean => {
  return AfternoonSlots.includes(hr)
}

export const isEveningSlot = (hr: number): boolean => {
  return EveningSlots.includes(hr)
}