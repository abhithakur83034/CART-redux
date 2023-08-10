import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from "axios";
import { toast } from 'react-toastify';
import '../../App.css';
const Register = () => {

    const schema = yup.object().shape({
        name:yup.string().required(),
        email:yup.string().required(),
        password:yup.string().required()
    });

    const validationSchema = schema

    const initialValues = {
        name:"",
        email:"",
        password:""
    }

    const onSubmit=(values,{resetForm})=>{
        console.log(values)
       axios
         .post("http://localhost:4500/user/register",values)
         .then((res)=>{
             console.log(res.data.message)
             toast.success(res.data.message)
             resetForm({})
         }).catch((error)=>{
            console.log(error)
            toast.error(error)
         })
    }

    return (
    <div>
        <Container>
            <Row className='mt-5'>
               <Col>
               <img src="https://media4.giphy.com/media/cPqHXws4tGUnUTzfwq/200w.webp?cid=ecf05e474ql9ffdon77nzafdtohf7fpq4l03cml4a1swnxkj&ep=v1_gifs_related&rid=200w.webp&ct=g"
               height="400px"
               width="400px"
               alt="" /></Col>

               <Col className='mt-5'>
                 <Formik
                 validationSchema={validationSchema}
                 initialValues={initialValues}
                 onSubmit={onSubmit}
                 >
                   <Card>
                     <i> <Card.Title style={{textAlign:"center"}}>User register!</Card.Title></i>
                      <Card.Body>
                      <Form>
                        <p>
                            <Field type="text" name='name' className="form-control" placeholder="Enter name" />
                        </p>
                        <p className='invalid'>
                            <ErrorMessage name='name' />
                        </p>
                        <p>
                            <Field type="email" name='email' className="form-control" placeholder="Enter email" />
                        </p>
                        <p className='invalid'>
                            <ErrorMessage name='email' />
                        </p>
                        <p>
                            <Field type="password" name='password' className="form-control" placeholder="Enter password" />
                        </p>
                        <p className='invalid'>
                            <ErrorMessage name='password' />
                        </p>
                        <p>
                            <Field type="submit" value="Register" className="btn btn-outline-dark" />
                        </p>
                    </Form>
                      </Card.Body>
                   </Card>
                 </Formik>
               </Col>
               
               
            </Row>
        </Container>
    </div>
  )
}

export default Register