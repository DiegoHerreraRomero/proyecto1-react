import React from 'react'

const PlatformForm = (props) => {
  const { tempPlatform, updateTempPlatform, validateForm, action } = props

  const sendSubmit = e => {
    e.preventDefault()
    validateForm()
  }

  let view = (
    <div className='form'>
      <h1>Formulario</h1>

      <form onSubmit={sendSubmit}>
        <input type='hidden' name='id' value={tempPlatform.id || ''} />
        <label>
          Nombre
          {tempPlatform.errors.name !== null && (
            <b className='text-red'>{tempPlatform.errors.name}</b>
          )}
        </label>
        <input className='input-form' type='text' onChange={updateTempPlatform} name='name' value={tempPlatform.name} />

        <label>
          Abreviatura
          {tempPlatform.errors.abbreviature !== null && (
            <b className='text-red'>{tempPlatform.errors.abbreviature}</b>
          )}
        </label>
        <input className='input-form' type='text' onChange={updateTempPlatform} name='abbreviature' value={tempPlatform.abbreviature} />

        <input type='submit' value='Guardar' />
      </form>
    </div>
  )

  if (action === 'show') {
    view = (
      <div className='form'>
        <h1>Información</h1>
        <h5>Nombre</h5>
        <label>{tempPlatform.name}</label>
        <h5>Abreviatura</h5>
        <label>{tempPlatform.abbreviature}</label>
      </div>
    )
  }

  return view
}

export default PlatformForm
