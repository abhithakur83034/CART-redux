import React from 'react'
import { Table,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
    const cartData = useSelector((state) => state.cartData)
    console.log("cartData", cartData)

    const dispatch = useDispatch()


    let totalAmmount = cartData.reduce((total,item)=>total + item.quantity * item.price, 0)
    let totalQuantity = cartData.reduce((total,item)=>total + item.quantity, 0)

  return (
    <div>
         <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Image</th>
                        <th>SKU</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                        <th>Inc/Dec</th>
                        <th>Delete</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        cartData.map((item,index)=>{
                            return(
                                <tr key={index}>
                                   <td>{index}</td>
                                <td>
                                    {' '}
                                    <img src={`http://localhost:4500/img/${item.image}`} height="100px" width="100px" alt="" />{' '}
                                </td>
                                <td> {item.sku} </td>
                                <td> {item.name} </td>
                                <td> {item.price} </td>
                                <td> {item.model} </td>
                                <td> {item.manufacturer} </td>
                                <td> 
                                  <Button variant="outline-success" onClick={()=>dispatch({type:"INCREMENT", payload:item})} >Inc</Button> &nbsp;
                                  <span >{item.quantity}</span>    
                                  &nbsp; <Button variant="outline-danger" onClick={()=>dispatch({type:"DECREMENT", payload:item})}>Dec</Button>     
                                </td>
                                <td>
                                <Button variant="outline-danger" onClick={()=>dispatch({type:"REMOVE_ALL", payload:item})}>Remove</Button>
                                    
                                </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <span>
                <p><b> <i>Total Price : {totalAmmount}</i> </b></p>
                </span>
                <span>
                <p><b><i>Total Quantity : {totalQuantity}</i></b></p>
                </span>
            </Table>
    </div>
  )
}

export default Cart