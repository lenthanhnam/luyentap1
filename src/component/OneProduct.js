import React from 'react'
import dl from '../data/data.json'

export const OneProduct = () => {
  return (
    <div>
        <h1>Chi tiết sản phẩm</h1>
        {dl.map((value, key) => {
            return (
                <div>
                    <h4>tên sản phẩm: {value.name}</h4>
                    <p>Giá: {value.price}</p>
                    <img className='hinhsp' src={value.hinh}></img>
                </div>
            )
          })}
    </div>
  )
}
