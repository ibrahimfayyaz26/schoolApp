export const FAVOURITE_NEWS = "FAVOURITE_NEWS";

export const favourite = (id) => {
  return {
    type: FAVOURITE_NEWS,
    payload: id,
  };
};
