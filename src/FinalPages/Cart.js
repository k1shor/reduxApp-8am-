import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'

const Cart = () => {
  const cart = useSelector(store => store.cart)
  const itemsInCart = cart.cart_items

  const dispatch = useDispatch()

  console.log(itemsInCart)

  return (
    <>
      <Navbar />

      <h2>Cart Items</h2>
      <div className='container'>
        {
          itemsInCart.length>0 ?
        <table className='table'>
          <thead>
            <tr>
              <td>S.No.</td>
              <td>Product Image</td>
              <td>Product Details</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {
              itemsInCart.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td><img src={item.image} style={{ "height": "150px" }} /></td>
                  <td>
                    <h3>{item.product_name}</h3>
                    <h4>{item.price}</h4>
                    <p>{item.description}</p>
                  </td>
                  <td><button className='btn btn-danger' onClick={() => {
                    dispatch({ type: "REMOVE_FROM_CART", payload: item })
                  }}>Remove</button></td>
                </tr>
              ))
            }
            <tr>
              <td colSpan={4}>
                <h4 className='text-center nav-link' onClick={() => {
                  dispatch({ type: "EMPTY_CART" })
                }}>EMPTY THE CART</h4>
              </td>
            </tr>
          </tbody>
        </table>
        :
        <h4 className='text-center'>There are no items in the cart.</h4>
        }
      </div>

    </>
  )
}

export default Cart