import React, { useEffect, useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { item } from '../../redux/action/action';
const Home = () => {

    // console.log("home",HomeData)


    const productData = useSelector((state) => state.productData)
    const cartData = useSelector((state) => state.cartData)
    console.log("cartData", cartData)
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    // const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4500/product/showproduct')
            .then((res) => {
                dispatch({ payload: item(res.data), type: "PRODUCT" })
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    useEffect(() => {
        setData(productData.data.payload)
    }, [productData])



    return (
        <div>
            <Container fluid >
                <Carousel>
                    {data?.length !== 0 && data?.map((item, index) => {
                        return (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100 z"
                                    src={`http://localhost:4500/img/${item.image}`}
                                    alt=" slide"
                                   
                                />
                                
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </Container>

          
        </div>
    );
};

export default Home;
