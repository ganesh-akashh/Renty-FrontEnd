import axios from "axios"



export const getAllPropertiesBySeller = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/property/getAllPropertiesBySeller/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}


//Pagination.
export const getAllPropertiesByPgNo = async (pgno) => {
    console.log(pgno);
    try {
       const response =await axios.get(`http://localhost:8080/property/getAllPropertiesByPgNo/${pgno}`);
       return response;
    } catch (error) {
        console.log(error);
    }
}

export const getPropertyById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/property/getPropertyById/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const addProperty = async (propertyData) => {
    try {
        const response = await axios.post(`http://localhost:8080/property/addProperty`, propertyData);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const updateProperty = async (data) => {
    try {
        const response = await axios.put(`http://localhost:8080/property/updateProperty`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const deletePropertyById = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8080/property/deletePropertyById/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}








export const getUserByEmail = async (email) => {
    try {
        const response = await axios.get(`http://localhost:8080/users/getUserByEmail/${email}`);
        return response;
    } catch (error) {
        throw error.request.status;
    }
}


export const signInUser = async (user) => {
    const { email } = user;
    try {
        const response = await axios.get(`http://localhost:8080/users/getUserByEmail/${email}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return "error";
    }
}


export const signUpUser = async (user) => {
    try {
        const response = await axios.post(`http://localhost:8080/users/addUser`, user);
        if (response) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}



