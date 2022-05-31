import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      ex: null
    }
  }

 markSquare = (index) => {
  const {squares, ex} = this.state
  
    squares[index] = "❌"

  this.setState({squares: squares})
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
