export const getResizedImageUrl = (url, size) => {
  const resizedImageUrl = url.match(/media\/screenshots/)
    ? url.replace("media/screenshots", `media/resize/${size}/-/screenshots`)
    : url.replace("/media/games/", `/media/resize/${size}/-/games/`);
  return resizedImageUrl;
};
