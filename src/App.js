import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      turn: 0,
      lastTurn: null
    }
  }

 markSquare = (index) => {
  let {squares, turn} = this.state
  let playerOne = "❌"
  let playerTwo = "⭕️"
  if(turn === 0 && squares[index] == null){
    squares[index] = playerOne
    turn = turn += 1
  this.setState({lastTurn: playerOne, squares: squares,turn: turn})
  }else if(turn > 0 && squares[index] == null){
    squares[index] = playerTwo
    turn = 0
  this.setState({lastTurn: playerTwo, squares: squares,turn: turn})
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
        
      </>
    )
  }
}
export default App
