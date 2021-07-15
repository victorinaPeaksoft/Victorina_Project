export const nextClick = (current) => {
  return {
    type: "NEXT_QUESTION",
    current,
  };
};
export const prevClick = {
  type: "PREV_QUESTION",
};
