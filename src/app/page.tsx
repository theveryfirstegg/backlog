
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


    )
    

}


