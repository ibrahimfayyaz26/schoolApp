import dataDummy from "../../data/dummy";
import { FAVOURITE_NEWS } from "../action/NewsAction";

const initialState = {
  News: [...dataDummy],
  favourite: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVOURITE_NEWS:
      const ob = state.News.find((item) => item.id == action.payload);
      const fav = state.favourite.findIndex((item) => item.id == ob.id);
      if (fav >= 0) {
        const favourite = [...state.favourite];
        favourite.splice(fav, 1);
        return {
          ...state,
          favourite: favourite,
        };
      } else {
        return {
          News: state.News,
          favourite: state.favourite.concat(ob),
        };
      }
  }
  return state;
};

export default reducer;
