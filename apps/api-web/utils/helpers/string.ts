import { TrackProps } from "@/utils/types/TrackProps";

export function formatTrackInfo(info: TrackProps) {
  const track = {
    name: info.name,
    artist: info.artists[0].name,
  };

  return `${track.name} - ${track.artist}`;
}
