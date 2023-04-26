const collisionCheck = (
  playerCollision: any,
  enemyCollision: any,
  playerRef: any,
  orcRef: any,
  screenRef: any
) => {
  playerCollision.current = {
    top:
      playerRef.current?.getBoundingClientRect().top -
      screenRef.current?.offsetTop,
    left:
      playerRef.current?.getBoundingClientRect().left -
      screenRef.current?.offsetLeft,
    right:
      playerRef.current?.getBoundingClientRect().left -
      screenRef.current?.offsetLeft +
      60,
    bottom:
      playerRef.current?.getBoundingClientRect().top -
      screenRef.current?.offsetTop +
      60,
  };
  enemyCollision.current = {
    top:
      orcRef.current?.getBoundingClientRect().top -
      screenRef.current?.offsetTop,
    left:
      orcRef.current?.getBoundingClientRect().left -
      screenRef.current?.offsetLeft,
    right:
      orcRef.current?.getBoundingClientRect().left -
      screenRef.current?.offsetLeft +
      100,
    bottom:
      orcRef.current?.getBoundingClientRect().top -
      screenRef.current?.offsetTop +
      100,
  };
  if (
    playerCollision.current.right - 20 >= enemyCollision.current.left &&
    playerCollision.current.left + 25 <= enemyCollision.current.right &&
    playerCollision.current.bottom - 20 >= enemyCollision.current.top &&
    playerCollision.current.top + 20 <= enemyCollision.current.bottom
  ) {
    return true;
  } else {
    return false;
  }
};

export default collisionCheck;
// PREVIOUS CODE
// GAME INDEX LINE 61
// playerCollision.current = {
//   top:
//     playerRef.current?.getBoundingClientRect().top -
//     screenRef.current?.offsetTop,
//   left:
//     playerRef.current?.getBoundingClientRect().left -
//     screenRef.current?.offsetLeft,
//   right:
//     playerRef.current?.getBoundingClientRect().left -
//     screenRef.current?.offsetLeft +
//     60,
//   bottom:
//     playerRef.current?.getBoundingClientRect().top -
//     screenRef.current?.offsetTop +
//     60,
// };
// orcCollision.current = {
//   top:
//     orcRef.current?.getBoundingClientRect().top -
//     screenRef.current?.offsetTop,
//   left:
//     orcRef.current?.getBoundingClientRect().left -
//     screenRef.current?.offsetLeft,
//   right:
//     orcRef.current?.getBoundingClientRect().left -
//     screenRef.current?.offsetLeft +
//     100,
//   bottom:
//     orcRef.current?.getBoundingClientRect().top -
//     screenRef.current?.offsetTop +
//     100,
// };
// if (
//   playerCollision.current.right - 15 >= orcCollision.current.left &&
//   playerCollision.current.left + 15 <= orcCollision.current.right &&
//   playerCollision.current.bottom - 15 >= orcCollision.current.top &&
//   playerCollision.current.top + 15 <= orcCollision.current.bottom
// )
