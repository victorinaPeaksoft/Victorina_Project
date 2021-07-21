export const SET_TEMPERAMENT = "SET_TEMPERAMENT";
export const NEXT_QUESTION_ONE = "NEXT_QUESTION_ONE";
export const ON_CHECK = "ON_CHECK";

export const set_temperament = () => ({
  type: SET_TEMPERAMENT ,
});

export const nextClickOne = () => ({
  type: NEXT_QUESTION_ONE,
});

export const onCheck = (key) => ({
  type: ON_CHECK,
  payload: Number(key),
});
