export const initialState: {
  user: null | {
    id: string;
    uid: string;
    name: string;
    username: string;
    email: string;
    bio: string;
    profileImage: string;
    coverImage: string;
  };
} = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
