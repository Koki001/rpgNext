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
  attack: number;
  special: number;
  health: number;
  mana: number | null;
  power: number | null;
  magic: boolean;
};
const orc: Stats = {
  name: "Orc",
  type: "melee",
  level: 1,
  experience: 0,
  strength: 14,
  dexterity: 7,
  constitution: 10,
  intelligence: 5,
  wisdom: 6,
  charisma: 10,
  AC: 10,
  attack: 10,
  special: 20,
  health: 100,
  power: 140,
  mana: null,
  magic: false,
};
const enemyStats = {
  orc,
};

export default enemyStats;
