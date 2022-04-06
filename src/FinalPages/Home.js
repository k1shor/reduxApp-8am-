import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const Home = () => {
  // const [itemsInStore, setItemsInStore] = useState([])
  const store_items = useSelector(store => store.ourStore.items)

  const [limit, setLimit] = useState(8)

  // useEffect(() => {
  //   setItemsInStore(store_items.items)
  //   // console.log(store_items.items)
  // }, [])


  return (
    <div>
      <Navbar />

      <div className='container mx-auto my-3'>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {
            store_items.slice(0, limit).map((item,i) =>
              <Card key={i} product_name={item.product_name} image={item.product_image} price={item.product_price} description={item.product_description} />
            )
          }


        </div>
        { limit<store_items.length ?
        <div className='text-center'><h3 className='btn btn-warning'
        onClick={() => setLimit(limit + 4)}
        >Load More</h3></div>
        :
        <div className='text-center'><h5>All Items Loaded</h5></div>
        }
      </div>
    </div>
  )
}

export default Home