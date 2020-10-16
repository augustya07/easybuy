import React from 'react';
import {Link} from "react-router-dom";
import products from "../products";
import Rating from "../components/Rating.";
import {Col, Image, Row,ListGroup, Card, Button} from "react-bootstrap";


const ProductScreen = ({ match }) => {

    const product = products.find((p) => p._id === match.params._id)
    console.log(product)

    return (
        <div>
            <Link className="btn btn-dark my-3" to='/'>
                Go back
            </Link>

            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>

                <Col md={3}>
                    <ListGroup>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                        </ListGroup.Item>
                        <ListGroup.Item> Price: ${product.price} </ListGroup.Item>
                        <ListGroup.Item> Description: ${product.description} </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup varient='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col> Price: </Col>
                                    <Col> <strong>${product.price}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>

                </Col>
            </Row>

        </div>
    );
};

export default ProductScreen;

