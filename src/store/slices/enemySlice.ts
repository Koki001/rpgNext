import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface EnemyState {
  name: string;
  type: string;
  level: number;
  experience: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  AC: number;
  attack: number;
  special: number;
  health: number;
  mana: number | null;
  power: number | null;
  magic: boolean;
}
const initialState: EnemyState = {
  name: "",
  type: "",
  level: 0,
  experience: 0,
  strength: 0,
  dexterity: 0,
  constitution: 0,
  intelligence: 0,
  wisdom: 0,
  charisma: 0,
  AC: 0,
  attack: 0,
  special: 0,
  health: 0,
  mana: 0,
  power: 0,
  magic: false,
};

const enemySlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    addEnemy: (state, action: PayloadAction<EnemyState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    hitEnemy: (state, action: PayloadAction<number>) => {
      if (state.health >= 20) {
        state.health = state.health - action.payload;
      }
    },
  },
});

export const { addEnemy, hitEnemy } = enemySlice.actions;
export const getEnemy = (state: RootState) => state;
export default enemySlice.reducer;
