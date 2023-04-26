const playerMotion = (
  x: number,
  y: number,
  player: React.MutableRefObject<HTMLDivElement | null>
) => {
  if (player.current) {
    const { left, top, width, height } = player.current.getBoundingClientRect();
    const playerX = left + width / 2;
    const playerY = top + height / 2;
    const durationSqrd =
      Math.pow(Math.abs(x - playerX), 2) + Math.pow(Math.abs(y - playerY), 2);
    const distance = Math.sqrt(durationSqrd);
    player.current.style.transitionDuration = `${
      distance < 100
        ? "0.7s"
        : distance > 100 && distance < 200
        ? "1.3s"
        : distance > 200 && distance < 300
        ? "2s"
        : distance > 300 && distance < 400
        ? "2.7s"
        : distance > 400 && "3.5s"
    }`;
  }
};

export { playerMotion };
// PREVIOUS CODE
// LINE 140 // GAME INDEX
// const durationSqrd =
//   Math.pow(left - (playerRef.current.offsetLeft + 66), 2) +
//   Math.pow(top - (playerRef.current.offsetTop + 76), 2);
// console.log(Math.sqrt(durationSqrd));
// const duration = Math.sqrt(durationSqrd);
// playerRef.current.style.transitionDuration = `${
//   duration < 100
//     ? "0.7s"
//     : duration > 100 && duration < 200
//     ? "1.3s"
//     : duration > 200 && duration < 300
//     ? "2s"
//     : duration > 300 && duration < 400
//     ? "2.7s"
//     : duration > 400 && "3.5s"
// }`;
