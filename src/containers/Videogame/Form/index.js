import React from 'react'
import { connect } from 'react-redux'
import { submitVideogame as submitVideogameCreator } from '../../../redux/videogames'
import VideogameForm from '../../../components/Videogame/Form'

const VideogameFormContainer = (props) => {
  const { submitVideogame, tempVideogame, updateTempVideogame, closeForm, validateForm } = props

  return (
    <VideogameForm
      tempVideogame={tempVideogame}
      submitVideogame={submitVideogame}
      updateTempVideogame={updateTempVideogame}
      closeForm={closeForm}
      validateForm={validateForm}
    />
  )
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {
  submitVideogame: submitVideogameCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(VideogameFormContainer)
