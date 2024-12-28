import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  "./css/product.css" 
function product(props) {
  return (
    <div>
        <Card>
          <div className="image-box">
      <Card.Img variant="top" src={props.productData.image}/>
      </div>
      <Card.Body>
        <Card.Title>{props.productData.title}</Card.Title>
        <Card.Text>
          <p>Description{props.productData.description}</p>
          <p className='price'>${props.productData.price}</p>
        </Card.Text>
        <div className="button-box">
        <Button variant="primary">Add to cart</Button>
        <Button variant="warning">View</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default product
