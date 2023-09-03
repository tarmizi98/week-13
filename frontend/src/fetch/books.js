import instance from "../modules/axios";
import { useParams } from "react-router-dom";

export const listBooks = async () => {

    try {

        const response = await instance ({
            method: "GET",
            url: "/books",
            
        })

        return response.data;

    } catch(err) {
        throw new Error(err)
    }
    
}

export const addBook = async (params) => {
    try {

        const response = await instance.postForm("/books", params)

        return response.data

    } catch(err) {
        throw new Error(err)
    }

}

export const deleteBook = async (id) => {
    try {
        const response = await instance({
            method: "DELETE",
            url: `/books/${id}`
        })

        return response.data;
    } catch(err) {
        throw new Error(err);
    }
}

export const editBook = async (id, data) => {
    try {
        
        const response = await instance({
            // const {id} = useParams,
            method: "PUT",
            url: `/books/${id}`,
            data
        })

        return response.data;
    } catch(err) {
        throw new Error(err);
    }
}