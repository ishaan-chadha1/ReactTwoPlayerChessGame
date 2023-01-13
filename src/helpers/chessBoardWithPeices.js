
import React, { useState } from "react";
import InitialiseChessBoard from "./initialiseChessBoard";
import chessBoardData from "./chessBoardData";

export default function chessBoardWithPeices() {
    let arr = []
    chessBoardData.forEach(obj => {
        let piece_position = `${obj.position.x}_${obj.position.y}`
        let piece_src = obj.imgSrc
        let piece_player = obj.player
        arr.push({id:obj['id'], player:obj['player'],title:obj['title'],position:`${piece_position}`, imgSrc:obj['imgSrc']}) 
    })
    let sq = InitialiseChessBoard(arr);
    // const filtered1 = arr.filter(obj => {
    //     return obj.player === 1 ;
    //   });
    // const filtered2 = arr.filter(obj => {
    //     return obj.player === 2 ;
    //   });
return sq;
} 