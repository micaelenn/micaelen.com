import { TrackProps } from "@/utils/types/TrackProps";

export function formatTrackInfo(info: TrackProps) {
  const track = {
    name: info.name,
    artist: info.artists[0].name,
  };

  return `${track.name} - ${track.artist}`;
}

export function formatDateToEnGB(date: string) {
  const formattedDate = new Date(date).toLocaleString("en-GB", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  });

  return formattedDate;
}

export function setHardcodedKeyPatterns(keyName: string) {
  return [
    new RegExp(`"${keyName}":\\s*["'\`][a-zA-Z0-9]{20,}["'\`]`),
    new RegExp(`'${keyName}':\\s*["'\`][a-zA-Z0-9]{20,}["'\`]`),
    new RegExp(`\`${keyName}\`:\\s*["'\`][a-zA-Z0-9]{20,}["'\`]`),
  ];
}
