import generate from 'nanoid/generate'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' // for valid css selector

export function genId (length = 10) {
  return generate(alphabet, length)
}
