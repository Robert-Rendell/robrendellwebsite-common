export type ImageUrl = string;

export type HomePageOriginalImg = Record<ImageUrl, ImageUrl>;

export interface HomePageResponse {
  travelImages: ImageUrl[];
  originals: HomePageOriginalImg[];
}
