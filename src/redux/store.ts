import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "@/features/country/countrySlice";
import pppSliceReducer from "@/features/ppp/pppSlice";

export const store = configureStore({
  reducer: {
    countriesReducer,
    pppSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
