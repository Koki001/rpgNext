import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "./slices/characterSlice";
import progressSlice from "./slices/progressSlice";
import enemySlice from "./slices/enemySlice";

export const store = configureStore({
  reducer: {
    player: characterSlice,
    enemy: enemySlice,
    progress: progressSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
