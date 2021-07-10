export const nextClick = (current) => {
  return {
    type: "NEXT_QUESTION",
    payload: current,
  };
};
export const prevClick = {
  type: "PREV_QUESTION",
};
