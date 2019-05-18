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
  principalCharacter: '',
  errors: {
    name: null,
    year: null,
    company: null,
    platforms: null,
    principalCharacter: null
  }
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

  const validateForm = submitVideogame => {
    let errorsProcessed = {}
    let valid = true
    if (tempVideogame.name === '') {
      valid = false
      errorsProcessed = {
        ...errorsProcessed,
        name: 'No puede estar en blanco'
      }
    } else {
      errorsProcessed = {
        ...errorsProcessed,
        name: null
      }
    }
    if (tempVideogame.year === '') {
      valid = false
      errorsProcessed = {
        ...errorsProcessed,
        year: 'No puede estar en blanco'
      }
    } else {
      errorsProcessed = {
        ...errorsProcessed,
        year: null
      }
    }
    if (tempVideogame.company === '') {
      valid = false
      errorsProcessed = {
        ...errorsProcessed,
        company: 'No puede estar en blanco'
      }
    } else {
      errorsProcessed = {
        ...errorsProcessed,
        company: null
      }
    }
    if (tempVideogame.platforms === '') {
      valid = false
      errorsProcessed = {
        ...errorsProcessed,
        platforms: 'No puede estar en blanco'
      }
    } else {
      errorsProcessed = {
        ...errorsProcessed,
        platforms: null
      }
    }
    if (tempVideogame.principalCharacter === '') {
      valid = false
      errorsProcessed = {
        ...errorsProcessed,
        principalCharacter: 'No puede estar en blanco'
      }
    } else {
      errorsProcessed = {
        ...errorsProcessed,
        principalCharacter: null
      }
    }
    setTempVideogame({
      ...tempVideogame,
      errors: {
        ...tempVideogame.errors,
        ...errorsProcessed
      }
    })
    if (valid) {
      submitVideogame(tempVideogame)
      closeForm()
    }
  }

  return (
    <div className='index'>
      <h2>Videojuegos</h2>
      { useForm && (
        <VideogameFormContainer
          tempVideogame={tempVideogame}
          updateTempVideogame={updateTempVideogame}
          validateForm={validateForm}
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
