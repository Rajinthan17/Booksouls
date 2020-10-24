import React , {Component} from 'react';
import {Card, CardContent, Typography, Grid, FormControl, TextField,Paper, Icon} from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from '@material-ui/core/Button';
import ReplayIcon from '@material-ui/icons/Replay';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { Style } from '@material-ui/icons';
import SaveIcon from '@material-ui/icons/Save';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Alert from '@material-ui/lab/Alert';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import userService from './userService';




const style = {
    root: {
      minWidth: 500,
      backgroundColor:'#212121',
      marginTop: 20,
      // height: 400,
      color: '#fafafa'
    },
    textbox:{
      Width: '100%',
    },
    title: {
      fontSize: 24,
      textAlign:'left'
    },
    Button: {
      spacing: 4,
      buttonAligen:"left"
    },
}

export default class AddUser extends Component {

  constructor(){
    super()
    this.state = {
      alertMessage : false,
      open : false,
      name: "",
      email: "",
      address:"",
      phone:'',
      role : 'user'
    }
  }

  HandleUpdatePassword = () => {
    this.setState({
        UpdatePassword:true
    })
}

NameValidate = (e) => {
    this.setState({
        name : e.target.value
    })
}

AddressValidate = (e) => {
    this.setState ({
        address:e.target.value
    })
}
EmailValidate = (e) => {
    this.setState ({
        email:e.target.value
    })
}  
PhoneValidate = (e) => {
    this.setState ({
        phone:e.target.value
    })
}  
RoleChange = (e) => {
  this.setState ({
      role:e.target.value
  })
}
PasswordValidate = (e) => {
  this.setState ({
      password:e.target.value
  })
}
RePasswordValidate = (e) => {
  this.setState ({
      repassword:e.target.value
  })
}

save = () => {
  if(this.props.match.params.id){
    let _user = {
      email : this.state.email,
      address : this.state.address,
      phoneNum : this.state.phone,
      updateroles : [this.state.role]
    }

    userService.updateUserByAdmin(this.props.match.params.id,_user)
    .then((Response) => {
      console.log(Response)
    })
  }else{
    let _user = {
      username : this.state.name,
      email : this.state.email,
      address : this.state.address,
      phoneNum : this.state.phone,
      password : this.state.password,
      roles : [this.state.role]
    }

    userService.createUser(_user)
    .then((Response) => {
      console.log(Response)
    })
  }
}



componentDidMount() {
  ValidatorForm.addValidationRule('isUserName',(value) => {
      if((this.state.name.length>4)){
      return true;
      }
      return false;
      })
  ValidatorForm.addValidationRule('isEmail',(value) => {
      if(this.state.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ){
      return true;
      }
      return false;
      })
  ValidatorForm.addValidationRule('isAddress',(value) => {
      if((this.state.address.length>10)){
      return true;
      }
      return false;
      })
  ValidatorForm.addValidationRule('isPhone',(value) => {
      if((this.state.phone.length==10)){
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

      if(this.props.match.params.id){
        userService.getUserById(this.props.match.params.id)
        .then((Response) => {
            this.setState({
              name:Response.data.username,
              email : Response.data.email,
              phone : Response.data.phoneNum,
              address : Response.data.address,
            })
            if(Response.data.roles[0].name === "ROLE_ADMIN"){
              this.setState ({role:'admin'})
            }else{
              this.setState ({role:'user'})
            }
            console.log(Response)
        })
      }
  }



  render(){
      return(
          <Grid container>
            <Grid item xs={2}/>
            <Grid item xs={8}>
              <Card style={style.root}>
                <Paper style={{margin:20,}}>
                
                <CardContent>
                <ValidatorForm noValidate autoComplete="off" style={{width:'100%'}}>
                      <Grid container spacing={3}>
                      {/* <IconButton edge="start" style={style.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton> */}
                <Grid item xs={12}>
                <Icon >
                  <AddBoxIcon/>
                  </Icon>
                  
                      {this.props.match.params.id ? (
                      <span style = {{fontSize:30}}><b>Edit User</b></span>
                      ):(
                        <span style = {{fontSize:30}}><b>Add New User</b></span>
                      )}
                      </Grid>

                        {this.props.match.params.id ? (
                          <Grid item xs={6}>
                          <TextValidator 
                            disabled
                            required='true' 
                            label="Username" 
                            variant="outlined" 
                            helperText="Enter your username" 
                            validators={['required',"isUserName"]}
                            onChange={this.NameValidate} 
                            value={this.state.name}
                            errorMessages = {["This field is not Empty","Username must be more than 4 characters"]}
                            size="small"
                            style = {{width: 300}}
                            />
                          </Grid>
                          ) : (
                            <Grid item xs={6}>
                          <TextValidator 
                            
                            required='true' 
                            label="Username" 
                            variant="outlined" 
                            helperText="Enter your username" 
                            validators={['required',"isUserName"]}
                            onChange={this.NameValidate} 
                            value={this.state.name}
                            errorMessages = {["This field is not Empty","Username must be more than 4 characters"]}
                            size="small"
                            style = {{width: 300}}
                            />
                          </Grid>
                          )}
                        

                        <Grid item xs={6}>
                        <TextValidator 
                          required='true' 
                          label="E-Mail" 
                          variant="outlined" 
                          helperText="Enter your email" 
                          validators={['required',"isEmail"]}
                          errorMessages = {["This field is not Empty","E-Mail must be in E-Mail format"]}
                          value = {this.state.email} 
                          onChange = {this.EmailValidate} 
                          size="small"
                          style = {{width: 300}}
                          />
                        </Grid>

                        <Grid item xs={6}>
                        <TextValidator 
                          Required
                          required='true' 
                          label="Address" 
                          variant="outlined" 
                          helperText="Enter your Address" 
                          validators={['required',"isAddress"]}
                          errorMessages = {["This field is not Empty","Address must be more than 4 characters"]}
                          value = {this.state.address} 
                          onChange = {this.AddressValidate} 
                          size="small"
                          style = {{width: 300}}
                          />
                        </Grid>
                        <Grid item xs={6}>
                        <TextValidator 
                            Required
                            required='true' 
                            label="Phone Number" 
                            variant="outlined" 
                            helperText="Enter your Phone Number" 
                            validators={['required',"isPhone"]}
                            errorMessages = {["This field is not Empty","Phone Number must be in 10 Numbers"]}
                            value = {this.state.phone} 
                            onChange = {this.PhoneValidate} 
                            size="small"
                            style = {{width: 300}}
                            />
                        </Grid>
                        {this.props.match.params.id ? (null ):(
                          <>
                          <Grid item xs={6}>
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
                          </Grid>
                          <Grid item xs={6}>
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
                          </Grid>
                          </>
                        )}
                        <Grid item xs={6}>
                        <InputLabel id="role">Role</InputLabel>
                          <Select
                               fullWidth
                               id="role"
                               label="Role"
                               style = {{width: 300}}
                               value = {this.state.role}
                               onChange = {this.RoleChange}
                         >
                                <MenuItem value={"user"}>ROLE_USER</MenuItem>
                                <MenuItem value={"admin"}>ROLE_ADMIN</MenuItem>
                                </Select>
                        </Grid>
                        
                        <Grid item xs={6} style = {{align:'left'}} >
                          <input
                            accept="image/*"
                            display="none"
                            id="contained-button-file"
                            multiple
                            type="file"
                          />
                          {/* <span style = {{fontSize:12}}>Update your Profile picture </span> */}
                        </Grid>

                        <Grid item xs={1.5}>
                        <FormControl>
                          <Button
                               type="submit"
                               fullWidth
                               buttonAligen="left"
                               variant="contained"
                               color="primary"
                               startIcon={<saveIcon/>}
                               onClick={this.save}
                               
                           >
                             Save
                          </Button>
                       </FormControl>
                       </Grid>



                       <Grid item xs={1.5}>
                        <FormControl>
                          <Button
                               type="submit"
                               fullWidth
                               variant="contained"
                               color="primary"
                           >
                             RESET
                          </Button>
                       </FormControl>
                       </Grid>

                       <Grid item xs={2}>
                        <FormControl>
                        <Button
                               type="submit"
                               fullWidth
                               variant="contained"
                               color="primary"
                               href="/UserDetails"
                              
                               startIcon={< FormatListBulletedIcon/>}
                           >
                             
                             UserList
                          </Button>
                       </FormControl>
                       </Grid>
                      
                      </Grid>
                    </ValidatorForm>
                </CardContent>
                </Paper>
                 </Card>
            </Grid>
            <Grid item xs={2}/>
          </Grid>
      )
  }
}