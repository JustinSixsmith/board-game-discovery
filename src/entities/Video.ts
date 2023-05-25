export interface Video {
  id: string;
  url: string;
  title: string;
  channel_name: string;
  thumb_url: string;
  image_url: string;
  published_date: string;
  game: {
    id: string;
  };
}

export interface VideosResponse {
  videos: Video[];
}
