import { parseISO, format } from "date-fns";
import { Text } from "@chakra-ui/react";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <Text as="time" dateTime={dateString}>
      {format(date, "LLLL	d, yyyy")}
    </Text>
  );
}
