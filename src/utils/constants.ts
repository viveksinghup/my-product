import { Slots } from "../shared/interfaces";

export const MorningSlots = [5, 6, 7, 8, 9, 10, 11]
export const AfternoonSlots = [12, 13, 14, 15, 16, 17]
export const EveningSlots = [18, 19, 20, 21, 22, 23, 24]

export const timeSlotMapping : { [key in Slots]: number[]} = {
  [Slots.morning]: MorningSlots,
  [Slots.afternoon]: AfternoonSlots,
  [Slots.evening]: EveningSlots
}

export const yyyyMMdd = 'yyyy-MM-dd';
