
'use client'
import React, { Suspense, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { Image, Badge, Card, CardImg, CardTitle, CardBody, CardText, Button, Tabs, Tab, Form, FormGroup, FormLabel, FormControl, Modal, ModalBody, ModalHeader, ModalFooter, ModalTitle } from 'react-bootstrap';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';


const AboutGamePage = () => {
    const router = useRouter()
    


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

    const [game, setGame] = useState(startingGameData);
    const [filteredJSON, setFilteredJSON] = useState('')

    //Modal values
    const [show, setShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('')
    const [modalMessage, setModalMessage] = useState('')


    const searchParam = useSearchParams(); 
    const id = searchParam.get("id");
    const [gameProgress, setGameProgress] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const messageChange = (newMessage : string) => setModalMessage(newMessage);
    const titleChange = (newMessage : string) => setModalTitle(newMessage)


    const addGame = async () => {

        const res = await fetch("/api/games", {
            method: "POST",
            body: JSON.stringify({game}),

        })

        if(!res.ok){
            throw new Error('Failed to create Game.')
        }

        else{
            const result = await res.json();
            messageChange(result.message)
            titleChange('Game added')
            
            handleShow()
        }


        router.refresh()
            

        
       
    }

    const deleteGame = async () => {
        const res = await fetch(`/api/games?id=${id}`, {
            method: 'DELETE',
        });

        if(res.ok){
            const result = await res.json()
            messageChange('This game was deleted from your library')
            titleChange('Game deleted')
            
            handleShow()
            router.refresh()
        }
        else {
            alert('error deleting game')
        }
    }

    const handleChange = (event : any) => {
        setGameProgress(event.target.value)

    }

    const onSubmitProgress = async () => {
        const asNum = Number(gameProgress);
        
        if(Number.isInteger(asNum) && asNum >= 0){


        const res = await fetch(`/api/games?id=${id}`, {
            method: 'PUT',
            body: JSON.stringify({progress: gameProgress})
            

        })
        

        if(res.ok){
            const result = await res.json();
            alert(result.message)
            router.refresh()

        }

    }
        else {
            messageChange('The value you have entered is invalid')
            titleChange('Error')

            handleShow()

        }
    }

   
  

    const getGame = async () => {
        fetch(`https://api.rawg.io/api/games/${id}?key=f0547a319b084f418db89aa4a9ea2cb6`)
        .then((response) => response.json())
        .then((responseJSON) => {
            const foundGame = {
                id: responseJSON.id,
                name: responseJSON.name,
                background_image: responseJSON.background_image,
                genres: responseJSON.genres,
                metacritic: responseJSON.metacritic,
                playtime: responseJSON.playtime,
                progress: 0,
                description: responseJSON.description

            }
            setGame(foundGame)
        })
    }

    useEffect(() => {
        getGame()
    
        
        
    }, [])





    return (
        <Suspense>
        <div>
            <NavBar></NavBar>

            <div className='p-4'>

                <Card>
                    <CardImg variant='top' src={game.background_image}></CardImg>
                    <CardBody>
                        <CardTitle>{game.name} <Badge>{game.metacritic}</Badge></CardTitle>

                        <Tabs defaultActiveKey="about-this-game" className='mb-3 text-dark' style={{color: 'black'}}>
                            <Tab eventKey="about-this-game" title='About this game'>


                                {game.genres?.map((genre : any) => (
                                    <Badge bg='secondary' className="me-1 mb-3">{genre.name}</Badge>
                                ))}

                                <p>{game.description}</p>

                            </Tab>

                            <Tab eventKey="your-progress" title='Your progress'>

                                <Form>
                                    <FormGroup>
                                        <FormLabel>Enter your playtime</FormLabel>
                                        <FormControl type='number' className='mb-3' value={gameProgress} onChange={handleChange}></FormControl>


                                    </FormGroup>

                                    <Button onClick={onSubmitProgress} className='mb-3'>Submit Progress</Button>
                                </Form>



                            </Tab>



                        </Tabs>


                        

                        


                        <Button variant='primary' onClick={addGame} className='me-3'>Add Game</Button>
                        <Button variant='primary' onClick={deleteGame}>Delete Game</Button>
                    </CardBody>


                </Card>

                





            </div>

            <Modal show={show} onHide={handleClose}>
                <ModalHeader closeButton>
                    <ModalTitle>{modalTitle}</ModalTitle>
                </ModalHeader>

                <ModalBody> {modalMessage} </ModalBody>

                <ModalFooter>
                    <Button variant="primary" onClick={handleClose}>Ok</Button>

                </ModalFooter>
            
            </Modal>


       



        </div>
        </Suspense>

    )

    

}

export default function AboutGame() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AboutGamePage />
        </Suspense>
    )
}


        
