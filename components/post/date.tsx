import { parseISO, format } from "date-fns";

export function DateID({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "yyLLdd")}</time>;
}
