export function formatDateToEnGB(date: string) {
  const formattedDate = new Date(date).toLocaleString('en-GB', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    timeZone: 'UTC'
  })

  return formattedDate
}