import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from "axios";
import { toast } from 'react-toastify';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
const Admin = () => {
    const navigate = useNavigate();

    const schema = yup.object().shape({
        email:yup.string().required(),
        password:yup.string().required()
    });

    const validationSchema = schema

    const initialValues = {
        email:"",
        password:""
    }

    const onSubmit=(values,{resetForm})=>{
        console.log(values)
       axios
         .post("http://localhost:4500/admin/adminlogin",values)
         .then((res)=>{
             console.log(res.data)
             localStorage.setItem("admin",JSON.stringify(res.data))
             toast.success(res.data.message)
             resetForm({})
             navigate('/')
         }).catch((error)=>{
            console.log(error.response.data)
            toast.error(JSON.stringify(error.response.data))
         })
    }

    return (
    <div>
        <Container>
            <Row className='mt-5'>
               <Col>
               <img src="https://media1.giphy.com/media/RHigihI7PAcelUUwQA/200.webp?cid=ecf05e47zsey2q7pqnvymgdrirak1cb617lp287i5tegdzh1&ep=v1_gifs_search&rid=200.webp&ct=g"
                height="400px"
                width="400px"
               alt="" /></Col>

               <Col className='mt-5'>
                 <Formik
                 validationSchema={validationSchema}
                 initialValues={initialValues}
                 onSubmit={onSubmit}
                 >
                   <Card className='mt-5'>
                     <i> <Card.Title style={{textAlign:"center"}}>Admin Login!</Card.Title></i>
                      <Card.Body>
                      <Form>
                       
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
                            <Field type="submit" value="Login" className="btn btn-outline-info" />
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

export default Admin