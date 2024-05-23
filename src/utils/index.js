import axios from "axios"



export const getAllPropertiesBySeller = async (id) => {
    try {
        const response = await axios.get(`https://rently-backend-b2il.onrender.com/property/getAllPropertiesBySeller/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}


//Pagination.
export const getAllPropertiesByPgNo = async (pgno) => {
    console.log(pgno);
    try {
       const response =await axios.get(`https://rently-backend-b2il.onrender.com/property/getAllPropertiesByPgNo/${pgno}`);
       return response;
    } catch (error) {
        console.log(error);
    }
}

export const getPropertyById = async (id) => {
    try {
        const response = await axios.get(`https://rently-backend-b2il.onrender.com/property/getPropertyById/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const addProperty = async (propertyData) => {
    try {
        const response = await axios.post(`https://rently-backend-b2il.onrender.com/property/addProperty`, propertyData);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const updateProperty = async (data) => {
    try {
        const response = await axios.put(`https://rently-backend-b2il.onrender.com/property/updateProperty`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const deletePropertyById = async (id) => {
    try {
        const response = await axios.delete(`https://rently-backend-b2il.onrender.com/property/deletePropertyById/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}








export const getUserByEmail = async (email) => {
    try {
        const response = await axios.get(`https://rently-backend-b2il.onrender.com/users/getUserByEmail/${email}`);
        return response;
    } catch (error) {
        throw error.request.status;
    }
}


export const signInUser = async (user) => {
    const { email } = user;
    try {
        const response = await axios.get(`https://rently-backend-b2il.onrender.com/users/getUserByEmail/${email}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return "error";
    }
}


export const signUpUser = async (user) => {
    try {
        const response = await axios.post(`https://rently-backend-b2il.onrender.com/users/addUser`, user);
        if (response) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}



