import React from 'react'

const VideogameForm = (props) => {
  const { tempVideogame, submitVideogame, updateTempVideogame, closeForm } = props

  const sendSubmit = e => {
    e.preventDefault()
    submitVideogame(tempVideogame)
    closeForm()
  }

  const returnToTable = e => {
    e.preventDefault()
    closeForm()
  }

  return (
    <div className='form'>
      <h1>Formulario</h1>

      <form onSubmit={sendSubmit}>
        <input type='hidden' name='id' value={tempVideogame.id || ''} />
        <label for='name'>Nombre</label>
        <input className='input-form' type='text' onChange={updateTempVideogame} name='name' value={tempVideogame.name} />

        <label for='year'>Año</label>
        <input className='input-form' type='text' onChange={updateTempVideogame} name='year' value={tempVideogame.year} />

        <label for='company'>Compañia</label>
        <input className='input-form' type='text' onChange={updateTempVideogame} name='company' value={tempVideogame.company} />

        <label for='platforms'>Plataformas</label>
        <input className='input-form' type='text' onChange={updateTempVideogame} name='platforms' value={tempVideogame.platforms} />

        <label for='principalCharacters'>Personaje principal</label>
        <input className='input-form' type='text' onChange={updateTempVideogame} name='principalCharacter' value={tempVideogame.principalCharacter} />
        <input type='submit' value='Guardar' />
        <button className='return' onClick={returnToTable}>Volver</button>
      </form>
    </div>
  )
}

export default VideogameForm
