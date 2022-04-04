import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const Home = () => {
  // const [itemsInStore, setItemsInStore] = useState([])
  const store_items = useSelector(store => store.ourStore.items)

  // useEffect(() => {
  //   setItemsInStore(store_items.items)
  //   // console.log(store_items.items)
  // }, [])


  return (
    <div>
      <Navbar />


      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {
          store_items.map(item => 
             <Card product_name={item.product_name} image={item.product_image} price={item.product_price} description={item.product_description} />
          )
        }


      </div>
    </div>
  )
}

export default Home