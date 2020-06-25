import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Excercise Tracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="navbar-item  pl-2 pr-2">
          <Link to="/" className="nav-link text-white">Exercises</Link>
          </li>
          <li className="navbar-item  pl-2 pr-2">
          <Link to="/create" className="nav-link text-white">Create Exercise Log</Link>
          </li>
          <li className="navbar-item pl-2 pr-2">
          <Link to="/user" className="nav-link text-white">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
  )
}

export default Navbar
