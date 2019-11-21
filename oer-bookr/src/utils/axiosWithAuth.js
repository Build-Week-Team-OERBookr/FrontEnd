import axios from 'axios';

// Axios helper function
const axiosWithAuth = () => {

    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        baseURL: `https://oerbookr.herokuapp.com/api`
        
    });
};


export default axiosWithAuth