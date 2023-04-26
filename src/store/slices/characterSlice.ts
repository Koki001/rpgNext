import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface PlayerState {
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
  attrPoints: number;
}
const initialState: PlayerState = {
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
  attrPoints: 10,
};
// FOR TESTING
// MAGE
// const initialState: PlayerState = {
//   name: "koki",
//   type: "mage",
//   level: 1,
//   experience: 0,
//   strength: 6,
//   dexterity: 8,
//   constitution: 10,
//   intelligence: 16,
//   wisdom: 14,
//   charisma: 6,
//   AC: 5,
//   attack: 4,
//   special: 25,
//   health: 100,
//   power: null,
//   mana: 140,
//   attrPoints: 0,
//   magic: true,
// };
// WARRIOR
// const initialState: PlayerState = {
//   name: "koki",
//   type: "warrior",
//   level: 1,
//   experience: 0,
//   strength: 16,
//   dexterity: 8,
//   constitution: 16,
//   intelligence: 6,
//   wisdom: 10,
//   charisma: 6,
//   AC: 12,
//   attack: 4,
//   special: 25,
//   health: 160,
//   power: 160,
//   mana: null,
//   attrPoints: 0,
//   magic: false,
// };

const characterSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    addPlayer: (state, action: PayloadAction<PlayerState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    addType: (state, action) => {
      state.type = action.payload;
    },
    addName: (state, action) => {
      state.name = action.payload;
    },
    increaseStat: (state, action: PayloadAction<keyof PlayerState>) => {
      const property = action.payload;
      if (property === "constitution") {
        state.constitution++;
        state.attrPoints--;
        state.health = state.constitution * 10;
      } else if (property === "strength" && state.magic === false) {
        state.strength++;
        state.attrPoints--;
        state.power = state.strength * 10;
      } else if (property === "intelligence" && state.magic === true) {
        state.intelligence++;
        state.attrPoints--;
        state.mana = state.intelligence * 10;
      } else {
        state[property]++;
        if (state.attrPoints > 0) {
          state.attrPoints--;
        }
      }
    },
    decreaseStat: (state, action: PayloadAction<keyof PlayerState>) => {
      const property = action.payload;
      if (property === "constitution") {
        state.constitution--;
        state.attrPoints++;
        state.health = state.constitution * 10;
      } else if (property === "strength") {
        state.strength--;
        state.attrPoints++;
        state.power = state.strength * 10;
      } else if (property === "intelligence") {
        state.intelligence--;
        state.attrPoints++;
        state.mana = state.intelligence * 10;
      } else {
        state[property]--;
        state.attrPoints++;
      }
    },
  },
});

export const { addPlayer, addType, addName, increaseStat, decreaseStat } =
  characterSlice.actions;
export const getPlayer = (state: RootState) => state;
export default characterSlice.reducer;
