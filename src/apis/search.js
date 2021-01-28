import { API_KEY, CHANNEL_ID, COUNT, DATA_API_BASE_URL } from "../constants/api-config";

export function search(searchConfig) {
  const { covid, prefix, searchText } = searchConfig;
  const q = covid ? `${prefix} ${searchText}` : `${searchText} -${prefix}`; // using - to ignore covid
  const url = `${DATA_API_BASE_URL}/search?key=${API_KEY}&channelId=${CHANNEL_ID}&type=video&part=snippet,id&maxResults=${COUNT}&q=${q}`;
  return fetch(url);
}
