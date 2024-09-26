
import { Container, Row, Col, Pagination } from "react-bootstrap";
import GameCard from "./GameCard";

const GameList = (props : any) => {


   

    const gamelist = props.games.games

    //const gamelist : any = []


    


    return (
    <div>
      

        <Container>
            <Row>
               {  
                    gamelist.map((game : any) => (
                        <GameCard name={game.name} description="this is a game" image_url={game.background_image} critic_rating={game.metacritic} genres={game.genres} id={game.id}></GameCard>

                    ))

                }






            </Row>

        </Container>

        {/* <Container>
            <Row>
                      
                {
                          props.games.map((game : any) => (
                            <Col>
                                <GameCard name={game.name} description="this is a game" image_url={game.background_image} critic_rating={game.metacritic} genres={game.genres} id={game.id}></GameCard>
                            </Col>
                            
                          ))    
                        
                      
                        }

                        

                    </Row>

                    
                    
                  <Row>
                    {" "}
                    <Col>
                      
                    </Col>
                    <Col>Row 1 Col2</Col> <Col>Row 1 Col 3</Col>{" "}
                    <Col>Row 1 Col 4</Col>
                  </Row>

                  <Row>
                    {" "}
                    <Col>Row 2 Col 1</Col> <Col>Row 2 Col1</Col>{" "}
                    <Col>Row 2 Col 3</Col> <Col>Row 2 Col 4</Col>
                  </Row>
                </Container> */}
        </div>
    )

}

export default GameList;