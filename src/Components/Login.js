import React,{Component} from 'react';
import {Paper, Grid, TextField, Button} from '@material-ui/core';
import './LoginStyle.css';
import image2 from './image2.jpg'
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import AuthService from './AuthService';


export default class Login extends Component{
    constructor(){
        super()
        this.state = {
            username : "",
            password: "",
            repassword: "",
            fogot:false,
            codeSubmit : false,
            code : "",
            updatePassword:false,
        }
    }
    handelUpdatePassword = () => {
        this.setState({
            updatePassword:true
        })
    }
    fogotChange = () => {
        this.setState({
            fogot : true
        })
    }
    isCodeSubmit = () => {
        this.setState({
            codeSubmit : true
        })
    }
    CodeChange = (e) => {
        this.setState({
            code : e.target.value
        })
    }

    UserNameValidate = (e) => {
        this.setState({
            username : e.target.value
        })
    }

    PasswordValidate = (e) =>{
        this.setState({
            password : e.target.value
        })
    }
    RePasswordValidate = (e) => {
        this.setState ({
            repassword:e.target.value
        })
    }

    loginRender = () => {
        this.props.history.push('/home')
        window.location.reload()
    }

    handleSubmit = () => {
        if((this.state.username.length>4) && (this.state.password.length>=8) && (this.state.password.length<=16)){
            let _user = {
                username : this.state.username,
                password : this.state.password
            }
            AuthService.login(_user)
            .then((Response)=> {
                console.log(Response)
                localStorage.setItem('user',Response.data.username)
                localStorage.setItem('id',Response.data.id)
                localStorage.setItem('token',Response.data.basicToken)
                localStorage.setItem('tokenType',Response.data.tokenType)
                //console.log(localStorage.getItem('user'))
                // this.props.history.push('/home')
                // window.location.reload()
                this.loginRender()
            })
        }
    }

