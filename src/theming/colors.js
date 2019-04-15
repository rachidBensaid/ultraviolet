import { thd } from '@smooth-ui/core-em'

// Base colors
export const white = thd('white', '#fff')
export const gray50 = thd('gray50', '#fafafb')
export const gray100 = thd('gray100', '#f6f5f7')
export const gray200 = thd('gray200', '#eeeeff')
export const gray300 = thd('gray300', '#dce1eb')
export const gray350 = thd('gray350', '#d4dae7')
export const gray550 = thd('gray550', '#b2b6c3')
export const gray700 = thd('gray700', '#4a4f62')
export const gray950 = thd('gray950', '#151a2d')
export const black = thd('black', '#000')

export const ngray300 = thd('ngray300', '#dbdbdf')

export const violet = thd('violet', '#4f0599')
export const green = thd('green', '#45d6b5')
export const red = thd('red', '#ef5774')
export const orange = thd('orange', '#ff8c69')

// System colors
export const primary = violet
export const beta = orange
export const success = green
export const warning = red

export const colors = thd('colors', {
  primary,
  beta,
  success,
  warning,
})
