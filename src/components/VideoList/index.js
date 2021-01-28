import { useEffect, useState } from "react";
import { search } from "../../apis/search";
import VideoItem from "../VideoItem";
import "./index.css";

function VideoList({ searchText, covid }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const queryPayload = {
          covid,
          prefix: covid ? "COVID-19" : "COVID",
          searchText,
        };
        const response = await search(queryPayload);
        const data = await response.json();
        const sorted = sortVideoByTitle(data.items);
        setItems(sorted);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, [searchText, covid]);

  const sortVideoByTitle = (items = []) => {
    if (covid) {
      const podcast = "COVID-19 Vaccine Podcast";
      const podcastOnly = items.filter((item) => {
        const {
          snippet: { title },
        } = item;
        return title.includes(podcast);
      });
      const exceptPodcast = items.filter((item) => {
        const {
          snippet: { title },
        } = item;
        return !title.includes(podcast);
      });

      return [...podcastOnly, ...exceptPodcast];
    }

    return items;
  };

  return (
    <div className="video-list">
      {loading && <div className="video-list--loading">Loading Videos...</div>}
      {!loading &&
        !error &&
        items.map((item, index) => {
          return <VideoItem key={index} detail={item} />;
        })}
      {!loading && !error && items.length === 0 && (
        <div className="video-list--no-result">
          No Videos found. Please try with different title.
        </div>
      )}
      {!loading && error && (
        <div className="video-list--error">
          Unable to process your request. Please try again.
        </div>
      )}
    </div>
  );
}

export default VideoList;
