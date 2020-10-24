import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8081/user/';

class userService {

    updateUserByUser (id,user){
        return axios.put(USER_API_BASE_URL + "user/" + id , user,{
            headers : {"Authorization" : localStorage.getItem('tokenType') + " " + localStorage.getItem('token')}
        })
    }

    getUserById(id){
        return axios.get(USER_API_BASE_URL + id,{
            headers : {"Authorization" : localStorage.getItem('tokenType') + " " + localStorage.getItem('token')}
        })
    }

    updatePassword(id,oldPassword,newPassword){
        return axios.put(USER_API_BASE_URL + "password/" + id + "?oldPassword=" + oldPassword + "&newPassword=" + newPassword,{
            headers : {"Authorization" : "Basic cmFqaToxMjM0NTY3OA=="}
        })
    }

}

export default new userService();
