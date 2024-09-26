'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Link from "next/link";
import {
  Navbar,
  Container,
  NavbarBrand,
  NavLink,
  Nav,
  Row,
  Col,
  Button,
  NavItem,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import SearchBar from "../components/SearchBar";
import GameCard from "../components/GameCard";
import { signOut, useSession, signIn } from "next-auth/react";
import NavBar from "../components/NavBar";
import { Pagination, Card, CardBody, CardTitle, CardText, Form, FormControl, FormLabel, FormGroup } from "react-bootstrap";
import PaginationConfig from "../components/Pagination";
import GameList from "../components/GameList";

const getGames = async () => {

  try {
    const res = await fetch('/api/games', {
      cache: "no-store"

    })

    return res.json();

  } catch(error){
    console.log("Failed to get games", error)

  }

}


const Dashboard = () => {

  const [games, setGames] = useState({games: []});

  useEffect(() => {

    fetch('/api/games')
    .then((response) => response.json())
    .then((json) => setGames(json))


    /* const fetchGames = async () => {
      const result = await getGames();
      setGames(await result);
      
    }

    fetchGames()
     */
    

  }, [])


  const startingGameData = {
    id: 0,
    name: "Placeholder name",
    background_image: "placeholder img",
    genres: ["ph genre"],
    metacritic: 100,
    playtime: 10,
    progress: 1,
    description: "placeholder description"
  }




 





  return (
    <>
      
      
          <div>

            <NavBar></NavBar>
            

            <Container>

            </Container>

            <div className="p-4">
              <h1>Dashboard</h1>
              <p>Welcome to the home page</p>

           

              <SearchBar></SearchBar>


              <br></br>

              <div>
                <h2>Games in Progress</h2>


                <Container>
                  <Row xs={1} md={2}>

                    {  
                      games.games.map((game : any) => (
                        <GameCard name={game.name} description="this is a game" image_url={game.background_image} critic_rating={game.metacritic} genres={game.genres} id={game.id} progress={game.progress} playtime={game.playtime}></GameCard>

                      )
                      )

                    }



                  </Row>

                </Container>

   

             


              </div>

              

              
            </div>
          </div>
    
      
    </>
  );
}

export default Dashboard;