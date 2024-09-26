'use client';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl, InputGroup, Button, Container } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";





export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const onSubmit = (e: React.FormEvent) => {

        e.preventDefault() // the default action that belongs to the event won't occur

        signIn('credentials', {
            username,
            password,
            callbackUrl: '/dashboard'
        })
       
 
    }




    return (
        <body className="bg-secondary" >

        

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

            <Button type='submit' onClick={onSubmit}> Login</Button>

        </Container>

        </body>
    )
}