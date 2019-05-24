import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const VideogameRow = (props) => {
  const { id, name, year, company, platforms, principalCharacter } = props.videogame
  const { removeVideogame, platformsList } = props

  const confirmRemove = (e, id) => {
    e.preventDefault()
    if (window.confirm('¿Estas seguro?')) {
      removeVideogame(id)
    }
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{year}</td>
      <td>{company}</td>
      <td>{platformsList.filter(pf => pf.id === platforms)[0].name}</td>
      <td>{principalCharacter}</td>
      <td>
        <Link to={`/videogames/${id}/edit`}>
          <span role='img' aria-label='Editar'>&#128221;</span>
        </Link>
        <br />
        <Link to={`/videogames/${id}/show`}>
          <span role='img' aria-label='Editar'>&#128064;</span>
        </Link>
        <br />
        <a href='/videogames' onClick={(e) => confirmRemove(e, id)}>
          <span role='img' aria-label='Eliminar'>&#10060;</span>
        </a>
      </td>
    </tr>
  )
}

export default VideogameRow
