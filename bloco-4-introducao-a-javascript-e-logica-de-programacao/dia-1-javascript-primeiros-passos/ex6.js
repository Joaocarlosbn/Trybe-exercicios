const expr = 'King'
switch (expr) {
    case "King":
      console.log("one square in any direction.");
      break;
    case "Queen":
      console.log("diagonally, horizontally, or vertically any number of squares");
      break;
    case "Knight":
      console.log("in an ‘L’ shape’: two squares in a horizontal or vertical direction");
      break;
    case "Rook":
      console.log("horizontally or vertically any number of squares.");
      break;
    case "Pawn":
      console.log("vertically forward one square, with the option to move two squares if they have not yet moved");
      break;
    case "Bishop":
        console.log("Diagonally any number of squares.");
        break;
    default:
      console.log("Peça invalida");
  }
  