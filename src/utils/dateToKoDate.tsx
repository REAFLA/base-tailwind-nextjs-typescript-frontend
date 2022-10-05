export const handleDateToKoDate = (date: Date) => {
  let temp
  const milliSeconds = +new Date() - +new Date(date)
  const seconds = milliSeconds / 1000
  const minutes = seconds / 60
  const hours = minutes / 60
  const days = hours / 24
  const weeks = days / 7
  const months = days / 30
  const years = days / 365

  switch (true) {
    case seconds < 60:
      temp = `방금 전`
      break
    case minutes < 60:
      temp = `${Math.floor(minutes)}분 전`
      break
    case hours < 24:
      temp = `${Math.floor(hours)}시간 전`
      break
    case days < 7:
      temp = `${Math.floor(days)}일 전`
      break
    case weeks < 5:
      temp = `${Math.floor(weeks)}주 전`
      break
    case months < 12:
      temp = `${Math.floor(months)}개월 전`
      break
    default:
      temp = `${Math.floor(years)}년 전`
      break
  }

  return temp
}
