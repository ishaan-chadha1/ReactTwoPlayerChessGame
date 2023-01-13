// import React, { Component, useState } from 'react';
// import chessBoardData from '../helpers/chessBoardData';

// function MyComponent() {
//     const [x, setX] = useState(0);
//     const [y, setY] = useState(0);

//     const handleDragEnd = (event) => {
//         setX(event.clientX);
//         setY(event.clientY);
//     };
//     const img = chessBoardData.map(obj => {
//         return obj.imgSrc
//       });
//     return (
//         <img
//             draggable
//             src={img[0]}
//             onDragEnd={handleDragEnd}
//             style={{
//                 width: "50px",
//                 height: "50px",
//                 position: "absolute",
//                 left: x,
//                 top: y
//             }}
//         >
//         </img>
//     );
// }

// export default MyComponent;
// import React from 'react';

// export default class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg'
//     };
//   }

//   handleClick = () => {
//     this.setState({
//       imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg'
//     });
//   }

//   render() {
//     return (
//       <div>
//         <div
//           dangerouslySetInnerHTML={{ __html: `<img src="${this.state.imageUrl}" alt="My Image" />` }}
//         />
//         <button onClick={this.handleClick}>Change Image</button>
//       </div>
//     );
//   }
// }

// import React, { useState } from 'react';
// import chessBoardData from '../helpers/chessBoardData';

// const MyComponent = () => {
//   const [pieces, setPieces] = useState(chessBoardData);
//     console.log(chessBoardData[0].position.)
//   const movePiece = (id, position) => {
//     setPieces(
//       pieces.map((piece) => {
//         if (piece.id === id) {
//           return { ...piece, position};
//         }
//         return piece;
//       })
//     );
//   };

//   return (
//     <div>
//       {pieces.map((piece) => (
//         <div key={piece.id}>
//           {piece.title}: {piece.position.x}_{piece.position.y}{' '}
//           <button onClick={() => movePiece(piece.id, '3_4')}>
//             Move to 3_4
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default MyComponent;

// import React, { useState } from 'react';
// import chessBoardData from '../helpers/chessBoardData';

// const MyComponent = () => {
//   const [items, setItems] = useState(chessBoardData);

//   const updatePosition = (id, x, y) => {
//     setItems(
//       items.map((item) => {
//         if (item.id === id) {
//           return { ...item, position: { x, y } };
//         }
//         return item;
//       })
//     );
//   };
//   return (
//     <div>
//       {items.map((item) => (
//         <div key={item.id}>
//           {item.title}: ({item.position.x}, {item.position.y})
//           <button onClick={() => updatePosition(item.id, 7, 7)}>
//             Update position
//           </button>
//         </div>
//       ))}
//     </div>
    
//   );
// };
// export default MyComponent;
// import React, { useState, useEffect } from 'react';
// import $ from 'jquery';

// const initialPosition = { x: 0, y: 0 };
// const finalPosition = { x: 0, y: 0 };

// const MyComponent = () => {
//   const [initial, setInitial] = useState(initialPosition);
//   const [final, setFinal] = useState(finalPosition);

//   useEffect(() => {
//     const $piece = $('#1');
//     $piece.animate({ top: final.y, left: final.x }, 1000);
//   }, [final]);

//   return (
//     <div>
//       <button onClick={() => setFinal({ x: 500, y: 500 })}>Move piece</button>
//       <div style={{ position: 'absolute', top: initial.y, left: initial.x }} id="piece">Chess piece</div>
//     </div>
//   );
// };
// import React, { useState, useEffect } from 'react';
// import $ from 'jquery';

// const initialPosition = { x: 0, y: 0 };

// const MyComponent = () => {
//   const [finalPosition, setFinalPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const $piece = $('#piece');
//     $piece.animate({ top: finalPosition.y, left: finalPosition.x }, 1000, () => {
//     //   $('#target-div').append($piece);
//     });
//   }, [finalPosition]);

//   return (
//     <div>
//       <button onClick={() => setFinalPosition({ x: 500, y: 500 })}>Move piece</button>
//       <div style={{ position: 'absolute', top: initialPosition.y, left: initialPosition.x }} id="piece">Chess piece</div>
//       <div id="target-div"></div>
//     </div>
//   );
// };

// export default MyComponent;
// import React from 'react';

// export default class ImageMover extends React.Component {
//   state = {
//     selectedDiv: null,
//     selectedImage: null,
//   };

//   handleDivClick = (event) => {
//     this.setState({ selectedDiv: event.target });
//   }

//   handleImageClick = (event) => {
//     this.setState({ selectedImage: event.target });
//   }

//   handleMoveButtonClick = () => {
//     this.state.selectedDiv.appendChild(this.state.selectedImage);
//   }

//   render() {
//     return (
//       <div>
//         <div onClick={this.handleDivClick}>
//           <img src="src\components\myComponent.js" onClick={this.handleImageClick} />
//         </div>
//         <div onClick={this.handleDivClick}>
//           <img src="src\assets\images\WhitePawn.png" onClick={this.handleImageClick} />
//         </div>
//         <div onClick={this.handleDivClick}>
//           <img src="src\assets\images\WhitePawn.png" onClick={this.handleImageClick} />
//         </div>
//         <button onClick={this.handleMoveButtonClick}>Move image</button>
//       </div>
//     );
//   }
// }
// const MyComponent = () => {
//     const divs = [...document.getElementsByTagName('div')];

//     useEffect(() => {
//         divs.forEach(div => {
//             div.addEventListener('dblclick', handleDoubleClick);
//         });
//         return () => {
//             divs.forEach(div => {
//                 div.removeEventListener('dblclick', handleDoubleClick);
//             });
//         }
//     }, [divs]);

//     const handleDoubleClick = (event) => {
//         // your double click logic here
//         console.log('double clicked!', event.target);
//     }

import React, { useState, useEffect } from 'react';

function ImageMover() {
  const [selectedDiv, setSelectedDiv] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const divs = document.querySelectorAll('div');

    function handleClick(event) {
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

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  function handleMoveButtonClick() {
    selectedDiv.appendChild(selectedImage);
  }

  return (
    <div>
      <div>
        <img src="image1.jpg" className="moveable-image" />
      </div>
      <div>
        <img src="image2.jpg" className="moveable-image" />
      </div>
      <div>
        <img src="image3.jpg" className="moveable-image" />
      </div>
      <button onClick={handleMoveButtonClick}>Move image</button>
    </div>
  );
}
