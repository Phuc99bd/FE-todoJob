import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import React, { useEffect,useState } from "react";
import InitUser from "../helper/initUser";

const NavbarItem = () => {
  let [user,setUser] = useState("");
  useEffect(()=>{
    initUser();
  },[])

  const initUser = async()=>{
    let data = await InitUser();
    if(data.error){
      setUser("error");
    }else{
      setUser(data.user);
    }
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Todo Job</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home Page</Nav.Link>
        
        </Nav>
        <Nav>
        <NavDropdown title={user.name} id="collasible-nav-dropdown">
            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
          
          </NavDropdown>
          <Nav.Link href="#"></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavbarItem;
