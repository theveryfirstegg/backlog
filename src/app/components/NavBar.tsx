
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, Container, Nav, NavItem, NavLink, Image } from "react-bootstrap";

import { signOut } from "next-auth/react";


export default function NavBar(){
    return(
        <Navbar bg="dark" className="mb-4">
              <Container>
                <NavbarBrand>
                  <Image src="/backlog(4).png" alt="" width={100} height={60} />
                </NavbarBrand>

                <Nav className="me-auto">
                    <NavItem>
                        <NavLink href='/dashboard'>Home</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink>Search</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink>Wishlist</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink>Analytics</NavLink>
                    </NavItem>
                  
           
                </Nav>


                <Nav className="justify-content-end">
                    <NavItem>
                        <NavLink onClick={() => signOut()}>Log Out</NavLink>
                    </NavItem>

                </Nav>
              </Container>
            </Navbar>
    )
}