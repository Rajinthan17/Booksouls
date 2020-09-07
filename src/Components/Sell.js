import React, {Component} from "react";
import{Card,CardContent,Typography,FormControl,TextField,Grid,Paper} from "@material-ui/core";
import Button from '@material-ui/core/Button'
import image5 from "./image5.png"

const style={
    
  root:{
    minWidth:450,
    
    backgroundColor:"#8c8c8c",
    marginTop:40,
    color:'#212121',
    marginBottom : 40
    },
    card:{
      minWidth:500,
      backgroundcolor:'#212121',
      color:"#424242",
      margin:50
    }     
  }



export default class Sell extends Component{
  constructor (){
    super()
    this.state = {
      edit : false
    }
  }
    render(){
        return(
          
          
          <Grid container>
              <Grid item xs={1}/>
              <Grid item xs={5} style = {{marginTop:60}}>
                  <img src= {image5}  alt = "Background Books"/>
              </Grid>
              <Grid item xs={1}/>
              <Grid item xs={4}>
              <Card style={style.root} >
                <Paper style={{margin:10}}>
          
              <CardContent>
                <form >
                  
                  <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography component="h1" variant="h2" >Add Your Book</Typography>
                      </Grid>


                      
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               id="Book name"
                               label="Book Name"
                               name="book name"
                               autoComplete="book name"
                               autoFocus
                         />
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               id="author name"
                               label="Author Name"
                               name="author name"
                               autoComplete="auther name"
                         />



                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField 
                              type = "text area"
                               variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               id="descripition"
                               label="Descripition"
                               name="descripition"
                               autoComplete="Descripition"
                         />
                         </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               id="ISBN number"
                               label="ISBN Number"
                               name="ISBN Number"
                               autoComplete="ISBN number"
                         />
                        </FormControl>
                      </Grid>


                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               id="price"
                               label="Price"
                               name="Price"
                               autoComplete="Price"
                         />
                        </FormControl>
                      </Grid>


                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               id="Usage"
                               label="Usage"
                               name="Usage"
                               autoComplete="Usage"
                         />
                        </FormControl>
                      </Grid>


                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               fullWidth
                               id="phone number"
                               label="Phone Number"
                               name="phone number"
                               autoComplete="phone number"
                         />
                        </FormControl>
                      </Grid>


                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                              //  fullWidth
                               id="address"
                               label="Address"
                               name="address"
                               autoComplete="address"
                         />
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                         <input
                          accept="image/*"
                          display="none"
                          id="contained-button-file"
                          multiple
                          type="file"
                        />
                      </Grid>
                      <Grid item xs={6}/>
                        
                      
                      <Grid item xs={2}>
                        <FormControl>
                          <Button
                               type="submit"
                               fullWidth
                               variant="contained"
                               color="primary"
                           >
                             ADD
                          </Button>
                       </FormControl>
                       </Grid>
                       {/* <label htmlFor="contained-button-file">
          Please Upload
        </label> */}
        
                         
                        <Grid item xs={2}>
                        <FormControl>
                          <Button
                               type="reset"
                               fullWidth
                               variant="contained"
                               color="primary"
                          >
                         RESET
                          </Button>
                        </FormControl>
                      </Grid>


        
      {/* <Avatar src="/broken-image.jpg" /> */}


                      {/* <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label> */}

                      {/* <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label> */}

                      

                      </Grid> 
                 
                  
                </form>
              </CardContent>
              </Paper>
        </Card>
        </Grid>
        <Grid item xs={4}/>
      </Grid>

      
        )
    }
}