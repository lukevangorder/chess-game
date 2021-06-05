import React, { Component } from 'react';
import BoardTile from './BoardTile.js'

export default class Board extends Component {
    
    setHighLights = (type, color, left, top) => {
        switch(type){
            case 'P':
            case 'R':
            case 'Kn':
            case 'B':
            case 'Q':
            case 'K':
        }
    }

    handleTileClick = (pieceColor, piece, row, col) => {
        console.log(piece);
    }
    
    render() {
        let tileData = this.props.tiles;
        let tiles = Object.keys(tileData);
        let tileArray = [];
        for (let i=1; i<=8; i++) {
            for (let j=1; j<=8; j++) {
                const tile = tileData[`${i}`+`${j}`]
                const tileProps = {handleClick: this.handleTileClick, key: `${i}${j}`, row: tile.row, col: tile.col, tileColor: tile.tileColor, occupied: tile.occupied, piece: tile.piece, pieceColor: tile.pieceColor, pieceImage: tile.pieceImage, active: tile.active, highlighted: tile.highlighted}
                tileArray.push(<BoardTile {...tileProps} />)
        }}
        return (
            <div class='board'>{tileArray}</div>
        )
    }
}