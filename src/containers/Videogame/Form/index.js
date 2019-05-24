import React, { useState } from 'react'
import { connect } from 'react-redux'
import { submitVideogame as submitVideogameCreator } from '../../../redux/videogames'
import VideogameForm from '../../../components/Videogame/Form'

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

const VideogameFormContainer = (props) => {
  const { videogames, submitVideogame, id, action } = props

  let initialVideogame = {}

  if (id !== undefined) {
    let videogame = videogames.filter(vg => parseInt(vg.id) === parseInt(id))[0]
    videogame = {
      ...videogame,
      errors: {
        name: null,
        year: null,
        company: null,
        platforms: null,
        principalCharacter: null
      }
    }
    initialVideogame = videogame
  } else {
    initialVideogame = defaultVideogame
  }

  const [ tempVideogame, setTempVideogame ] = useState(initialVideogame)

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

  const validateForm = e => {
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
      if (tempVideogame.id === '') {
        setTempVideogame(defaultVideogame)
      }
    }
  }

  return (
    <VideogameForm
      tempVideogame={tempVideogame}
      updateTempVideogame={updateTempVideogame}
      validateForm={validateForm}
      action={action}
    />
  )
}

const mapStateToProps = state => {
  const { videogames } = state.videogame
  return {
    videogames
  }
}

const mapDispatchToProps = {
  submitVideogame: submitVideogameCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(VideogameFormContainer)
