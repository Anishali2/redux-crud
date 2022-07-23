const initialState = {
  isLoggedIn: false,
  user: "",
};

export const user = (state = initialState, action) => {
  // action is an object
  // action = {
  //     type: "STRING",
  //     payload: {
  //         login_state: true,
  //     }
  // }
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isLoggedIn: action.payload.loginState,
        user: action.payload.userName,
      };
      case "LOG_OUT":
        return {
          ...state,
          isLoggedIn: false,
          user: "",
        };

        case "EDIT_USER":
          return {
            ...state,
            user: action.payload.editUser,
          };
  
    default:
      return state;
  }
};
