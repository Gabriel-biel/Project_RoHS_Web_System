export default function (): number {
  const minNumber = 111111
  const maxNumber = 999999

  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}
