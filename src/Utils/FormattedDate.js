import { format } from "date-fns";

  export const formattedDate = (date) => {

    if(!date){
        return '-'
    }
    const isoDate = date;
    const newDate = format(new Date(isoDate), "dd/MMM/yyyy, h:mm aaa");

    return newDate;
  };