import { formatDateToEnGB } from '@/utils/helpers/string'
import { PostProps } from '@/utils/types/PostProps'

export function formatTrackInfo(info: any) { // TODO: review typing
  const track = {
    name: info.item.name,
    artist: info.item.artists[0].name
  }

  return `${track.name} - ${track.artist}`
}

export const formatNotesData = (data: PostProps) => {
  return Object.values(data).map(item => ({
    title: item.title,
    slug: item.slug?.current,
    image: item.thumbnail,
    updatedAt: formatDateToEnGB(item._updatedAt),
    excerpt: item.excerpt,
    content: item.content,
    topics: item.topics
  }));
}
