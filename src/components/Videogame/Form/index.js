import React from 'react'

const VideogameForm = (props) => {
  const { tempVideogame, updateTempVideogame, validateForm, action } = props

  const sendSubmit = e => {
    e.preventDefault()
    validateForm()
  }

  let view = (
    <div className='form'>
      <h1>Formulario</h1>

      <form onSubmit={sendSubmit}>
        <input type='hidden' name='id' value={tempVideogame.id || ''} />
        <label>
          Nombre
          {tempVideogame.errors.name !== null && (
            <b className='text-red'>{tempVideogame.errors.name}</b>
          )}
        </label>
        <input className='input-form' type='text' onChange={updateTempVideogame} name='name' value={tempVideogame.name} />

        <label>
          Año
          {tempVideogame.errors.year !== null && (
            <b className='text-red'>{tempVideogame.errors.year}</b>
          )}
        </label>
        <input className='input-form' type='text' onChange={updateTempVideogame} name='year' value={tempVideogame.year} />

        <label>
          Compañia
          {tempVideogame.errors.company !== null && (
            <b className='text-red'>{tempVideogame.errors.company}</b>
          )}
        </label>
        <input className='input-form' type='text' onChange={updateTempVideogame} name='company' value={tempVideogame.company} />

        <label>
          Plataformas
          {tempVideogame.errors.platforms !== null && (
            <b className='text-red'>{tempVideogame.errors.platforms}</b>
          )}
        </label>
        <input className='input-form' type='text' onChange={updateTempVideogame} name='platforms' value={tempVideogame.platforms} />

        <label>
          Personaje principal
          {tempVideogame.errors.principalCharacter !== null && (
            <b className='text-red'>{tempVideogame.errors.principalCharacter}</b>
          )}
        </label>
        <input className='input-form' type='text' onChange={updateTempVideogame} name='principalCharacter' value={tempVideogame.principalCharacter} />
        <input type='submit' value='Guardar' />
      </form>
    </div>
  )

  if (action === 'show') {
    view = (
      <div className='form'>
        <h1>Información</h1>
        <h5>Nombre</h5>
        <label>{tempVideogame.name}</label>
        <h5>Año</h5>
        <label>{tempVideogame.year}</label>
        <h5>Compañia</h5>
        <label>{tempVideogame.company}</label>
        <h5>Plataformas</h5>
        <label>{tempVideogame.platforms}</label>
        <h5>Personaje principal</h5>
        <label>{tempVideogame.principalCharacter}</label>
      </div>
    )
  }

  return view
}

export default VideogameForm
