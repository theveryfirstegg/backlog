'use client';
import { InputGroup, FormControl, Button, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { useEffect, useState } from "react";
import Link from 'next/link'
import './Search.css'



const SearchBar = (props : any) => {

    const [value, setValue] = useState('Enter game name');
    const [query, setQuery] = useState('');

    const [results, setResults] = useState<any[]>([]);
    const [filteredResults, setFilteredResults] = useState<any[]>([])

    const api_key = process.env.NEXT_PUBLIC_API_KEY

    const getGames = async () => {

        fetch(`https://api.rawg.io/api/games?key=${api_key}&search=${query}&page_size=10`)
        .then((response) => response.json())
        .then((responseJSON) => {
            setFilteredResults(responseJSON.results)
        })


    }

    useEffect(() => {
        getGames()
        
    }, [query])



    const handleFilter = (search : String) => {
        const res = filteredResults.filter(f => f.name.toLowerCase().includes(search))
        setResults(res.slice(0, 11));
    }

    const handleChange = (e : any) => {

        e.preventDefault()
        setQuery(e.target.value)

    }




    return(
        <Container>
            <InputGroup className="mb-3 mt-3">
            <FormControl type="text" size="sm" placeholder={value} 
            onChange={handleChange}></FormControl>
            <Button variant="outline-secondary" id='button-add2'>Search</Button>
            </InputGroup>

            <ListGroup>

                {
                filteredResults.map((result, index) => (<ListGroupItem><Link href={{
                    pathname: '/about-game',
                    query: {id: result.id}
                }}>{result.name}</Link></ListGroupItem>))


                }


              

            </ListGroup>

 
        </Container>
    )

}

export default SearchBar;