import React from 'react'

const VideogameRow = (props) => {
  const { id, name, year, company, platforms, principalCharacter } = props.videogame
  const { editVideogame, removeVideogame } = props

  const confirmRemove = id => {
    if (window.confirm('¿Estas seguro?')) {
      removeVideogame(id)
    }
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{year}</td>
      <td>{company}</td>
      <td>{platforms}</td>
      <td>{principalCharacter}</td>
      <td>
        <div onClick={() => editVideogame(props.videogame)} title='Editar'>
          <span role='img' aria-label='Editar'>&#128221;</span>
        </div>
        <div onClick={() => confirmRemove(id)} title='Eliminar'>
          <span role='img' aria-label='Eliminar'>&#10060;</span>
        </div>
      </td>
    </tr>
  )
}

export default VideogameRow
