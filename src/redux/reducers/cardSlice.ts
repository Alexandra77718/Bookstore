import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CardType } from "src/utils/@globalTypes";

type CardState = {
    likedCards: CardType[];
    savedPosts: CardType[];
};
const initialState: CardState = {
    likedCards: [],
    savedPosts: [],
};
const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setStatus :(
      state,
      action: PayloadAction<CardType>
    ) => {
    
      const likedIndex = state.likedCards.findIndex(
        (post) => post.isbn13 === action.payload.isbn13
      );

      if (likedIndex === -1) {
        state.likedCards.push(action.payload);
      } else {
        state.likedCards.splice(likedIndex, 1);
      }
      },
      setSavedPosts: (state, action: PayloadAction<{ card: CardType }>) => {
        const { card } = action.payload;
        const savedPostsIndex = state.savedPosts.findIndex(
          (post) => post.isbn13 === card.isbn13
        );
        if (savedPostsIndex === -1) {
          state.savedPosts.push(card);
        } else {
          state.savedPosts.splice(savedPostsIndex, 1);
        }
      }, 
  },
});

export const { setStatus, setSavedPosts } = cardSlice.actions;
export const cardName = cardSlice.name;
export default cardSlice.reducer;
export const CardSelectors = {
    getLikedCards: (state: RootState) => state.card.likedCards,
    getSavedPosts: (state: RootState) => state.card.savedPosts,
};
