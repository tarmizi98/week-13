import { useState } from "react";
import { 
    Container,
    FormControl,
    FormLabel,
    Input,
    Button
} from '@chakra-ui/react'
import { login } from "./fetch/auth";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = async () => {
        
        try {
            await login({email, password})
    
            Swal.fire({
                icon: 'success',
                title: 'Loggin Success',
                showConfirmButton: false,
                timer: 1500
                })

            navigate("/")

        } catch(err) {
            Swal.fire({
                icon: 'Failed',
                title: 'Loggin Failed',
                text: 'Invalid Email or Password'
                })
        }
        
    }

    return(
        <>
            <Container>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' onChange={(e) => setEmail(e.target.value)} />
                    <FormLabel>Password</FormLabel>
                    <Input type='password' onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={handleLogin}>LOGIN</Button>
                </FormControl>
            </Container>
        </>
    )
}

export default Login;