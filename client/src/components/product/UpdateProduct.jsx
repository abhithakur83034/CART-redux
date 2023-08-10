import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const schema = yup.object().shape({
    sku: yup.string().required(),
    name: yup.string().required(),
    price: yup.number().required(),
    model: yup.string().required(),
    manufacturer: yup.string().required(),
  });

  useEffect(() => {
    axios.get('http://localhost:4500/product/update/' + id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const initialValues = {
    sku: product ? product.sku : '',
    name: product ? product.name : '',
    price: product ? product.price : '',
    model: product ? product.model : '',
    manufacturer: product ? product.manufacturer : '',
  };

  const onSubmit = async (values, { resetForm }) => {
    console.log(values);
    try {
      const response = await axios.put(`http://localhost:4500/product/update/${id}`, values);
      console.log(response.data);
      resetForm({});
      navigate('/showproduct');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Container>
        <Row className='mt-5'>
          <Col>
          <img src="https://media1.giphy.com/media/FtXWChRfsZX1z3rOGn/giphy.webp?cid=ecf05e473incwm4dxkgrlliko885m2qqimwds3h5osz7ueyz&ep=v1_gifs_search&rid=giphy.webp&ct=g" 
          width="500px"
          height="600px"
          alt="" /></Col>
          <Col>
            <Formik
              validationSchema={schema}
              initialValues={initialValues}
              onSubmit={onSubmit}
              enableReinitialize
            >

              <Card className='mt-5'>
                <i><Card.Title style={{textAlign:"center"}}>Update Product!</Card.Title></i>
                <Card.Body>
                  <Form  >

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
                        Update Product
                      </button>
                    </p>
                  </Form>
                </Card.Body>
              </Card>

            </Formik>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default UpdateProduct;