    componentDidMount(){
        ValidatorForm.addValidationRule('isUserName',(value) => {
            if((this.state.username.length>4)){
            return true;
            }
            return false;
            })
        
        ValidatorForm.addValidationRule('isPassword',(value) => {
            if((this.state.password.length>=8) && (this.state.password.length<=16)){
            return true;
            }
            return false;
            })
        ValidatorForm.addValidationRule('isRePassword',(value) => {
            if((this.state.repassword == this.state.password)){
            return true;
            }
            return false;
            })
    }
    render(){
        return(   
            !this.state.fogot ? (   
            <div style = {{padding:30}}>
                <Grid container spacing={1}  >
                <Grid item xs = {7} style = {{marginTop:40}}>
                    <img src= {image2} heigth = "50%" width = "50%" alt = "Background Books"/>
                </Grid>
                <Grid item xs={4} style = {{backgroundColor:"#8c8c8c"}}>
                    <Paper className = 'paper'>
                    <ValidatorForm noValidate autoComplete="off" style={{width:'100%'}}onSubmit={this.handleSubmit}>
                        <div>
                            <h1>
                                Login 
                            </h1>
                        </div>
                <div>
                <TextValidator 
                    required='true' 
                    label="Username" 
                    variant="outlined" 
                    helperText="Enter your username" 
                    validators={['required',"isUserName"]}
                    onChange={this.UserNameValidate} 
                    value={this.state.username}
                    errorMessages = {["This field is not Empty","Username must be more than 4 characters"]}
                    size="small"
                    style = {{width: 300}}
                    />
                </div>

                <div>
                <TextValidator 
                    Required
                    required='true' 
                    label="Password" 
                    type = 'password'
                    variant="outlined" 
                    helperText="Enter your Password" 
                    validators={['required',"isPassword"]}
                    errorMessages = {["This field is not Empty","Password must be between 8 & 16 characters"]}
                    value = {this.state.password} 
                    onChange = {this.PasswordValidate} 
                    size="small"
                    style = {{width: 300}}
                    />
                </div>
                <div>
                    <Button
                    type = 'submit'
                    size = 'large'
                    style = {{backgroundColor: '#8c8c8c'}}
                    >
                        Submit
                    </Button>
                </div>
                <h5>A New User <a href = "/signup">Create an Account</a></h5>
                <h5>Fogot password <u style = {{color:"blue"}}><a onClick = {this.fogotChange}>Click here</a></u></h5>
                </ValidatorForm>
                    </Paper>
                </Grid>
                </Grid>
            </div>
            ):( !this.state.codeSubmit ? (
                <div style = {{padding:20}}>
                <Grid container spacing={1}  >
                <Grid item xs = {7}>
                    <img src= {image2} heigth = "40%" width = "40%"/>
                </Grid>
                <Grid item xs={4} style = {{backgroundColor:"#8c8c8c"}}>
                    <Paper style = {{padding : 30}}>
                    <form onSubmit = {this.handleSubmit}>
                        <div>
                            <h1>
                                Fogotten Password 
                            </h1>
                        </div>
                <div>
                    <TextField 
                    name = "email"
                    placeholder = "Username/E-mail"
                    helperText = {this.state.emailError?(<span style = {{color: "red"}}>{this.state.emailError}</span>):("Please Enter Your Username/E-mail")}
                    label = "Username/E-mail"
                    variant="outlined"
                    onChange = {this.UserNameOrEmail}
                    onChange = {this.UserNameValidate}
                    />
                    <br/><br/>
                </div>
                <Button
                    size = 'large'
                    style = {{backgroundColor: '#8c8c8c'}}
                    onClick = {this.isCodeSubmit}
                    >
                        Send Code to the e-mail
                    </Button>
                </form>
                </Paper>
                </Grid>
                </Grid>
                </div>
            ):(!this.state.updatePassword ? (
                <div style = {{padding:20}}>
                <Grid container spacing={1}  >
                <Grid item xs = {7}>
                <img src= {image2} heigth = "40%" width = "40%"/>
                </Grid>
                <Grid item xs={4} style = {{backgroundColor:"#8c8c8c"}}>
                    <Paper style = {{padding : 30}}>
                    <form onSubmit = {this.handleSubmit}>
                        <div>
                            <h1>
                                Varification 
                            </h1>
                        </div>
                <div>
                <TextField 
                    Required
                    name = "code"
                    variant="outlined"
                    placeholder = "code"
                    helperText = "Enter Your varification Code"
                    onChange = {this.CodeChange}
                    />
                    <br/><br/>
                </div>
                <Button
                    size = 'large'
                    style = {{backgroundColor: '#8c8c8c'}}
                    onClick = {this.handelUpdatePassword}
                    >
                        Submit
                    </Button>
                </form>
                </Paper>
                </Grid>
                </Grid>
                </div>
            ):(
                <div style = {{padding:20}}>
                <Grid container spacing={1}  >
                <Grid item xs = {7}>
                    <img src= {image2} heigth = "40%" width = "40%"/>
                </Grid>
                <Grid item xs={4} style = {{backgroundColor:"#8c8c8c"}}>
                    <Paper style = {{padding : 30}}>
                    <ValidatorForm noValidate autoComplete="off" style={{width:'100%'}}onSubmit={this.handleSubmit}>
                        <div>
                            <h1>
                                Update Password 
                            </h1>
                        </div>
                        <div>
                        <TextValidator 
                    Required
                    required='true' 
                    label="Password" 
                    type = 'password'
                    variant="outlined" 
                    helperText="Enter your Password" 
                    validators={['required',"isPassword"]}
                    errorMessages = {["This field is not Empty","Password must be between 8 & 16 characters"]}
                    value = {this.state.password} 
                    onChange = {this.PasswordValidate} 
                    size="small"
                    style = {{width: 300}}
                    />
                </div>
{/* --------------------------------------------------------------------------- */}
                <div>
                <TextValidator 
                    Required
                    required='true' 
                    label="Password" 
                    type = 'password'
                    variant="outlined" 
                    helperText="Enter your Password Again" 
                    validators={['required',"isRePassword"]}
                    errorMessages = {["This field is not Empty","Password did not match"]}
                    value = {this.state.repassword} 
                    onChange = {this.RePasswordValidate} 
                    size="small"
                    style = {{width: 300}}
                    />
                </div>
{/* ------------------------------------------------------------- */}
                <Button
                    size = 'large'
                    style = {{backgroundColor: '#8c8c8c'}}
                    href = "/home"
                    // onClick={alert("Hello World!")}
                    >
                        Update
                    </Button>
                </ValidatorForm>
                </Paper>
                </Grid>
                </Grid>
                </div>
            )
            )
            )
            
    )
}
}