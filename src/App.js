import React from 'react'
import './App.css'
import VideogameTableContainer from './containers/Videogame/Table'
import VideogameFormContainer from './containers/Videogame/Form'
import PlatformTableContainer from './containers/Platform/Table'
import PlatformFormContainer from './containers/Platform/Form'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'

const Index = () => <h1>Inicio</h1>
const About = () => (
  <div>
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Cras ut porta eros. Quisque porta justo et ex luctus ultrices.
      Vestibulum arcu odio, consequat sed orci vel, sodales tincidunt tellus.
      Nulla facilisi. Curabitur erat dui, lacinia quis luctus et, faucibus sit amet justo.
      Aliquam erat volutpat. Sed posuere erat ut dolor blandit fermentum.
      Integer quis commodo nisl. Phasellus ultrices massa odio, sed facilisis leo egestas at.
      Vivamus fermentum nibh dignissim turpis aliquam varius.
      Fusce quis dui sodales, ultrices ex eget, sagittis magna.
      Morbi laoreet nisl non lorem rhoncus, at ultrices odio egestas.
      Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Quisque ante leo, mollis quis consectetur id, ullamcorper et sem.
    </p>
  </div>
)

function AppRouter () {
  const Videogames = () => (
    <VideogameTableContainer />
  )

  const Videogame = (props) => {
    const { id, action } = props.match.params
    return (
      <VideogameFormContainer
        id={id}
        action={action}
      />
    )
  }

  const Platforms = () => (
    <PlatformTableContainer />
  )

  const Platform = (props) => {
    const { id, action } = props.match.params
    return (
      <PlatformFormContainer
        id={id}
        action={action}
      />
    )
  }
  return (
    <Router>
      <ul className='navbar'>
        <li><NavLink exact to='/' activeClassName='active'>Inicio</NavLink></li>
        <li><NavLink exact to='/about' activeClassName='active'>About</NavLink></li>
        <li className='dropdown'>
          <NavLink to='/videogames' className='dropbtn' activeClassName='active'>Videojuegos</NavLink>
          <div className='dropdown-content'>
            <NavLink exact to='/videogames' >Lista de videojuegos</NavLink>
            <NavLink exact to='/videogames/new'>Nuevo videojuego</NavLink>
          </div>
        </li>
        <li className='dropdown'>
          <NavLink to='/platforms' className='dropbtn' activeClassName='active'>Plataformas</NavLink>
          <div className='dropdown-content'>
            <NavLink exact to='/platforms' >Lista de plataformas</NavLink>
            <NavLink exact to='/platforms/new'>Nueva plataforma</NavLink>
          </div>
        </li>
      </ul>
      <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/about' exact component={About} />
        <Route path='/videogames' exact component={Videogames} />
        <Route path='/videogames/new' exact component={Videogame} />
        <Route path='/videogames/:id/:action' exact component={Videogame} />
        <Route path='/platforms' exact component={Platforms} />
        <Route path='/platforms/new' exact component={Platform} />
        <Route path='/platforms/:id/:action' exact component={Platform} />
      </Switch>
    </Router>
  )
}

export default AppRouter
