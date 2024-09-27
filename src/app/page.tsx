
'use client';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from "next/navigation";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { FormControl, Button } from "react-bootstrap";
import { signIn } from "next-auth/react";
import Dashboard from "./dashboard/page";






export default function App() {

    const router = useRouter();



    



    return (

    
      <main>
        <Dashboard></Dashboard>
      </main>


       /*  <body className="bg-secondary" >

        

        <Container className="d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '100vh' }}>
            
            <h1 className="text-center mb-3">Log In</h1>
            <InputGroup className="mb-5">
                <InputGroupText>email</InputGroupText>
                <FormControl type='text' placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)}></FormControl>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroupText>password</InputGroupText>
                <FormControl type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></FormControl>
            </InputGroup>

            <Button type='submit' onClick={() => signIn('github')}> Login</Button>

        </Container>

        </body> */
    )
    

}


