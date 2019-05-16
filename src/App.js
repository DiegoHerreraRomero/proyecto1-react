import React, { useState } from 'react'
import './App.css'
import VideogameTableContainer from './containers/Videogame/Table'
import VideogameFormContainer from './containers/Videogame/Form'

const defaultVideogame = {
  id: '',
  name: '',
  year: '',
  company: '',
  platforms: '',
  principalCharacter: ''
}

const App = () => {
  const [ useForm, setUseForm ] = useState(false)
  const [ tempVideogame, setTempVideogame ] = useState(defaultVideogame)

  const newVideogame = e => {
    setUseForm(true)
  }

  const editVideogame = videogame => {
    setTempVideogame(videogame)
    setUseForm(true)
  }

  const updateTempVideogame = e => {
    let value = e.target.value
    switch (e.target.name) {
      case 'year':
        value = value.replace(/^\D+/g, '').substring(0, 4)
        break
      default:
    }
    setTempVideogame({
      ...tempVideogame,
      [e.target.name]: value
    })
  }

  const closeForm = e => {
    setTempVideogame(defaultVideogame)
    setUseForm(false)
  }

  return (
    <div className='index'>
      { useForm && (
        <VideogameFormContainer
          tempVideogame={tempVideogame}
          updateTempVideogame={updateTempVideogame}
          closeForm={closeForm}
        />
      )}
      { !useForm && (
        <div>
          <VideogameTableContainer
            editVideogame={editVideogame}
          />
          <button onClick={newVideogame} className='green'>Nuevo videojuego</button>
        </div>
      )}
    </div>
  )
}
export default App
