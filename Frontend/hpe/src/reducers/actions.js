import { ACTION } from "./reducerConst";

export const showError = (payload) => (dispatch) => {
  dispatch({ type: ACTION.SHOWERROR, payload });
};

export const showMessage = (payload) => (dispatch) => {
  dispatch({ type: ACTION.SHOWMESSAGE, payload });
};