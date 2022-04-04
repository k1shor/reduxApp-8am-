import React from 'react'
import { useSelector } from 'react-redux'


const Nav = () => {
    const cart = useSelector(store=>store.itemStore)

  return (
    <>
        <h2>No. of items in the cart: {cart.value}</h2>
    </>
  )
}

export default Nav