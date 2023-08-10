import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import '../../App.css';
import {  useSelector } from 'react-redux';
function NAVBAR() {
    const navigate = useNavigate();
    const cartData = useSelector((state) => state.cartData)
    console.log("cartData", cartData)
    // const dispatch = useDispatch()

    let user = JSON.parse(localStorage.getItem('user'))
    let admin = JSON.parse(localStorage.getItem('admin'))
    let logout=()=>{
        localStorage.removeItem('user');
        localStorage.removeItem('admin');
        navigate('/')
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                 <i><Navbar.Brand style={{color:"red"}} > <b>DRAGON_CART</b> </Navbar.Brand></i> 
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav><Link to="/" className='deco'>Home</Link></Nav>
                
                    {
                      admin ||  user ?
                        "" 
                            :
                            <Nav><Link to="/admin" className='deco'>Admin</Link></Nav>
                    }
                    {
                      admin ||  user ?
                        "" 
                            :
                        <Nav><Link to="/register" className='deco'>Register</Link></Nav>
                    }
                    {
                       admin || user ?
                        "" 
                            :
                            <Nav><Link to="/login" className='deco'>LogIn</Link></Nav>
                    }
                    {
                      admin ||  user ?
                        <Nav><Link to="/showproduct" className='deco'>Dashboard</Link></Nav>
                            :
                            ""
                    }
                    {
                      admin ||  user ?
                        <Nav><Link to="/addproduct" className='deco'>AddProduct</Link></Nav>
                            :
                           ""
                    }
                    {
                     admin ||   user ?
                        <Nav><Link to="/gallery" className='deco'>Gallery</Link></Nav>
                            :
                            ""
                    }
                    {
                     admin ||   user ?
                        <Nav><Link to="/cart" className='deco'>GoToCart <span style={{color:"red"}} >{cartData?.length}</span> </Link></Nav>

                            :
                               ""
                  }
                    {
                      admin ||  user ?
                        <Nav><span className='deco' style={{cursor:"pointer"}} onClick={()=>{logout()}} >LogOut</span></Nav>

                            :
                               ""
                  }
                    
                    
                    
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NAVBAR;