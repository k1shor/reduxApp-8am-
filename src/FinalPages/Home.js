import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const Home = () => {
  const store_items = useSelector(store => store.ourStore.items)

  const [limit, setLimit] = useState(8)
  const [search, setSearch] = useState('')

  const filtered_items = store_items.filter(item=>item.product_name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <Navbar />
      <form className="container mx-auto w-50 d-flex my-3">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{
          setSearch(e.target.value)
        }} />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        
      <div className='container mx-auto my-3'>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {
            filtered_items.slice(0, limit).map((item, i) =>
              <Card key={i} product_name={item.product_name} image={item.product_image} price={item.product_price} description={item.product_description} />
            )
          }


        </div>
        {limit < filtered_items.length ?
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