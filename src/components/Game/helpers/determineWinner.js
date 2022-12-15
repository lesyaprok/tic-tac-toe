export const determineWinner = (squares) => {
  const squaresToCompare = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  for (let line of squaresToCompare) {
    const item = squares[line[0]];
    if (!item) continue;
    else if (line.every(number => squares[number] === item)) {
      return [item, line];
    }
  }
  return false;
};
