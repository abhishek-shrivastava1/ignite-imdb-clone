// Utility
const createUrl = (url) => {
  return `${process.env.REACT_APP_BASE_URL}${url}`;
};

export const GET_ALL_GAMES = (from, to, orderBy, pageSize) => {
  return createUrl(
    `games?dates=${from},${to}&ordering=${orderBy}&page_size=${pageSize}`
  );
};

export const GET_GAME_DETAILS_BY_ID = (id) => {
  return createUrl(`games/${id}`);
};

export const GET_GAME_SCREENSHOTS_BY_ID = (id) => {
  return createUrl(`games/${id}/screenshots`);
};

export const SEARCH_GAMES = (searchParam) => {
  return createUrl(`games?search=${searchParam}&page_size=9`);
};
