import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  "./css/product.css" 

function product({productData}) {
  return (
    <div>
     
        <Card>
          <div className="image-box">
      <Card.Img variant="top" src={productData.image}/>
      </div>
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>
          <p>Description{productData.description}</p>
          <p className='price'>${productData.price}</p>
        </Card.Text>
        <div className="button-box">
        <Button variant="primary">Add to cart</Button>
        <Link to={`/product/${productData.id}`}>
        <Button variant="warning">View</Button>
        </Link>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default product
