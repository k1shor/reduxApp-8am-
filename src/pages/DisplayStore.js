import React from 'react'
import { useSelector } from 'react-redux'

const DisplayStore = () => {
    const value = useSelector(store=>store)
  return (
    <div>{value}</div>
  )
}

export default DisplayStore