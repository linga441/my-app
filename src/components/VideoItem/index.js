import { YOUTUBE_URL } from "../../constants/api-config";
import { dateUtcToLocal } from "../../utils/date-util";
import "./index.css";

function VideoItem({ detail }) {
  const {
    id: { videoId },
    snippet: { publishedAt, title, description },
  } = detail;
  const url = `${YOUTUBE_URL}${videoId}`;

  return (
    <div className="video-item">
      <div className="video-item-player">
        <iframe
          className="video-item-player-frame"
          width="200"
          height="100"
          title={title}
          src={url}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-item-detail">
        <div className="video-item-title">{title}</div>
        <div className="video-item-description">{description}</div>
        <div className="video-item-published--date">
          Published on: {dateUtcToLocal(publishedAt)}
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
