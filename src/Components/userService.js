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
            headers : {"Authorization" : "Basic cmFqaW50aGFuOjEyMzQ1Njc4"}
        })
    }

    getAllUsers(pageNo){
        return axios.get(USER_API_BASE_URL + "?pageNo=" + pageNo + "&pageSize=5",{headers : {"Authorization" : localStorage.getItem('tokenType') + " " + localStorage.getItem('token')}
        })
    }

    getSearchUser(searched , pageNo){
        return axios.get(USER_API_BASE_URL + "Searchedpage?searched=" + searched + "&pageNo=" + pageNo + "&pageSize=5",{headers : {"Authorization" : localStorage.getItem('tokenType') + " " + localStorage.getItem('token')}
        })
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL,user,
            {headers : {"Authorization" : localStorage.getItem('tokenType') + " " + localStorage.getItem('token')}
        })
    }

    updateUserByAdmin (id , user){
        return axios.put(USER_API_BASE_URL + id , user,{
            headers : {"Authorization" : localStorage.getItem('tokenType') + " " + localStorage.getItem('token')}
        })
    }

    deleteUser (id){
        return axios.delete(USER_API_BASE_URL + id ,{
            headers : {"Authorization" : localStorage.getItem('tokenType') + " " + localStorage.getItem('token')}
        })
    }

}

export default new userService();
