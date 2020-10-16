import React, {useEffect, useState} from 'react';
import products from "../products"
import {Col, Row} from "react-bootstrap";
import Products from "../components/Products";
import  axios from "axios";


const HomeScreen = (props) => {

    const [products, setProducts] = useState([])

    useEffect( () => {
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products')

            setProducts(data)
        }
        fetchProducts().then(console.log("sdfg"))
    } )


    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(products => (
                    <Col key={products._id} sm={12} md={6} lg={4}>
                        <Products product={products}/>
                    </Col>
                ))}

            </Row>


        </>
    );
};

export default HomeScreen;

