import {Link} from "react-router-dom"
import {Flex, Box} from "@chakra-ui/react"

function Navbar() {

    return (
       
        <Flex justifyContent="center" p="20px" bgColor="teal">
            <Box p="5px">
                <Link to="/">HOME</Link>
            </Box>
            <Box p="5px">
                <Link to="/add-book">ADD BOOK</Link>
            </Box>
            <Box p="5px">
                <Link to="/login">LOGIN</Link>
            </Box>
            <Box p="5px">
                <Link to="/register">REGISTER</Link>
            </Box>
        </Flex>
    
    )
}

export default Navbar;