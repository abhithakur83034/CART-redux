import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const navigate = useNavigate()
    const schema = yup.object().shape({
        image: yup.mixed().required('A file is required'),
        sku: yup.string().required(),
        name: yup.string().required(),
        price: yup.number().required().min(5, 'minimum price is 5').max(10, 'maximum price is 10'),
        model: yup.string().required(),
        manufacturer: yup.string().required(),
    });

    const initialValues = {
        image: null,
        sku: '',
        name: '',
        price: '',
        model: '',
        manufacturer: '',
    };

    const onSubmit = async (values, { resetForm }) => {
        console.log(values);
        try {
            const formData = new FormData();
            formData.append('image', values.image);
            formData.append('sku', values.sku);
            formData.append('name', values.name);
            formData.append('price', values.price);
            formData.append('model', values.model);
            formData.append('manufacturer', values.manufacturer);

            const response = await axios.post('http://localhost:4500/product/addproduct', formData);
            console.log(response.data);
            resetForm({});
            toast.success("product added")
            setTimeout(() => {
                navigate('/showproduct')
            }, 3000)
        } catch (error) {
            console.error('Error:', error);
            toast.error(error)
        }
    };

    return (
        <div>
            <Container>
                <Row className='mt-5'>
                    <Col>
                        <img src="https://media1.giphy.com/media/H1g5jLEFubKA6WlIGN/200w.webp?cid=ecf05e47k2699vytm3ytrde4xun293gtgdmai8r7dyqy59kp&ep=v1_gifs_search&rid=200w.webp&ct=g"
                            height="400px"
                            width="400px"
                            alt="" />

                    </Col>
                    <Col>
                        <Formik
                            validationSchema={schema}
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                        >
                            {({ handleSubmit, setFieldValue }) => (
                                <Card>
                                    <i> <Card.Title style={{ textAlign: "center" }}>Add Product!</Card.Title></i>
                                    <Card.Body>
                                        <Form encType='multipart/form-data' onSubmit={handleSubmit}>
                                            <p>
                                                <input
                                                    type='file'
                                                    name='image'
                                                    accept='image/*'
                                                    className='form-control'
                                                    onChange={(event) => {
                                                        setFieldValue('image', event.currentTarget.files[0]);
                                                    }}
                                                />
                                            </p>
                                            <p className='invalid'>
                                                <ErrorMessage name='image' />
                                            </p>
                                            <p>
                                                <Field
                                                    type='text'
                                                    name='sku'
                                                    className='form-control'
                                                    placeholder='Enter sku'
                                                />
                                            </p>
                                            <p className='invalid'>
                                                <ErrorMessage name='sku' />
                                            </p>
                                            <p>
                                                <Field
                                                    type='text'
                                                    name='name'
                                                    className='form-control'
                                                    placeholder='Enter name'
                                                />
                                            </p>
                                            <p className='invalid'>
                                                <ErrorMessage name='name' />
                                            </p>
                                            <p>
                                                <Field
                                                    type='number'
                                                    name='price'
                                                    className='form-control'
                                                    placeholder='Enter price'
                                                />
                                            </p>
                                            <p className='invalid'>
                                                <ErrorMessage name='price' />
                                            </p>
                                            <p>
                                                <Field
                                                    type='text'
                                                    name='model'
                                                    className='form-control'
                                                    placeholder='Enter model'
                                                />
                                            </p>
                                            <p className='invalid'>
                                                <ErrorMessage name='model' />
                                            </p>
                                            <p>
                                                <Field
                                                    type='text'
                                                    name='manufacturer'
                                                    className='form-control'
                                                    placeholder='Enter manufacturer'
                                                />
                                            </p>
                                            <p className='invalid'>
                                                <ErrorMessage name='manufacturer' />
                                            </p>
                                            <p>
                                                <button type='submit' className='btn btn-outline-dark'>
                                                    Add Product
                                                </button>
                                            </p>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddProduct;
