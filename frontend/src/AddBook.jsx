import { useState } from "react";
import { addBook } from "./fetch/books";
import { 
    Container,
    FormControl,
    FormLabel,
    Input,
    Button
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


function AddBook() {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [publisher, setPublisher] = useState("")
    const [year, setYear] = useState("")
    const [pages, setPages] = useState("")
    const [image, setImage] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            
            let formData = new FormData()
            formData.append('title', title)
            formData.append('author', author)
            formData.append('publisher', publisher)
            formData.append('year', year)
            formData.append('pages', pages)
            formData.append('image', image)
                        
            await addBook(formData)

            Swal.fire({
                icon: 'success',
                title: 'Create Book Succes',
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
                    <FormLabel>Image</FormLabel>
                    <Input type='file' onChange={(e) => setImage(e.target.files[0])} />
                    <Button onClick={handleSubmit}>Submit</Button>
                </FormControl>
            </Container>
        </>
    )
}

export default AddBook;