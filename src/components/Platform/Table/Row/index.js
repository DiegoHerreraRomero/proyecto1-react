import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const PlatformRow = (props) => {
  const { id, name, abbreviature } = props.platform
  const { removePlatform } = props

  const confirmRemove = (e, id) => {
    e.preventDefault()
    if (window.confirm('¿Estas seguro?')) {
      removePlatform(id)
    }
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{abbreviature}</td>
      <td>
        <Link to={`/platforms/${id}/edit`}>
          <span role='img' aria-label='Editar'>&#128221;</span>
        </Link>
        <br />
        <Link to={`/platforms/${id}/show`}>
          <span role='img' aria-label='Editar'>&#128064;</span>
        </Link>
        <br />
        <a href='/platforms' onClick={(e) => confirmRemove(e, id)}>
          <span role='img' aria-label='Eliminar'>&#10060;</span>
        </a>
      </td>
    </tr>
  )
}

export default PlatformRow
