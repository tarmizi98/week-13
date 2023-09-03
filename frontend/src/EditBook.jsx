import { useState } from "react";
// import { addBook } from "./fetch/books";
import { 
    Container,
    FormControl,
    FormLabel,
    Input,
    Button
} from '@chakra-ui/react'
import { useNavigate, useParams } from "react-router-dom";
import { editBook } from "./fetch/books";
import Swal from 'sweetalert2'


function EditBook() {
    const { id } = useParams();
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [publisher, setPublisher] = useState("")
    const [year, setYear] = useState("")
    const [pages, setPages] = useState("")
    // const [image, setImage] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            const updatedData = {}; 

            if (title) updatedData.title = title;
            if (author) updatedData.author = author;
            if (publisher) updatedData.publisher = publisher;
            if (year) updatedData.year = +year;
            if (pages) updatedData.pages = +pages;

            await editBook(id, updatedData);

            Swal.fire({
                icon: 'success',
                title: 'Edit Book Success',
                showConfirmButton: false,
                timer: 1500
                })
            
            navigate("/")

            console.log(err)

        } catch(err) {
            console.log(err)
        }

    }

    return(
        <>
            <Container>
                <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input type='text' onChange={(e) => setTitle(e.target.value)} />
                    <FormLabel>Author</FormLabel>
                    <Input type='text' onChange={(e) => setAuthor(e.target.value)} />
                    <FormLabel>Publisher</FormLabel>
                    <Input type='text' onChange={(e) => setPublisher(e.target.value)} />
                    <FormLabel>Year</FormLabel>
                    <Input type='number' onChange={(e) => setYear(e.target.value)} />
                    <FormLabel>Pages</FormLabel>
                    <Input type='number' onChange={(e) => setPages(e.target.value)} />
                    {/* <FormLabel>Image</FormLabel> */}
                    {/* <Input type='file' onChange={(e) => setImage(e.target.files[0])} /> */}
                    <Button onClick={handleSubmit}>Submit</Button>
                </FormControl>
            </Container>
        </>
    )
}

export default EditBook;