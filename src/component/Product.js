import React from 'react'
import dl from '../data/data.json'
import css from '../css/product.css'
import { Link } from 'react-router-dom'

export const Product = () => {
  return (
    <div>
        <h1>Sản phẩm</h1>
          {dl.map((value, key) => {
              return (
                <h2>Tên sản phẩm: <Link to={`/oneproduct/${value.id}`} style={{textDecoration: 'none', color: 'black'}}>{value.name}</Link></h2>
              )
            })}
    </div>
  )
}
