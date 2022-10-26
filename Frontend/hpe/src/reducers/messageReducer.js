import { ACTION, STATE } from "./reducerConst";

const initialState = {
  [STATE.ERR_MSG]: "",
  [STATE.IS_ERROR]: false,
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.SHOWERROR:
      return {
        ...state,
        [STATE.ERR_MSG]: action.payload,
        [STATE.IS_ERROR]: true,
      };
    case ACTION.SHOWMESSAGE:
      return {
        ...state,
        [STATE.ERR_MSG]: action.payload,
        [STATE.IS_ERROR]: false,
      };
    default:
      return state;
  }
};

export default messageReducer;