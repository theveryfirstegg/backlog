
import { Pagination, PageItem, } from "react-bootstrap";

const PaginationConfig = (props : any) => {

    let active = props.currentPage;
    let items = [];

    const pagesCount = Math.ceil(props.items/props.pageSize);

    for(let number = 1; number <= pagesCount; number++) {
        items.push(
            <PageItem key={number} active={number === active}>{number}</PageItem>

        );
        
    }


    return (
     
        
        <Pagination>
            <Pagination.First></Pagination.First>
            <Pagination.Prev></Pagination.Prev>
            <Pagination.Next onClick={props.onPageChange}></Pagination.Next>
            <Pagination.Last></Pagination.Last>
            
        </Pagination>
    )
}

export default PaginationConfig;