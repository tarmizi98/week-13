import { useEffect, useState } from "react"
import { listBooks, deleteBook, editBook } from "./fetch/books"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text,
    Spinner,
    Center,
    Image,
    Button
} from '@chakra-ui/react'
import Swal from 'sweetalert2'
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Home() {

    const [books, setBooks] = useState([])
    const navigate = useNavigate()

    const fetchBooks = async () => {
        const response = await listBooks()
        console.log(response)
        setBooks(response.books)
    }

    useEffect(() => {

        fetchBooks()

    }, [])

    const handleEditBook = async (id, params) => {

        try {
            // const {id} = useParams
            // await editBook(id, params);

            // // Swal.fire({
            // //     icon: "success",
            // //     title: "Delete Success",
            // //     showConfirmButton: false,
            // //     timer: 1500
            // // })

            // fetchBooks();

            // navigate("/edit-book/:id")

        } catch(err) {
            console.log(err);
            Swal.fire({
                icon: "error",
                title: "Delete Failed",
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    const handleDeleteBook = async (id) => {

        try {

            await deleteBook(id);

            Swal.fire({
                icon: "success",
                title: "Delete Success",
                showConfirmButton: false,
                timer: 1500
            })

            fetchBooks();

            navigate("/")

        } catch(err) {
            console.log(err);
            Swal.fire({
                icon: "error",
                title: "Delete Failed",
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    return(
        <>
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>No</Th>
                            <Th>Title</Th>
                            <Th>Author</Th>
                            <Th>Publisher</Th>
                            <Th>Year</Th>
                            <Th>Pages</Th>
                            <Th>Image</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {books.map((book, index) => {
                            return (
                                <Tr key={index}>
                                    <Td>{index+1}</Td>
                                    <Td>{book.title}</Td>
                                    <Td>{book.author}</Td>
                                    <Td>{book.publisher}</Td>
                                    <Td>{book.year}</Td>
                                    <Td>{book.pages}</Td>
                                    <Td><Image boxSize='50px' objectFit="cover" src={`http://localhost:8000/${book.image}`} alt="image file"/></Td>
                                    <Td>
                                        <Link to={`/edit-book/${book.id}`}>
                                            <Button colorScheme='blue' onClick={(e) => handleEditBook(book.id)}>EDIT</Button>
                                        </Link> 
                                    </Td>
                                    <Td><Button colorScheme='red' onClick={(e) => handleDeleteBook(book.id)}>DELETE</Button></Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Home