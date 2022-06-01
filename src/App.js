import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'
import Winner from './components/Winner'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      player: 1,
    }
  }

// create a function called calculateWinner
  // function will take in a variable of winning arrays
  // use a for loop to go through the index's of squares.
  // give an array of numbers marked as letters a, b ,c
// create an if conditional to set the winning match
  // return the array of matching values
  // return null
  calculateWinner = (squareArray) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squareArray[a] && squareArray[a] === squareArray[b] && squareArray[b] === squareArray[c]) {
        return squareArray[a];
      }
    }
    return null;
  }

 markSquare = (index) => {
  let {squares, player} = this.state
  if(player === 1 && squares[index] == null){
    squares[index] = "❌"
    player += 1
  this.setState({squares: squares, player: player})
  }else if(player === 2 && squares[index] == null){
    squares[index] = "⭕️"
    player = 1
  this.setState({squares: squares, player: player})
  } 
  
 }

  render() {
    return(
      <>

        <h1 className='heading'>Tic Tac Toe</h1>
        <div className="grid">
          {this.state.squares.map((value, index) => {
            return <Square 
            value = {value}
            key = {index}
            index = {index}
            markSquare = {this.markSquare}
            />
            } 
          )}
        </div>
        <div>
            <Winner
            squareArray = {this.state.squares}
            winCheck = {this.calculateWinner}
            />

        </div>
      </>
    )
  }
}




export default App
