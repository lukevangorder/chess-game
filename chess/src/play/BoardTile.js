import React, { Component } from 'react';

export default class BoardTile extends Component {

    constructor(props){
        super()
        this.state = {
            row: props.row,
            col: props.col,
            tileColor: props.tileColor, 
            occupied: props.occupied, 
            piece: props.piece, 
            pieceColor: props.pieceColor, 
            pieceImage: props.pieceImage, 
            active: props.active, 
            highlighted: props.highlighted,
        }
    }

    handleSelection = () => {
        this.props.handleClick(this.state.pieceColor, this.state.piece, this.state.row, this.state.col)
    }

    render() {
        let colorName = `boardtile ${this.state.tileColor}`
        if (this.state.highlighted) {
            colorName = `boardtile highlight`
        }
        return (
            <div class={colorName} onClick={this.handleSelection}>
                {this.state.pieceImage}
            </div>
        )
    }
}