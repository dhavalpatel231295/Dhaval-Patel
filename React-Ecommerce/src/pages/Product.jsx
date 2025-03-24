import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Footer, Navbar } from "../components";
import imageMapping from "./ImageMapping";
import apiUrl from "../config"; 

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {

        //This is .NET 6 API Using Entity Framework 
        const response = await fetch(`${apiUrl}/${id}`);
 
        //This is .NET 6 API Using Entity Framework 
        //const response = await fetch('https://localhost:7273/api/Products/${id}'); // Update with your API URL

        // This is Node.JS API with MongoDB
        //const response = await fetch(`http://localhost:5000/api/products/${id}`);
        
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    getProduct();
  }, [id]);
  

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };


  const Comments = () => {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
      if(selected === i){
        return setSelected(null);
      }

      setSelected(i);
    };

    const [newComment, setNewComment] = useState(''); // Define newComment state
    const [newImage, setNewImage] = useState(null);
  const [comments, setComments] = useState([]); 

    const handlePostComment = () => {
      if (newComment.trim() !== '') {
        const comment = { text: newComment, image: newImage };
        setComments([...comments, comment]);
        setNewComment(''); // Clear the input field after posting
        setNewImage(null);
      }
    };

     // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewImage(event.target.result); // Store the uploaded image as a data URL
      };
      reader.readAsDataURL(file);
    }
  };
    return (
      <>
    <div className="wrapper">
      <div className="accordian">
        {data.map((item,i)=> (
          <div className="item">
            <div className="title" onClick={() =>toggle(i)}>
              <h4>{item.commentTitle}</h4>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}> <h5>{item.userName1} </h5>{item.comment1}<hr></hr>
            <h5>{item.userName2} </h5>{item.comment2}<hr></hr><h5>{item.userName3} </h5>{item.comment3}<hr></hr>
            <h5>{item.userName4} </h5>{item.comment4}<hr></hr>

            {comments.map((comment, index) => (
                  <div key={index}>
                    <h5>User</h5>
                    {comment.text}
                    <div className="uploaded-image-container">
                    {comment.image && <img src={comment.image} alt="Uploaded" className="uploaded-image" />}
                    </div>
                    <hr />
                  </div>
                ))}

            <input className="userComment"
            type="text"
                  placeholder="Your comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />

            <input
                  type="file"
                  accept="image/*"
                   onChange={handleImageUpload}
                />

          <button className="postComment" onClick={handlePostComment}>Post</button>
            
          </div>
          </div>
        ))}
      </div>
    </div>
    </>
      );
  };
  const data = [
    {
      commentTitle:'Comments',
      userName1:'Deepak Vasoya',
      comment1:"I recently purchased this Game and I am very happy with my decision. From the moment I started playing, I was completely immersed in the game's world.",

      userName2:'Mark Smith',
      comment2:"I recently dove into the world of Game, and I can honestly say it's been one of the most unforgettable gaming adventures I've ever embarked upon.",

      userName3:'Chriss Bailey',
      comment3:"This game is pure fun. I can't put it down!",

      userName4:'Jason Tylor',
      comment4:"This game is a masterpiece!"

    }
  ]


  const getImageUrl = (imageName) => {
    return imageMapping[imageName] || '../assets/fifa.jpg'; // Fallback image path
  };

  const ShowProduct = () => {
    if (!product) {
      return <p>Product not found</p>;
    }
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={getImageUrl(product.image)}
                alt={product.title}
                width="400px"
                height="400px"
              />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h4 className="text-uppercase">{product.category}</h4>
              <h1 className="display-5 proTitle">{product.title}</h1>
              <br></br>
              <p className="lead">
                {product.rating && product.rating.rate}{" "}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6  my-4 proPrice">${product.price}</h3>
              <p className="lead">{product.description}</p>
              <br></br>
              <button
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-dark mx-3 buyNow">
                Go to Cart
              </Link><br></br><br></br>
              <Comments/>
            </div>
          </div>
        </div>
      </>
    );
  };
  

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
          
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
