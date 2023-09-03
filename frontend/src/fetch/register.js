import instance from "../modules/axios";

export const register = async (body) => {
    try {

        const {name, email, password} = body

        const response = await instance ({
            method: "POST",
            url: "/register",
            data: {
                name,
                email,
                password
            }
        })

        return response

    } catch(err) {
        throw new Error(err)
    }

}