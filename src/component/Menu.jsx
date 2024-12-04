import React from 'react'
import css from '../css/menu.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
    </ul>
  )
}
