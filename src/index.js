import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const nimi = 'Henkka'
  const ika = 22
  
  return (
    <>
      <h1>Greetings</h1>
      <Hello name={nimi} age={ika + 6}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))