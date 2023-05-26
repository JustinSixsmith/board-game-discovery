export interface Image {
  id: string;
  medium: string;
  game: {
    id: string;
  };
}

export interface ImagesResponse {
  images: Image[];
}
