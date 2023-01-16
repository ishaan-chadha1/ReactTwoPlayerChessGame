import React from "react";
const rules = [
  {
    id: 1,
    rule: "Pawns can move forward one or two spaces on their first move.",
    example: "On its first move, a pawn can move from e2 to e4 or e3."
  },
  {
    id: 2,
    rule: "Pawns can only capture by moving diagonally.",
    example: "A pawn on e4 can capture a piece on d5 or f5, but not on e5."
  },
  {
    id: 3,
    rule: "A pawn that reaches the opposite end of the board can be promoted to a queen, rook, bishop, or knight.",
    example: "A pawn that reaches the 8th rank can be promoted to a queen, rook, bishop, or knight of the same color."
  },
  {
    id: 4,
    rule: "The king is in check when it is under attack by an opponent's piece.",
    example: "If a black rook is attacking a white king on d1, the white king is in check."
  }
];

function RulesTable() {
  return (
    <table>
      <thead>
        {/* <tr>
          <th>Rule</th>
          <th>Example</th>
        </tr> */}
      </thead>
      <tbody>
        {rules.map((rule) => (
          <tr key={rule.id}>
            <h2>Rule</h2>
            <tr>{rule.rule}</tr>
            <h2>Example</h2>
            <tr>{rule.example}</tr>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RulesTable;
