import React , {Component} from 'react';
import {Card, CardContent, Typography, Grid, FormControl, TextField,Paper, Icon} from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from '@material-ui/core/Button';
import ReplayIcon from '@material-ui/icons/Replay';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { Style } from '@material-ui/icons';
import SaveIcon from '@material-ui/icons/Save';
// import Alert from '@material-ui/lab/Alert';




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

export default class Home extends Component {

  // constructor(){
  //   super()
  //   this.state = {
  //     alertMessage : false,
  //     open : false
  //   }
  // }

  // IsAlert =  () =>{
  //   this.setState ({
  //     alertMessage : true,
  //     open : false,
  //   })
  // };

//   constructor(props){
//     super(props)
//     this.state = {
//         successful : true,
//         message:''
//     }
// }

// Booksave = (e) => {
//   e.preventDefault();
//   this.setState({
//     successful: false,
//     message: "Sucess- User Add Sucessfully"
//   })
// }

  render(){
      return(
          <Grid container>
            <Grid item xs={3}/>
            {/* <Grid item xs={1}/> */}
            <Grid item xs={6}>
              <Card style={style.root}>
                <Paper style={{margin:20,}}>
                
                <CardContent>
                    <form>
                      <Grid container spacing={3}>
                      {/* <IconButton edge="start" style={style.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton> */}
                <Grid item xs={12}>
                <Icon >
                  <AddBoxIcon/>
                  </Icon>
                  
                      
                      <span style = {{fontSize:30}}><b>Add New User</b></span>
                      </Grid>

                      
                        <Grid item xs={6}>
                        <FormControl >
                          
                          <TextField style = {{width : "150%"}} variant="outlined" label="User Name*" type="text" name="User Nmae" fullWidth />
                        <Typography>Enter User Name</Typography>
                        </FormControl>
                        </Grid>

                        <Grid item xs={6}>
                        <FormControl >
                          
                          <TextField style = {{width : "150%"}} variant="outlined" label="E-mail*" type="text" name="e-mail" fullWidth />
                        <Typography>Enter E-mail adderss</Typography>
                        </FormControl>
                        </Grid>

                        <Grid item xs={6}>
                        <FormControl >
                          
                          <TextField style = {{width : "150%"}} variant="outlined" label="Password*" type="text" name="password" fullWidth />
                        <Typography>Enter your Password</Typography>
                        </FormControl>
                        </Grid>

                        <Grid item xs={6}>
                        <FormControl >
                          
                          <TextField 
                          style = {{width : "150%"}}
                          variant="outlined" 
                          label="Adderss*" 
                          type="text" 
                          name="adderss"
                          fullWidth 
                          />
                        <Typography>Enter your adderss</Typography>
                        </FormControl>
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
                               onClick={this.handleClickOpen}
                               
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

                      {/* {
                    this.state.message && (
                    <div>
                      <Typography color={this.state.successful ? 'succesful' : 'error'} variant="overline" display="block" gutterBottom>
                          <strong>{this.state.message}</strong>
                      </Typography>
                    </div>
                  )
                  } */}
                    </form>


                    {/* {this.state.alertMessage ? 
                          (<><br/>
                          <Alert severity="success">We will deliver your book soon..!! — Thank you!</Alert>
                            {/* <Box component="fieldset" borderColor="transparent" > 
                              <Typography ><center> Rate Us </center></Typography>
                              <Rating
                                name="Rate"
                                defaultValue={1}
                                getLabelText={(value) => customIcons[value].label}
                                IconContainerComponent={IconContainer}
                              />
                            </Box> */}
                          {/* </>):(null)
                        }     */} 
                </CardContent>
                </Paper>
                 </Card>
            </Grid>
            <Grid item xs={4}/>
          </Grid>
      )
  }
}