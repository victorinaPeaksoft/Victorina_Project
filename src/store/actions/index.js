<<<<<<< HEAD
export const nextClick = (current) => {
  return {
    type: "NEXT_QUESTION",
    current,
  };
};
export const prevClick = {
  type: "PREV_QUESTION",
};
=======
export const SET_VICTORINA = "SET_VICTORINA ";
export const NEXT_VICTORINA = "NEXT_VICTORINA ";
export const PREV_VICTORINA = "PREV_VICTORINA ";
export const FILTER_VICTORINA = "FILTER_VICTORINA";

export const setVictorina = (key) => ({
  type: SET_VICTORINA,
  key,
});

export const nextVictorina = () => ({
  type: NEXT_VICTORINA,
});

export const prevVictorina = () => ({
  type: PREV_VICTORINA,
});

export const filterVictorina = (key) => ({
  type: FILTER_VICTORINA,
  key,
});
>>>>>>> 574a6cc53d78f01c3881cb8aac93b042e89b8633
