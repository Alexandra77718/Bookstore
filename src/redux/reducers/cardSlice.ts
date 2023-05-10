import { CardType } from "./../../utils/@globalTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type CardState = {
  likedCards: CardType[];
  savedPosts: CardType[];
  postsList: CardType[];
  singlePost: CardType | null;
};
const initialState: CardState = {
  likedCards: [],
  savedPosts: [],
  postsList: [],
  singlePost: null,
};
const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    getAllPosts: (__, action: PayloadAction<undefined>) => {},
    setAllPosts: (state, action: PayloadAction<CardType[]>) => {
      state.postsList = action.payload;
    },
    getSinglePost: (state, action: PayloadAction<string>) => {},
    setSinglePost: (state, action: PayloadAction<CardType | null>) => {
      state.singlePost = action.payload;
    },
    setStatus: (state, action: PayloadAction<CardType>) => {
      const likedIndex = state.likedCards.findIndex(
        (post) => post.isbn13 === action.payload.isbn13
      );

      if (likedIndex === -1) {
        state.likedCards.push(action.payload);
      } else {
        state.likedCards.splice(likedIndex, 1);
      }
    },
    setSavedPosts: (state, action: PayloadAction<CardType>) => {
      const savedPostsIndex = state.savedPosts.findIndex(
        (post) => post.isbn13 === action.payload.isbn13
      );
      if (savedPostsIndex === -1) {
        state.savedPosts.push(action.payload);
      } else {
        state.savedPosts.splice(savedPostsIndex, 1);
      }
    },
  },
});

export const {
  setStatus,
  setSavedPosts,
  getAllPosts,
  setAllPosts,
  getSinglePost,
  setSinglePost,
} = cardSlice.actions;
export const cardName = cardSlice.name;
export default cardSlice.reducer;
export const CardSelectors = {
  getLikedCards: (state: RootState) => state.card.likedCards,
  getSavedPosts: (state: RootState) => state.card.savedPosts,
  getAllPosts: (state: RootState) => state.card.postsList,
  getSinglePost: (state: RootState) => state.card.singlePost,
};
