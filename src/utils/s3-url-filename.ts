export const getImageFilename = (s3ImageUrl: string) =>
  s3ImageUrl.split("?")[0].split("/").slice(-1)[0];
