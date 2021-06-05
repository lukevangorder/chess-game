import './App.css';
import Play from './play/Play.js'
import Board from './play/Board.js'
import React from 'react';
import { connect } from 'react-redux';


function App() {
  return (
    <Play />
  );
}

const mapStateToProps = (state) => {
  return { tiles: state.tiles };
};

export default connect(
  mapStateToProps
)(Board); 