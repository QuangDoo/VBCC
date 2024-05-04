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

/**
 * Formats the given date into a string with hours, minutes, day, month, and year.
 *
 * @param {Date} date - The date to be formatted.
 * @return {string} The formatted date string.
 */
export function formatDate(date: Date) {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();

  return `${hours}:${minutes} ${day}/${month}/${year}`;
}
