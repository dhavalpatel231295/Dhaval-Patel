import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import imageMapping from "../pages/ImageMapping";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import apiUrl from "../config";  

import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  //const apiUrl = process.env.REACT_APP_API_URL_DOTNET;
  //const apiUrl = process.env.REACT_APP_API_URL_NODEJS;
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        
        
        const response = await fetch(apiUrl+'/'); // Update with your API URL

        //This is .NET 6 API Using Entity Framework 
        //const response = await fetch('https://localhost:7273/api/Products/'); // Update with your API URL

        //This is NodeJS API Using MongoDB
        //const response = await fetch('http://localhost:5000/api/products/'); // Update with your API URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const productsAPI = await response.json();
        setLoading(true);
        if (componentMounted) {
          setData(productsAPI);
          setFilter(productsAPI);
          setLoading(false);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
      return () => {
        componentMounted = false;
      };

    };

    fetchProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };


  const getImageUrl = (imageName) => {
    return imageMapping[imageName] || '../assets/fifa.jpg'; // Fallback image path
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="" onClick={() => setFilter(data)}>
            All
          </button>
          <button className="" onClick={() => filterProduct("PS5")}>
            PS5
          </button>
          <button className="" onClick={() => filterProduct("PS4")}>
            PS4
          </button>
          <button className="" onClick={() => filterProduct("XBOX")}>
            XBOX
          </button>
        </div>

        {filter.map((product) => {


          return (
            <div
              id={product.id}
              key={product.id}
              className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4"
            >
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={getImageUrl(product.image)}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title myCardTitle">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body">
                  <Link to={"/product/" + product.id} className="buyNow">
                    Buy Now
                  </Link>
                  <button className="" onClick={() => addProduct(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="pageHeader text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
