import React from 'react'
import dl from '../data/data.json'
import { useParams } from 'react-router-dom'
import '../css/sp.css'

export const OneProduct = () => {
  let {id} = useParams()
  console.log(id);
  
  return (
    <div>
        <h1>Chi tiết sản phẩm</h1>
        {dl.map((value, key) => {
          if(value.id == id){
            return (
                <div>
                    <h4>tên sản phẩm: {value.name}</h4>
                    <p>Giá: {value.price}</p>
                    <img className='hinhsp' src={value.hinh}></img>
                </div>
            )
          }
          })}
    </div>
  )
}
