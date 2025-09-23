export default function FormattedDate(props) {
  const timeZoneMap = {
    Tokyo: "Asia/Tokyo",
    Sydney: "Australia/Sydney",
    London: "Europe/London",
    NewYork: "America/New_York",
    Yorkton: "America/Regina",
    Paris: "Europe/Paris",
    Delhi: "Asia/Kolkata",
    Vancouver: "America/Vancouver",
    Toronto: "America/Toronto",
    Moscow: "Europe/Moscow",
  };

  const timeZone = timeZoneMap[props.city] || "UTC";

  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: timeZone,
  });

  return <div>{formatter.format(props.date)}</div>;
}
