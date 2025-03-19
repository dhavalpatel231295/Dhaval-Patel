import React from 'react'
import { Footer, Navbar, Product } from "../components"

const Products = () => {
  return (
    <>
      <Navbar />
      <Product />
      <div className="page-navigation">
        <a href="#">&laquo;</a>
        <a href="#" className="active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">&raquo;</a>
      </div>
      <Footer />
    </>
  )
}

export default Products