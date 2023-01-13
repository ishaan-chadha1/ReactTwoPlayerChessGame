import React from 'react';
const horizontalAxis = ['0','1','2','3','4','5','6','7'];
const verticalAxis = ['0','1','2','3','4','5','6','7'];


export default function InitialiseChessBoard(props){
  const squares = [];
  // const [isActive, setIsActive] = useState(false);
  // const [blackPawn, blackBishop] = useState([squares]);
  // function handleDoubleClick(e){
  //   // console.log(e.target);
  //   // console.log(e.target.children); 
  //   // console.log(e.target.parentNode)
  //   const targetdiv = e.target
  //   console.log(targetdiv.id)
  //   alert("button was double clicked");
  // }
  // console.log(props[0].position)
  // let pieceImageSource, piecePoistion 
  // for (let index = 0; index < props.length; index++) {
  //   pieceImageSource = props[index].imgSrc;
  //   piecePoistion = props[index].position
  //   // console.log(piecePoistion)
  //   // console.log(pieceImageSource)
  // }
  // const group = []
  // for (let i = 0; i < 4; i++) {
  //     group.push((props) => <div className="parent">{props.children}</div>)
  // }
  for (let i = 0; i < horizontalAxis.length; i++) {
    for (let j = 0; j < verticalAxis.length; j++) {
    if ((i + j) % 2 === 0) {
      squares.push(<div id={`${horizontalAxis[i]}_${verticalAxis[j]}`} key={`${horizontalAxis[i]}_${verticalAxis[j]}`} className='cell cell-white'></div>)
  }
  else {
    squares.push(<div id={`${horizontalAxis[i]}_${verticalAxis[j]}`} key={`${horizontalAxis[i]}_${verticalAxis[j]}`} className='cell cell-black'></div>)
      }
    }
   } 
  // console.log(squares);
  return squares;
}