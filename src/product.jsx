import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function product(props) {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.productData.image}/>
      <Card.Body>
        <Card.Title>{props.productData.title}</Card.Title>
        <Card.Text>
          <p>Description{props.productData.description}</p>
          <p>${props.productData.price}</p>
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
        <Button variant="warning">View</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default product
