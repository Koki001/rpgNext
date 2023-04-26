type Stats = {
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
  attack: number | null;
  special: number | null;
  health: number | null;
  mana: number | null;
  power: number | null;
  magic: boolean;
};
const warrior: Stats = {
  name: "",
  type: "warrior",
  level: 1,
  experience: 0,
  strength: 14,
  dexterity: 7,
  constitution: 10,
  intelligence: 5,
  wisdom: 6,
  charisma: 10,
  AC: 10,
  attack: 28,
  special: 32,
  health: 100,
  power: 140,
  mana: null,
  magic: false,
};
const mage: Stats = {
  name: "",
  type: "mage",
  level: 1,
  experience: 0,
  strength: 6,
  dexterity: 6,
  constitution: 8,
  intelligence: 14,
  wisdom: 10,
  charisma: 6,
  AC: 5,
  attack: 28,
  special: 32,
  health: 80,
  power: null,
  mana: 140,
  magic: true,
};
const rogue: Stats = {
  name: "",
  type: "rogue",
  level: 1,
  experience: 0,
  strength: 10,
  dexterity: 14,
  constitution: 8,
  intelligence: 4,
  wisdom: 6,
  charisma: 8,
  AC: 7,
  attack: 28,
  special: 32,
  health: 80,
  power: 100,
  mana: null,
  magic: false,
};
const cleric: Stats = {
  name: "",
  type: "cleric",
  level: 1,
  experience: 0,
  strength: 8,
  dexterity: 7,
  constitution: 9,
  intelligence: 10,
  wisdom: 10,
  charisma: 6,
  AC: 12,
  attack: 20,
  special: 30,
  health: 90,
  power: null,
  mana: 100,
  magic: true,
};
const paladin: Stats = {
  name: "",
  type: "paladin",
  level: 1,
  experience: 0,
  strength: 12,
  dexterity: 4,
  constitution: 11,
  intelligence: 6,
  wisdom: 10,
  charisma: 7,
  AC: 14,
  attack: 24,
  special: 36,
  health: 110,
  power: null,
  mana: 60,
  magic: true,
};
const ranger: Stats = {
  name: "",
  type: "ranger",
  level: 1,
  experience: 0,
  strength: 8,
  dexterity: 14,
  constitution: 10,
  intelligence: 4,
  wisdom: 6,
  charisma: 8,
  AC: 8,
  attack: 28,
  special: 32,
  health: 100,
  power: 80,
  mana: null,
  magic: false,
};
const necromancer: Stats = {
  name: "",
  type: "necromancer",
  level: 1,
  experience: 0,
  strength: 4,
  dexterity: 5,
  constitution: 8,
  intelligence: 14,
  wisdom: 14,
  charisma: 5,
  AC: 5,
  attack: 28,
  special: 32,
  health: 80,
  power: null,
  mana: 140,
  magic: true,
};
const defaultStats = {
  warrior,
  mage,
  rogue,
  cleric,
  paladin,
  ranger,
  necromancer,
};
export { defaultStats };
