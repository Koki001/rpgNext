import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface GameState {
  encounter: boolean;
  playerTurn: boolean;
}

const initialState: GameState = {
  encounter: false,
  playerTurn: true,
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    startEncounter: (state) => {
      state.encounter = true;
    },
    endEncounter: (state) => {
      state.encounter = false;
    },
    completeTurn: (state) => {
      state.playerTurn = !state.playerTurn;
    },
  },
});

export const { startEncounter, endEncounter, completeTurn } =
  progressSlice.actions;
export const getProgress = (state: RootState) => state;
export default progressSlice.reducer;
