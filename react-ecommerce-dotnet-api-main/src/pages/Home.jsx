import { Navbar, Product, Footer } from "../components";

function Home() {
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

export default Home