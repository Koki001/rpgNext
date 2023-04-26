import styles from "./Create.module.scss";
import Stats from "./Stats";
import "animate.css";
import { useAppSelector } from "@/src/store/hooks";
import classDescription from "@/src/helpers/classDescriptions";
import { Tooltip } from "react-tooltip";
import descriptions from "@/src/helpers/statDescriptions";
import { useRef } from "react";

const Default = () => {
  return (
    <div className={styles.defaultMessage}>
      <h2>Welcome to the land of Medieval Fantasy, adventurer!</h2>
      <p>
        As you step into this world, you are faced with a plethora of choices
        that will shape your destiny. But before you can embark on your journey,
        you must first choose your adventurer class.
      </p>
      <p>
        Are you a brave warrior who fears no foe and wields a mighty sword? Or
        perhaps a cunning rogue who relies on stealth and trickery to overcome
        their enemies? Maybe you are a wise mage who commands the forces of
        magic to bend the elements to your will? Or do you prefer to heal and
        protect your allies as a kind-hearted cleric?
      </p>
    </div>
  );
};
const DisplayClass = () => {
  const stats = useAppSelector((getPlayer) => getPlayer.player);

  return (
    <div className={styles[stats.type]}>
      <div className={styles.description}>
        <p>{classDescription[stats.type as keyof typeof classDescription]}</p>
        <div>
          <p
            data-tooltip-id="desc-tooltip"
            data-tooltip-content={descriptions.attack}
            className={styles.statTooltip}
          >
            attack: {stats.attack + stats.strength}
          </p>
          <p
            data-tooltip-id="desc-tooltip"
            data-tooltip-content={descriptions.special}
            className={styles.statTooltip}
          >
            special: {stats.special}
          </p>
          <p
            data-tooltip-id="desc-tooltip"
            data-tooltip-content={descriptions.dodge}
            className={styles.statTooltip}
          >
            dodge: {stats.dexterity}%
          </p>
          <p
            data-tooltip-id="desc-tooltip"
            data-tooltip-content={descriptions.AC}
            className={styles.statTooltip}
          >
            AC: {stats.AC}
          </p>
        </div>
        <div>
          <div className={styles.health}>
            <p
              data-tooltip-id="desc-tooltip"
              data-tooltip-content={descriptions.health}
            >
              health: {stats.health}
            </p>
          </div>
          {!stats.magic ? (
            <div className={styles.power}>
              <p
                data-tooltip-id="desc-tooltip"
                data-tooltip-content={descriptions.power}
              >
                power: {stats.power}
              </p>
            </div>
          ) : (
            <div className={styles.mana}>
              <p
                data-tooltip-id="desc-tooltip"
                data-tooltip-content={descriptions.mana}
              >
                mana: {stats.mana}
              </p>
            </div>
          )}
        </div>
        <Tooltip
          place="top"
          style={{ width: "450px", opacity: "1", zIndex: "100" }}
          id="desc-tooltip"
        />
      </div>

      <Stats />
    </div>
  );
};
// TEST COMPONENT
// const Warrior = () => {
//   const playerStats = useAppSelector((getPlayer) => getPlayer.player);
//   return (
//     <div className={styles.warrior}>
//       <div className={styles.description}>
//         <p>
//           A master of combat, using their strength and skill with weapons to
//           protect their allies and crush their enemies.
//         </p>
//         <div>
//           <p>attack:</p>
//           <p>special:</p>
//           <p>dodge:</p>
//           <p>AC:</p>
//         </div>
//         <div>
//           <p className={styles.health}>health: {playerStats.health}</p>
//           {!playerStats.magic ? (
//             <p className={styles.power}>power: {playerStats.power}</p>
//           ) : (
//             <p className={styles.mana}>mana: {playerStats.mana}</p>
//           )}
//         </div>
//       </div>
//       <Stats />
//     </div>
//   );
// };
// const Mage = () => {
//   const playerStats = useAppSelector((getPlayer) => getPlayer.player);
//   return (
//     <div className={styles.mage}>
//       <div className={styles.description}>
//         <p>
//           A wielder of magical power, able to cast spells to manipulate reality,
//           summon elemental forces, and bend the fabric of the universe to their
//           will.
//         </p>
//         <div>
//           <p className={styles.health}>health: {playerStats.health}</p>
//           {!playerStats.magic ? (
//             <p className={styles.power}>power: {playerStats.power}</p>
//           ) : (
//             <p className={styles.mana}>mana: {playerStats.mana}</p>
//           )}
//         </div>
//       </div>
//       <Stats />
//     </div>
//   );
// };
// const Rogue = () => {
//   const playerStats = useAppSelector((getPlayer) => getPlayer.player);
//   return (
//     <div className={styles.rogue}>
//       <div className={styles.description}>
//         <p>
//           A stealthy and cunning adventurer, using their speed, agility, and
//           quick thinking to navigate dangerous situations, pick locks, and deal
//           devastating sneak attacks.
//         </p>
//         <div>
//           <p className={styles.health}>health: {playerStats.health}</p>
//           {!playerStats.magic ? (
//             <p className={styles.power}>power: {playerStats.power}</p>
//           ) : (
//             <p className={styles.mana}>mana: {playerStats.mana}</p>
//           )}
//         </div>
//       </div>
//       <Stats />
//     </div>
//   );
// };
// const Cleric = () => {
//   const playerStats = useAppSelector((getPlayer) => getPlayer.player);
//   return (
//     <div className={styles.cleric}>
//       <div className={styles.description}>
//         <p>
//           A holy servant of a deity or higher power, using their faith and
//           divine magic to heal allies, smite foes, and protect against evil
//           forces.
//         </p>
//         <div>
//           <p className={styles.health}>health: {playerStats.health}</p>
//           {!playerStats.magic ? (
//             <p className={styles.power}>power: {playerStats.power}</p>
//           ) : (
//             <p className={styles.mana}>mana: {playerStats.mana}</p>
//           )}
//         </div>
//       </div>
//       <Stats />
//     </div>
//   );
// };
// const Paladin = () => {
//   const playerStats = useAppSelector((getPlayer) => getPlayer.player);
//   return (
//     <div className={styles.paladin}>
//       <div className={styles.description}>
//         <p>
//           A holy knight, combining the martial prowess of a warrior with the
//           divine magic of a cleric, sworn to uphold justice, righteousness, and
//           the greater good.
//         </p>
//         <div>
//           <p className={styles.health}>health: {playerStats.health}</p>
//           {!playerStats.magic ? (
//             <p className={styles.power}>power: {playerStats.power}</p>
//           ) : (
//             <p className={styles.mana}>mana: {playerStats.mana}</p>
//           )}
//         </div>
//       </div>
//       <Stats />
//     </div>
//   );
// };
// const Ranger = () => {
//   const playerStats = useAppSelector((getPlayer) => getPlayer.player);
//   return (
//     <div className={styles.ranger}>
//       <div className={styles.description}>
//         <p>
//           A skilled tracker and hunter, using their mastery of bows, traps, and
//           survival techniques to navigate the wilderness, hunt dangerous beasts,
//           and defend against natural and supernatural threats.
//         </p>
//         <div>
//           <p className={styles.health}>health: {playerStats.health}</p>
//           {!playerStats.magic ? (
//             <p className={styles.power}>power: {playerStats.power}</p>
//           ) : (
//             <p className={styles.mana}>mana: {playerStats.mana}</p>
//           )}
//         </div>
//       </div>
//       <Stats />
//     </div>
//   );
// };
// const Necromancer = () => {
//   const playerStats = useAppSelector((getPlayer) => getPlayer.player);
//   return (
//     <div className={styles.necromancer}>
//       <div className={styles.description}>
//         <p>
//           A dark mage who studies the secrets of life and death, able to raise
//           the dead as undead minions, drain the life force of their enemies, and
//           wield powerful curses and hexes to control and manipulate the forces
//           of death.
//         </p>
//         <div>
//           <p className={styles.health}>health: {playerStats.health}</p>
//           {!playerStats.magic ? (
//             <p className={styles.power}>power: {playerStats.power}</p>
//           ) : (
//             <p className={styles.mana}>mana: {playerStats.mana}</p>
//           )}
//         </div>
//       </div>
//       <Stats />
//     </div>
//   );
// };

export { Default, DisplayClass };
