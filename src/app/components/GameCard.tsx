import { Container, Card, CardImg, CardBody, CardText, CardImgOverlay, CardTitle, Button, ProgressBar, Badge, ListGroupItem  } from "react-bootstrap";
import Link from "next/link";



const GameCard = (props : any) => {


    return (
        <Card>
            <CardImg variant='top' src={props.image_url}></CardImg>
            <CardImgOverlay>
                <Badge bg='light' text='dark' style={{fontSize: 14}}>{props.critic_rating}</Badge>
            
            </CardImgOverlay>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardText><h3>{props.progress}h</h3></CardText>

                {props.genres?.map((genre : any) => (
                    <Badge bg='secondary' className="me-1 mb-3">{genre.name}</Badge>
                ))}

                

                {props.progress === 0 ? <p>No recorded game progress</p> : ( props.playtime === 0 ? 
                    <ProgressBar now={props.progress} label={`${props.progress}%`}></ProgressBar> :
                    <ProgressBar now={Math.round((props.progress/props.playtime) * 100)} label={`${Math.round((props.progress/props.playtime) * 100)}%`}></ProgressBar>)}

        
                <br></br>
                <ListGroupItem><Link href={{
                    pathname: '/about-game',
                    query: {id: props.id}
                }}>Update Progress</Link></ListGroupItem>
                
            </CardBody>

        </Card>

    )
}

export default GameCard;