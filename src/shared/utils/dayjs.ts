import dayjs, { Dayjs } from 'dayjs'

const MAIN_FORMAT = 'DD.MM.YYYY'
export const formatDate = (date: Dayjs | Date | string) => {
  return dayjs(date).format(MAIN_FORMAT)
}
