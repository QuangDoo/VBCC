/**
 * Generates a random string of the specified length using uppercase and lowercase letters and numbers.
 *
 * @param {number} length - The length of the string to be generated.
 * @return {string} The generated random string.
 */
export function generateRandomString(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    result += characters[randomIndex]
  }
  return result
}
