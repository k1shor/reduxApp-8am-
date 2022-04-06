import React from 'react'
import { useDispatch } from 'react-redux'
import './card.css'

const Card = (props) => {

  const dispatch = useDispatch()

  const addToCart = () => {
    console.log(props)
    dispatch({ type: "ADD_TO_CART", payload: props })
  }

  return (
    <div>
      <div className="col">
        <div className="card">
          <img src={`${props.image}`} className="card-img-top" alt={`${props.product_name}`} />
          <div className="card-body text-center">
            <h5 className="card-title">{`${props.product_name}`}</h5>
            <h5 className="card-title">{`${props.price}`}</h5>
            <p className="card-text">{`${props.description}`}</p>
            <button className='btn btn-warning' onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Card