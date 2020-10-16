import React from 'react';
import products  from "../products"
import {Col, Row} from "react-bootstrap";
import Products from "../components/Products";



const HomeScreen = (props) => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(products => (
                    <Col sm={12} md={6} lg={4}>
                        <Products product={products}/>
                    </Col>
                ))}

            </Row>


        </>
    );
};

export default HomeScreen;

