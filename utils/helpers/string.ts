export function formatDateToEnGB(date: string) {
  const formattedDate = new Date(date).toLocaleString('en-GB', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    timeZone: 'UTC'
  })

  return formattedDate // 00 Mon 0000
}

export function getMainPath(pathname: string) {
  return `/${pathname.split('/')[1]}`
}

export function formatPath(pathname: string) {
  const path = pathname.replace(/^\//, "")
  return path.charAt(0).toUpperCase() + path.slice(1)
}

export function replaceDots(text: string) {
  return text.replaceAll(':', ' -');
}