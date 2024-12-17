export function convertDate(date: string): string {
  const newDate = new Date(date)

  const day = newDate.getUTCDate().toString().padStart(2, '0')
  const month = (newDate.getUTCMonth() + 1).toString().padStart(2, '0')

  return `${day}/${month}`
}
