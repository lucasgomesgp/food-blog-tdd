import dayjs from 'dayjs'

export function TimeToRead({
  date,
  timeInMinutes,
}: { date: string; timeInMinutes: number }) {
  return (
    <div className="flex font-merriweather text-sm text-gray-time self-start">
      <span>{dayjs(date).format('MMM D[,] YYYY')}</span>
      <span>&bull;</span>
      <span>{`${timeInMinutes} minutes read`}</span>
    </div>
  )
}
