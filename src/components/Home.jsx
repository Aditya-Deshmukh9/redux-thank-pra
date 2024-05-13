import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'
import { useEffect } from 'react'
import { fetchProductsAsync } from '../Redux/productSlice'

function Home() {
  const dispatch = useDispatch()
  const { lists } = useSelector((state) => state.products)

  console.log(lists)

  useEffect(() => {
    console.log('working')
    dispatch(fetchProductsAsync())
  }, [])
  return (
    <>
      <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
        <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
          <Product />
          <Product />
          <Product />
        </section>
      </section>
    </>
  )
}

export default Home
