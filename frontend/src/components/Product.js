import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}></a>
      <Card.Img src={product.image} variant='top' />

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
      </Card.Body>
      <Card.Text as='div'>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      </Card.Text>
      <Card.Title as='h3'>${product.price}</Card.Title>
    </Card>
  )
}

export default Product
