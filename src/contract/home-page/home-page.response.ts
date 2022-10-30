export type ImageUrl = string;

export type HomePageOriginalImgsMap = Record<ImageUrl, ImageUrl>;

export interface HomePageResponse {
  travelImages: ImageUrl[];
  originals: HomePageOriginalImgsMap;
}
