export const getReadableTime = (date) => {
  const dateObj = new Date(date)
  const [day, month, year] = [dateObj.getDate(), dateObj.getMonth(), dateObj.getFullYear()]

  return `${day}.${month < 10 ? `0${month}` : month}.${year}`
}
