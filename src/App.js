import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      player: 1,
    }
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
      </>
    )
  }
}
export default App
