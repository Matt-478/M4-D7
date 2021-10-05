import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from './components/BookList'
import fantasyBooks from './fantasy.json'
import React from 'react'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Appppp</h1>
        <BookList books={'emptyString'} />
      </header>
    </div>
  )
}

export default App
