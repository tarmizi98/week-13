import { useState } from "react";
import { 
    Container,
    FormControl,
    FormLabel,
    Input,
    Button
} from '@chakra-ui/react'
import { register } from "./fetch/register";


function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = async () => {
        
        const response = await register({name, email, password})
    }

    return(
        <>
            <Container>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input type='text' onChange={(e) => setName(e.target.value)} />
                    <FormLabel>Email</FormLabel>
                    <Input type='email' onChange={(e) => setEmail(e.target.value)} />
                    <FormLabel>Password</FormLabel>
                    <Input type='password' onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={handleRegister}>Register</Button>
                </FormControl>
            </Container>
        </>
    )
}

export default Register;