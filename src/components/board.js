import React from "react";
import { useState, useEffect } from "react";
import chessBoardWithPeices from "../helpers/chessBoardWithPeices";
import chessBoardData from "../helpers/chessBoardData";
import isValidMove from "../helpers/isValidMove"
import RulesTable from "./notes"


export default function Board() {

  let arr = []
  chessBoardData.forEach(obj => {
    let piece_position = `${obj.position.x}_${obj.position.y}`
    let piece_src = obj.imgSrc
    let piece_player = obj.player
    arr.push({ id: obj['id'], player: obj['player'], title: obj['title'], position: `${piece_position}`, imgSrc: obj['imgSrc'] })
  })
  let board = [];
  let sq = chessBoardWithPeices();
  board = sq;
  const [pieces, setPieces] = useState(chessBoardData);
  const [selectedDiv, setSelectedDiv] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [player, setPlayer] = useState("White");

  // const updatePosition = (id, x, y) => {
  //   setPieces(
  //     pieces.map((piece) => {
  //       if (piece.id === id) {
  //         return { ...piece, position: { x, y } };
  //       }
  //       return piece;
  //     })
  //   );
  // };

  // const movePiece1 = (color, piece, newPosition) => {
  //     const newPieces = { ...pieces };
  //     newPieces[color][piece].position = newPosition;
  //     setPieces(newPieces);
  // };
  // const movePiece = (id, position) => {
  //     setPieces(
  //       pieces.map((piece) => {
  //         if (piece.id === id) {
  //           return { ...piece, position };
  //         }
  //         return piece;
  //       })
  //     );
  //   };
  // let imageArr = []
  // for (let index = 0; index < arr.length; index++) {
  //     const element = arr[index].imgSrc;
  //     const position = arr[index].position
  //     let pieceImg = React.createElement(
  //         "img",
  //         {src : element, id : position},
  //         null
  //       );
  //       imageArr.push(pieceImg)
  // }
  // console.log(imageArr[0].props)
  // console.log(arr) 

  useEffect(() => {
    for (let index = 0; index < arr.length; index++) {
      let imageSrc = arr[index].imgSrc
      let imgName = arr[index].title
      const imgDiv = document.getElementById(arr[index].position)
      const pieceImg = document.createElement('img');
      pieceImg.src = imageSrc
      pieceImg.title = imgName
      pieceImg.alt = 'My Image'
      pieceImg.style.width = '75px';
      pieceImg.style.cursor = 'pointer';
      pieceImg.className = 'moveable-image';
      // pieceImg.draggable = "true"
      pieceImg.addEventListener('click', (e) => {
        // console.log(e.target);
        // console.log(document.getElementById(e))
        let pieceToMove = e.target
        console.log(pieceToMove)
        console.log(pieceToMove.title)
        const parent = pieceToMove.parentNode;
        console.log(parent.id)
        alert("image was clicked");
      });
      // console.log("Piece image:",pieceImg)
      // console.log("image Div:",imgDiv)
      imgDiv.append(pieceImg)
    }
  }, []);
  // useEffect(() => {
  //   const divs = document.querySelectorAll('div');

  //   document.addEventListener('click', handleClick);
  //   return () => {
  //     document.removeEventListener('click', handleClick);
  //   };
  // }, []);
  const divs = [...document.getElementsByTagName('div')];
  useEffect(() => {
    divs.forEach(div => {
      div.addEventListener('click', handleSingleClick);
      // div.addEventListener('dblclick', handleDoubleClick);
    });
    return () => {
      divs.forEach(div => {
        div.removeEventListener('click', handleSingleClick);
        // div.removeEventListener('dblclick', handleDoubleClick);
      });
    }
  }, [divs]);
  function handleSingleClick(event) {
    // Check if the user clicked on a div
    for (let i = 0; i < divs.length; i++) {
      if (event.target === divs[i]) {
        setSelectedDiv(event.target);
        break;
      }
    }
    // Check if the user clicked on a moveable image
    if (event.target.classList.contains('moveable-image')) {
      setSelectedImage(event.target);
    }
  }
  function handleDoubleClick() {

    // console.log("Selected Div",selectedDiv)
    const startCoordinates = selectedImage.parentNode.id
    const endCoordinates = selectedDiv.id
    const endDivChildCount = selectedDiv.children.length
    console.log(endDivChildCount)
    const endDivPiece = selectedDiv.getElementsByTagName("img")[0]
    console.log(endDivPiece)
    const startColumn = startCoordinates.charAt(2)
    const startRow = startCoordinates.charAt(0)
    const endColumn = endCoordinates.charAt(2)
    const endRow = endCoordinates.charAt(0)
    const pieceNam = selectedImage.title
    const pieceName = pieceNam.substring(0, pieceNam.length - 1)
    console.log(startRow, startColumn, endRow, endColumn, pieceName)
    let validMove = isValidMove(pieceName, startRow, startColumn, endRow, endColumn)
    console.log(validMove)
    if (validMove) {
      if (endDivChildCount === 0) {
        selectedDiv.appendChild(selectedImage)
        setPlayer(player === "White" ? "Black" : "White")

      } else {
        selectedDiv.removeChild(endDivPiece)
        selectedDiv.appendChild(selectedImage)
        setPlayer(player === "White" ? "Black" : "White")

        // fallenSoldiersBlock.appendChild(endDivPiece)
        
      }
    } else {
      alert("Invalid Move")
    }

    // const validMove = isValidMove(pieceName, startRow, startColumn, endRow, endColumn) 
    // console.log(validMove)
    // alert(
    // "Invalid Move"
    // )
  }
  // function PlayerTurnIndicator() {
  //   // const [player, setPlayer] = useState(1);
  //   return (
  //     <div>
  //       <h2>Player {player}'s Turn</h2>
  //       {/* <button onClick={() => setPlayer(player === 1 ? 2 : 1)}>
  //         Switch Player
  //       </button> */}
  //     </div>
  //   );
  // }
  
  // // let [cellArray, setCellArray] = useState([board]);
  // setCellArray(cellArray => [...cellArray, King(2)]);
  // console.log(cellArray);
  // console.log(sq);
  return (
    <div>
      <h2 className="player-indicator">{player}'s turn</h2>
      <div className="button-div">
      <button className="movePiece-button" onClick={handleDoubleClick}
      >Move Piece</button>
      </div>
    <div id="chessboard">
      {sq.map(obj => (
        <>
          {obj}
        </>
      ))}
      {/* <MyComponent />  */}
      {/* {pieces.map(piece => ( 
                <div key={piece.id}>
                {piece.title}: ({piece.position.x}, {piece.position.y})
                <button onClick={() => updatePosition(4 , 7, 7)}>
                  Update position
                </button>
                
              </div>
            ))} */}
      
    </div>
    <RulesTable />
    </div>
  )
}