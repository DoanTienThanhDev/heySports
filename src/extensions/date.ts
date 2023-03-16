import { format } from 'date-fns';

const FORMAT = {
  FORMAT_DISPLAY: "dd-MM-yyyy"
}

const formatDateDisplay = (date: string | Date): string => {
  return format(new Date(date), FORMAT.FORMAT_DISPLAY)
}

const DATE = {
  FORMAT,
  formatDateDisplay
}

export default DATE