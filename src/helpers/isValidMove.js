export default function isValidMove(piece, startRow, startColumn, endRow, endColumn) {
    console.log(piece, startRow, startColumn, endRow, endColumn)
    switch (piece) {
      case 'Pawn':
        return isValidPawnMove(startRow, startColumn, endRow, endColumn);
      case 'Knight':
        return isValidKnightMove(startRow, startColumn, endRow, endColumn);
      case 'Bishop':
        return isValidBishopMove(startRow, startColumn, endRow, endColumn);
      case 'Rook':
        return isValidRookMove(startRow, startColumn, endRow, endColumn);
      case 'Queen':
        return isValidQueenMove(startRow, startColumn, endRow, endColumn);
      case 'King':
        return isValidKingMove(startRow, startColumn, endRow, endColumn);
      default:
        throw new Error('Invalid piece type');
    }
  }
  
  function isValidPawnMove(startRow, startColumn, endRow, endColumn) {
    // Pawns can only move forward
    // console.log("Start Row",startRow,"Start Column", startColumn,"End Row", endRow,"End Column", endColumn)
    if ((endColumn === startColumn )) {
      return true;
    } 
    if ((endRow === startRow + 2) || (endRow === startRow + 1)  || (endRow === startRow - 1 ) || (endRow === startRow - 2)){
      return true;
    }
    return false;
  }
  
  function isValidKnightMove(startRow, startColumn, endRow, endColumn) {
    // Knights can move in an L-shape, two squares in one direction
    // and one square in the other
    if (Math.abs(endRow - startRow) === 2 && Math.abs(endColumn - startColumn) === 1) {
      return true;
    }
    if (Math.abs(endRow - startRow) === 1 && Math.abs(endColumn - startColumn) === 2) {
      return true;
    }
  
    return false;
  }
  function isValidBishopMove(startRow, startColumn, endRow, endColumn) {
    // Bishops can move diagonally, but the number of rows and columns
    // moved must be equal
    if (Math.abs(endRow - startRow) !== Math.abs(endColumn - startColumn)) {
      return false;
    }
  
    return true;
  }
  
  function isValidRookMove(startRow, startColumn, endRow, endColumn) {
    // Rooks can move horizontally or vertically, but not diagonally
    if (startRow !== endRow && startColumn !== endColumn) {
      return false;
    }
    return true;
  }
  function isValidQueenMove(startRow, startColumn, endRow, endColumn) {
    // Queens can move like bishops or rooks
    if (isValidBishopMove(startRow, startColumn, endRow, endColumn) ||
        isValidRookMove(startRow, startColumn, endRow, endColumn)) {
      return true;
    }
    return false;
  }
  function isValidKingMove(startRow, startColumn, endRow, endColumn) {
  // Kings can move one square in any direction
  if (Math.abs(endRow - startRow) > 1 || Math.abs(endColumn - startColumn) > 1) {
    return false;
  }
  return true;
}
  