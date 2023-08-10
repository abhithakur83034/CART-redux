import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { item } from '../../redux/action/action';
const ShowProduct = () => {
    const productData = useSelector((state) => state.productData)
    const cartData = useSelector((state) => state.cartData)
    console.log("cartData", cartData)
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    const navigate = useNavigate();

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

    const handleDel = (id) => {
        axios.delete('http://localhost:4500/product/delete/' + id)
            .then((res) => {
                if (res.data) {
                    toast.success('Data deleted');
                    // setTimeout(() => {
                    //     navigate(0);
                    // }, 3000);
                } else {
                    toast.error('Unable to delete');
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error('An error occurred while deleting');
            });
    };


    const handleEdit = (id) => {
        navigate('/updateproduct/' + id)
    }




    let admin = JSON.parse(localStorage.getItem('admin'))


    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <h2>
                    <i >
                        Our Product's
                    </i>
                </h2>
            </div>

            <Table striped bordered hover size="sm" className='mt-5'>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Image</th>
                        <th>SKU</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                        {
                            admin ?
                                (
                                    <>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </>
                                )
                                :
                                ""
                        }
                        <th>AddToCart</th>
                    </tr>
                </thead>
                <tbody>

                    {data?.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td><b>{index}</b></td>
                                <td>
                                    {' '}
                                    <img src={`http://localhost:4500/img/${item.image}`} height="100px" width="100px" alt="" />{' '}
                                </td>
                                <td> {item.sku} </td>
                                <td> {item.name} </td>
                                <td> {item.price} </td>
                                <td> {item.model} </td>
                                <td> {item.manufacturer} </td>
                                {/* <td> <Button variant="outline-info" onClick={() => { handleEdit(item._id); }}>Edit</Button> </td> */}
                                {
                                    admin ?
                                        <td>
                                            <img src="https://media4.giphy.com/media/xBmALL5TlYMjaZ59vN/200w.webp?cid=ecf05e473esm4j60t74a8esa7h7w4iln8t2fsc33jnhzc20t&ep=v1_stickers_search&rid=200w.webp&ct=s"
                                                height="100px"
                                                width="150px"
                                                onClick={() => { handleEdit(item._id); }}
                                                alt="" />
                                        </td>
                                        :
                                        ""
                                }
                                {/* <td> <Button variant="outline-danger" onClick={() => { handleDel(item._id); }}>Delete</Button> </td> */}
                                {
                                    admin ?
                                        <td>
                                            <img src="https://media3.giphy.com/media/A4LerjrVwDbQ7WgZRk/200w.webp?cid=ecf05e47odvkiscxlxe8jiewlim2jcrpapa7eqtfxorvgxfu&ep=v1_stickers_search&rid=200w.webp&ct=s"
                                                height="80px"
                                                width="150px"
                                                onClick={() => { handleDel(item._id); }}
                                                alt="" />
                                        </td>
                                        :
                                        ""
                                }
                                {/* <td> <Button variant="outline-success" onClick={()=>{
                                    return dispatch({type:"ADD_TO_CART", payload:{...item}})
                                }}>Add</Button> </td> */}
                                <td>
                                    <img src="https://media0.giphy.com/media/SMEGj0pb5eUKcnot8x/200w.webp?cid=ecf05e47r5ejpchlese5scldbkias3idl5dmojnm3xd4a2tj&ep=v1_gifs_search&rid=200w.webp&ct=g"
                                        height="80px"
                                        width="100px"
                                        onClick={() => {
                                            return dispatch({ type: "ADD_TO_CART", payload: { ...item } })
                                        }}
                                        alt="" />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default ShowProduct;
