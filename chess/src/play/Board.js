import React, { Component } from 'react';
// import BoardTile from './BoardTile.js'

export default class Board extends Component {
    
    setHighLights = (type, color, left, top) => {
        switch(type){
            case 'pawn':
            case 'rook':
            case 'knight':
            case 'bishop':
            case 'queen':
            case 'king':
        }
    }
    
    render() {
        // let piecesData = this.props.pieces;
        // let tilesData = this.props.boardTiles
        // let pieces = Object.keys(piecesData);
        // let tiles = Object.keys(tilesData)
        // let tileArray = [];
        // for (let i=1; i<=8; i++) {
        //     for (let j=1; j<=8; j++) {
        //         const tile = tilesData[tiles[i+(j*8)]]
        //         const tileProps = {key: i+(j*8), col: tile.col, row: tile.row, highlight: tile.highlight, occupied: tile.occupied}
        //         tileArray.push(<BoardTile {...tileProps} />)
        // }}
        // let storeArray = [];
        // for (let i = 0; i < 32; i++) {
        //     let piece = piecesData[pieces[i]]
        //     let pieceProps = {key: i, col: piece.col, row: piece.row, color: piece.color, captured: piece.captured, type: piece.type, pieceImage: piece.pieceImage}
        //     storeArray.push(<GamePiece {...pieceProps}/>)
        // }
        // console.log(storeArray);
        return (
            <div class='board'></div>
        )
    }
}