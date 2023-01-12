import { format } from 'date-fns';

export const FORMAT_TO_TIMESTAMP = (date: Date) => {
  return format(date, "yyyy-MM-dd'T'HH:mm:ss");
};
