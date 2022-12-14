import React from 'react'
import { useDispatch } from 'react-redux'
import { orderaz } from '../../redux/actions'
import {getProductRating } from '../../redux/actions'
import './Orderaz.css'

export const Orderaz = () => {
  const dispatch = useDispatch()

  function handleOrdenar(e) {
    e.preventDefault()
    dispatch(orderaz(e.target.value))
    dispatch(getProductRating(e.target.value))
  }
// generar un select con las opciones de ordenar por nombre, por precio, por rating
  return (
    <div className='orderaz'>
      <h2>Order by:</h2>
      <div className='containera'>
        <h5>By name</h5>
      <select onChange={(e) => handleOrdenar(e)}>
        <option value='all'>All</option>
        <option value='asc'> from  A to  Z  </option>
        <option value='desc'> from  Z to  A  </option>
      </select>
      </div>

      <div className='containerb'>
        <h5>By price</h5>
      <select onChange={(e) => handleOrdenar(e)}>
        <option value='all'>All</option>
        <option value='asc'> Minor to Major  </option>
        <option value='desc'> Major to Minor  </option>
      </select>
      </div>

      <div className='containerc'>
        <h5>By rating</h5>
      <select onChange={(e) => handleOrdenar(e)}>
        <option value='all'>All</option>
        <option value='asc'> Minor to Major  </option>
        <option value='desc'> Major to Minor  </option>
      </select>
      </div>



    </div>
  )
}
